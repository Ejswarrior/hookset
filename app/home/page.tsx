import Post from '@/components/Post/post';
import Profile from '@/components/Profile/Profile';
import styles from './home.module.scss'
import ContainerLeft from '@/components/containers/containerLeft';
import ContainerRight from '@/components/containers/containerRight';


export async function Home(){
    return(
            <div className={styles.containerMiddle}>
                <div className={styles.feedSticky}>
                    <h1>Map</h1>
                </div>
                <div className={styles.post}><Post/></div>
            </div>
    )
}


export default Home;