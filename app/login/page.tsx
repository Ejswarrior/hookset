import TextInput from "@/components/BasicComponents/TextInput/TextInput"
import loginStyles from './login.module.scss'
export default function LoginPage() {
    return (
        <div className={loginStyles.login}> 
            <form>
                <h1 className={loginStyles.title}>Hookset</h1>
                <TextInput 
                    required
                    type='email'
                    helperText="Enter in your password."
                    placeholder='Enter in your password.'
                    name='textinput'
                    id='textinput'
                    maxlength={25}
                />

                <TextInput 
                    required
                    type='password'
                    helperText="Enter in your password."
                    placeholder='Enter in your password.'
                    name='textinput'
                    id='textinput'
                    maxlength={25}
                />
            </form>
        </div>
    )
}