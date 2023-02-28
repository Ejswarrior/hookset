import { type } from 'os';
import { ReactNode } from 'react';
import styles from './PostForm.module.scss'

interface FormPostProps {
    id: string;
    name: string;
    maxLength: number;
    placeHolder: string;
    required: boolean;
    helperText: ReactNode;
    error: boolean;
    type: 'text' | 'email' | 'password';
}

export default function FormPost(props: FormPostProps) {
    const {
        id, 
        name,
        maxLength, 
        required,
        placeHolder,
        helperText,
        error,
        type } = props

        const inputStyles = [styles.postInput]
        const textStyles = [styles.helperText]

        if ( error ) {
            inputStyles.push(styles.error)
            textStyles.push(styles.error)
        }

    return (
        <div className={styles.inputContainer}>

            <input
                className={inputStyles.join(' ')}
                required={required}
                id={id}
                type={type}
                maxLength={maxLength}
                name={name}
                placeholder={placeHolder}
            />
            <p className={textStyles.join(' ')}>{helperText}</p>

        
        </div>
    )
}