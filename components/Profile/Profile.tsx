import Image from 'next/image'
import styles from './profile.module.scss'
import dw from '../../public/dw.jpg'


export default function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.usernameGroup}>
                <Image className={styles.profilePic} src={dw} alt='Profile Picture' width={30} height={30}/>
                <label className={styles.userName}>@Ejswarrior</label>
            </div>

            <div className={styles.settings}>...</div>
        </div>
    )

}