'use client';
import {useState} from 'react';
import {Auth} from 'aws-amplify'
import styles from './CreateAccount.module.scss'
import TextInput from '@/components/BasicComponents/TextInput/TextInput';
import ButtonPrimary from '@/components/BasicComponents/Button/ButtonPrimary';
import { useRouter } from 'next/navigation';

interface SignInType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;  
    confirmPassword: string;
}

export function CreateAccount(){
    const [page, setPage] = useState(false)
    const [signUpData, setSignUpData] = useState<SignInType>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [isPassword, setIsPassword] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const router = useRouter()

    const _onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpData({
            ...signUpData,
            [evt.target.id]: evt.target.value
        })
    }

    const onNext = () => {
        setIsPassword(true)
    }

    const _onSubmit = async () => {
        if(signUpData.password !== signUpData.confirmPassword) {
            setIsError(true)
            setErrorMessage('Passwords Must Match')
            return
        }


        Auth.signUp({
            username: signUpData.email,
            password: signUpData.password,
            attributes: {
              email: signUpData.email,
              name: `${signUpData.firstName} ${signUpData.lastName}`,
            }
        }).then((result) => {
            console.log(result)
            router.push('/home')
        })
        .catch((error) => {
            setIsError(true)
            setErrorMessage(error)
        })
    }

    return (
        <div className={styles.createAccountContainer}>
            <form className={styles.formContainer}>
                <h1 className={styles.title}>Sign up</h1>
                {!isPassword && 
                <>
                <div className={styles.inputWrapper}>
                <TextInput 
                    type="text"
                    placeholder='John'
                    id='firstName'
                    required
                    value={signUpData.firstName}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => _onChange(evt)}
                />
                </div>

                <div className={styles.inputWrapper}>
                    <TextInput 
                        type="text"
                        placeholder='Doe'
                        id='lastName'
                        required
                        value={signUpData.lastName}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => _onChange(evt)}
                    />
                </div>

                <div className={styles.inputWrapper}>
                    <TextInput 
                        type="email"
                        placeholder='johndoe@gmail.com'
                        id='email'
                        required
                        value={signUpData.email}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => _onChange(evt)}
                    />
                </div>
                </>
            }
            {isPassword && (
                <>
                <div className={styles.inputWrapper}>
                    <TextInput 
                        type="password"
                        placeholder=''
                        helperText='Enter Password'
                        errorText={errorMessage}
                        error={isError}
                        id='password'
                        required
                        value={signUpData.password}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => _onChange(evt)}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <TextInput 
                        type="password"
                        helperText='Confirm Password'
                        id='confirmPassword'
                        errorText={errorMessage}
                        error={isError}
                        required
                        value={signUpData.confirmPassword}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => _onChange(evt)}
                    />
                </div>
                </>
            )}

                <div className={styles.buttonContainer}>
                    {!isPassword ? 
                    <ButtonPrimary onClick={onNext} type='button' variation='primary'>Next</ButtonPrimary> 
                    : <ButtonPrimary onClick={_onSubmit} type='button' variation='primary'>Submit</ButtonPrimary>
                    }
                    <ButtonPrimary type='button' onClick={() => router.push('/login')} variation='secondary'>Cancel</ButtonPrimary>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount