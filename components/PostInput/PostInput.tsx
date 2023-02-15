//Post requires photo(s), fish type and location. Optional requirements are bait/equipment/caption
import {useState} from 'react'
import Image from 'next/image'
export default function PostInput() {

    const [postContent, setPostContent] = useState('')
 return (
    <div>
        <div>Profile</div>
        <input type='text' value={postContent} onChange={(e) => setPostContent(e.target.value)} placeholder={'Tight Lines!'} className={styles.postInput}/>

        <div>
        <Image/>
        <Image/>
        <Image/>
        <input type='submit' value={'Post'}/>
        </div>
    </div>
 )
}