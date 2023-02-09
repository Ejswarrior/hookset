import Image from "next/image"
import Link from "next/link"
export default function List() {

    return (
        <ul>
            <Link href='/home'><li>
                <Image src='' alt='Home Icon' width={25} height={25}/>
                <h2>Home</h2>
            </li></Link>

            <Link href='/Notifications'><li>
                <Image src='' alt='Home Icon' width={25} height={25}/>
                <h2>Notifications</h2>
            </li></Link>

            <Link href='/messages'><li>
                <Image src='' alt='Home Icon' width={25} height={25}/>
                <h2>Messages</h2>
            </li></Link>

            <Link href='/profile'><li>
                <Image src='' alt='Home Icon' width={25} height={25}/>
                <h2>Profile</h2>
            </li></Link>
        </ul>
    )
}