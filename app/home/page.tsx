'use client';
import styles from './home.module.scss'
import ContainerRight from '@/components/BasicComponents/Containers/containerRight';
import SubmitPost from '@/components/BasicComponents/Post/SubmitPost';
import {useEffect, useState} from 'react';
import Post from '@/components/BasicComponents/Post/Post';
import { Amplify, Auth } from "aws-amplify";
import ApiService from '@/Services/ApiService';



export default function Home(){   
    const [postContent, setPostContent] = useState<string>('');
    const [posts, setPosts] = useState<any[]>()

    const _onChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(evt.target.value)
    }

    const onSubmit = async () => {
        const res = await ApiService.createPost({
            content: postContent,
            userId: 'e8dcef0d-f085-4bab-b7dc-56da8c5e0f11',
            likes: 0
        })

        console.log(res)
    }

    useEffect(() => {
        const getData = async () => {
            const posts = await ApiService.getPost()
            console.log(posts)
            setPosts(posts)
        }
        getData()
    }, [])

    return(
        <div className={styles.homeWrapper}>
            <div className={styles.containerMiddle}>
                <div className={styles.feedSticky}>
                </div>
                <div className={styles.post}>
                    <SubmitPost onChange={_onChange} value={postContent} onSubmit={onSubmit}/>
                </div>

                <div className={styles.postsContainer}>
                    {
                        posts && posts.map((item) => {
                            return <Post username={item.userId} content={item.content}/>
                        })
                    }
                </div>
            </div>
            <ContainerRight/>
        </div>
    )
}
