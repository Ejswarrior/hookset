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
        console.log(postContent)
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
