'use client';

import TextInput from "@/components/BasicComponents/TextInput/TextInput";
import loginStyles from './login.module.scss';
import ButtonPrimary from "@/components/BasicComponents/Button/ButtonPrimary";
import TextLink from "@/components/BasicComponents/TextLink/TextLink";

export default function LoginPage() {
    return (
        <div className={loginStyles.login}> 
            <form className={loginStyles.formContainer}>
                <div className={loginStyles.innerContainer}>
                    <h1 className={loginStyles.title}>Hookset</h1>
                    <div className={loginStyles.emailInput}>
                        <TextInput 
                            required
                            type='email'
                            helperText="Enter in your email."
                            placeholder='Email'
                            name='textinput'
                            id='textinput'
                            maxlength={35}
                        />
                    </div>

                    <div className={loginStyles.passwordInput}>
                        <TextInput 
                            required
                            type='password'
                            helperText="Enter in your password."
                            placeholder='Password.'
                            name='textinput'
                            id='textinput'
                            maxlength={35}
                        />
                        <TextLink link='./google'>Reset your password</TextLink>
                    </div>
                </div>

                <div className={loginStyles.buttonContainer}>
                    <ButtonPrimary tabIndex={0} variation='primary' type='submit' onClick={() => console.log('Clicked')}>Submit</ButtonPrimary>
                    <ButtonPrimary tabIndex={0} variation='secondary' type='submit' onClick={() => console.log('Clicked')}>Create Account</ButtonPrimary>
                </div>
            </form>
        </div>
    )
}