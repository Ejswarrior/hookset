import Post from '@/components/BasicComponents/post/post';
import Profile from '@/components/BasicComponents/Profile/Profile';
import styles from './home.module.scss'
import ContainerLeft from '@/components/BasicComponents/Containers/containerLeft';
import ContainerRight from '@/components/BasicComponents/Containers/containerRight';


export async function Home(){
    return(
        <div className={styles.homeWrapper}>
            <div className={styles.containerMiddle}>
                <div className={styles.feedSticky}>
                    <h1>Map</h1>
                </div>
                <div className={styles.post}><Post/></div>
            </div>
            <ContainerRight/>
        </div>
    )
}
export default Home;