'use client';
import {useState} from 'react';
import {Auth} from 'aws-amplify'
import styles from './CreateAccount.module.scss'
import TextInput from '@/components/BasicComponents/TextInput/TextInput';
import ButtonPrimary from '@/components/BasicComponents/Button/ButtonPrimary';
import { useRouter } from 'next/navigation';
import { Amplify } from 'aws-amplify';
import { CreateUser } from '@/pages/api/Interfaces/CreateUser.interface';
import ApiService from '@/Services/ApiService';

export function CreateAccount(){
    const [page, setPage] = useState(false)
    const [signUpData, setSignUpData] = useState<CreateUser & {confirmPassword: string}>({
        firstName: '',
        userName: '',
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

        const res = await ApiService.createAccount({
            userName: signUpData.userName,
            firstName: signUpData.firstName,
            email: signUpData.email,
            password: signUpData.password
        })
        console.log(res)
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
                        placeholder='username'
                        id='userName'
                        required
                        value={signUpData.userName}
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