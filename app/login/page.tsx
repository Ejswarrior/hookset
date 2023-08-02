'use client';

import TextInput from "@/components/BasicComponents/TextInput/TextInput";
import loginStyles from './login.module.scss';
import ButtonPrimary from "@/components/BasicComponents/Button/ButtonPrimary";
import TextLink from "@/components/BasicComponents/TextLink/TextLink";
import AWSexport from '../../src/aws-exports'
import { Amplify, Auth } from "aws-amplify";
import { useState } from "react";
import { useRouter } from "next/navigation";

Amplify.configure(AWSexport)
Auth.configure(AWSexport)

export default function LoginPage() {
    const router = useRouter()
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setLoginInfo({
            ...loginInfo,
            [evt.target.id]: evt.target.value
        })
    }

    const onSubmit = async () => {
        await Auth.signIn(
             loginInfo.email,
             loginInfo.password
        ).then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    return (
        <div className={loginStyles.login}> 
            <form className={loginStyles.formContainer}>
                <div className={loginStyles.innerContainer}>
                    <h1 className={loginStyles.title}>Hookset</h1>
                    <div className={loginStyles.emailInput}>
                        <div className={loginStyles.inputWrapper}>
                        <TextInput 
                            required
                            type='email'
                            helperText="Enter in your email."
                            placeholder='Email'
                            name='Email Input'
                            id='email'
                            value={loginInfo.email}
                            onChange={onChange}
                            maxlength={35}
                        />
                        </div>
                    </div>

                    <div className={loginStyles.passwordInput}>
                        <TextInput 
                            required
                            type='password'
                            helperText="Enter in your password."
                            placeholder='Password'
                            name='Password Input'
                            id='password'
                            value={loginInfo.password}
                            onChange={onChange}
                            maxlength={35}
                        />
                        <TextLink link='./google'>Reset your password</TextLink>
                    </div>
                </div>

                <div className={loginStyles.buttonContainer}>
                    <ButtonPrimary tabIndex={0} variation='primary' type='submit' onClick={onSubmit}>Submit</ButtonPrimary>
                    <ButtonPrimary tabIndex={0} variation='secondary' type='submit' onClick={() => console.log('Clicked')}>Create Account</ButtonPrimary>
                </div>
            </form>
        </div>
    )
}