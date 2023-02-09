import Post from '@/components/Post/post';
import Profile from '@/components/Profile/Profile';
import styles from './home.module.scss'
import ContainerLeft from '@/components/Containers/containerLeft';
import ContainerRight from '@/components/Containers/containerRight';


export async function Home(){
    return(
        <div>
            <div className={styles.conatinerMiddle}>
                <div className={styles.feedSticky}>
                    <h1>Home</h1>
                </div>
                <div className={styles.post}><Post/></div>
            </div>
        </div>
    )
}


export default Home;