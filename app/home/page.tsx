'use client';
import styles from './home.module.scss'
import ContainerRight from '@/components/BasicComponents/Containers/containerRight';
import SubmitPost from '@/components/BasicComponents/Post/SubmitPost';
import {useState} from 'react';

export default function Home(){   
    const [postContent, setPostContent] = useState<string>('');

    const _onChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(evt.target.value)
    }

    const onSubmit = async () => {
        await fetch('http://localhost:8020/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                content: postContent,
            })
        })
    }
    return(
        <div className={styles.homeWrapper}>
            <div className={styles.containerMiddle}>
                <div className={styles.feedSticky}>
                </div>
                <div className={styles.post}>
                    <SubmitPost onChange={_onChange} value={postContent} onSubmit={onSubmit}/>
                </div>
            </div>
            <ContainerRight/>
        </div>
    )
}
