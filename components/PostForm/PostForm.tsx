import styles from './PostForm.module.scss'

interface FormPostProps {
    id: string;
    name: string;
    maxLength: number;
    placeHolder: string;
    required: boolean;
}

export default function FormPost(props: FormPostProps) {
    const {id, name, maxLength, required, placeHolder} = props

    return (
        <div>
            <input
                className={styles.postInput}
                required={required}
                id={id}
                maxLength={maxLength}
                name={name}
                placeholder={placeHolder}
            />
        </div>
    )
}