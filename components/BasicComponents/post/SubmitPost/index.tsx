'use client'
import ButtonPrimary from '../../Button/ButtonPrimary';
import styles from './SubmitPost.module.scss';

interface SubmitPostProps {
    onSubmit?: () => void;
    value?: string;
    onChange?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void
    id?: string;
}

export default function SubmitPost(props: SubmitPostProps) {
    const {onSubmit, value, onChange, id} = props

    return (
        <div className={styles.submitPostContainer}>
            <textarea
                placeholder='Make a post?'
                value={value  || ''}
                onChange={onChange}
                id={id || ''}
                className={styles.postInput}
            >

            </textarea>

            <div className={styles.postBar}>
                <ButtonPrimary onClick={onSubmit}>Post</ButtonPrimary>
            </div>
        </div>
    )
}