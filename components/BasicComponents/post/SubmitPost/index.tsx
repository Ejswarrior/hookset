'use client'
import { useState } from 'react';
import ButtonPrimary from '../../Button/ButtonPrimary';
import PostModal from '../PostModal/PostModal';
import styles from './SubmitPost.module.scss';

interface SubmitPostProps {
    onSubmit?: () => void;
    value?: string;
    onChange?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void
    id?: string;
}

export default function SubmitPost(props: SubmitPostProps) {
    const {onSubmit, value, onChange, id} = props
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    return (
        <>
            <div className={styles.submitPostContainer} style={{opacity: isModalVisible ? 0.4 : 1}}>
                <textarea
                    placeholder='Make a post?'
                    value={value  || ''}
                    onChange={onChange}
                    id={id || ''}
                    className={styles.postInput}
                    disabled
                >
                </textarea>

                <div className={styles.postBar}>
                    <ButtonPrimary onClick={() => setIsModalVisible(true)}>CreatePost</ButtonPrimary>
                </div>
            </div>
            <PostModal visible={isModalVisible} onSubmit={() => console.log('hit')}/>
        </>
    )
}