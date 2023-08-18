'use client';
import styles from './home.module.scss'
import ContainerRight from '@/components/BasicComponents/Containers/containerRight';
import SubmitPost from '@/components/BasicComponents/Post/SubmitPost';
import {useEffect, useState} from 'react';
import { ApiService } from '@/Services/ApiService';
import Post from '@/components/BasicComponents/Post/Post';
import AWSexport from '../../src/aws-exports'
import { Amplify, Auth } from "aws-amplify";
Auth.configure({Auth: AWSexport})



export default function Home(){   
    const [postContent, setPostContent] = useState<string>('');
    const [posts, setPosts] = useState()

    const _onChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(evt.target.value)
    }

    const onSubmit = async () => {
        const res = await new ApiService().createPost({
            content: postContent
        })

        console.log('hits')
        console.log(res)
    }


    // const getPosts = async () => {
    //     const res = await new ApiService().getPost()
    //     console.log(res)
    //     setPosts(res)
    // }

    const getAuthenticatedUser = async ()  => {
        const user = await Auth.currentAuthenticatedUser()
        console.log(user)
    }
  
    useEffect(() => {
      getAuthenticatedUser()
    }, [])

    useEffect(() => {
        console.log('hit')
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
                            return <Post content={item.content}/>
                        })
                    }
                </div>
            </div>
            <ContainerRight/>
        </div>
    )
}
