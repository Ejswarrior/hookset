'use client';
import {useState} from 'react';
import {Auth} from 'aws-amplify'
import styles from './CreateAccount.module.scss'
import TextInput from '@/components/BasicComponents/TextInput/TextInput';

interface SignInType {
    firstName: string;
    lastName: string;
    email: string;
    dob: Date
}

export function CreateAccount(){
    const [page, setPage] = useState(false)
    const [signUpData, setSignUpData] = useState<SignInType>({
        firstName: '',
        lastName: '',
        email: '',
        dob: new Date()
    })

    const _onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <div className={styles.createAccountContainer}>
            <form className={styles.formContainer}>
                <TextInput 
                type="email"
                placeholder='johndoe@gmail.com'
                id='email'
                required
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => _onChange(evt)}
                />

            </form>
        </div>
    )
}

export default CreateAccount