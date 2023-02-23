//Post requires photo(s), fish type and location. Optional requirements are bait/equipment/caption
import {useState} from 'react'
import Image from 'next/image'
export default function PostInput() {

    const [postContent, setPostContent] = useState('')
 return (
    <div>
        <div>Make a Post</div>
        <div>Add a Catch</div>
    </div>
 )
}