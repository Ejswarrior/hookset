'use client'
import { type } from "os";
import { ReactNode, useState } from "react";
import styles from "./PostForm.module.scss"

interface FormPostProps {
    id: string;
    name: string;
    maxLength: number;
    placeHolder: string;
    required: boolean;
    helperText: ReactNode;
    error: boolean;
}

export default function FormPost(props: FormPostProps) {
    const {
        id, 
        name,
        maxLength, 
        required,
        placeHolder,
        helperText,
        error} = props

        const inputStyles = [styles.postInput]

        if ( error ) {
            inputStyles.push(styles.error)
        }
        const [value, setValue] = useState('')

        const _onChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
            setValue(evt.target.value)
            console.log(value)
        }

    return (
        <div className={styles.inputContainer}>

            <textarea
                className={inputStyles.join(" ")}
                required={required}
                id={id}
                maxLength={maxLength}
                name={name}
                placeholder={placeHolder}
                draggable={false}
                onChange={_onChange}
                value={value}
            />
            <p className={styles.helperText}>{helperText}</p>

        </div>
    )
}