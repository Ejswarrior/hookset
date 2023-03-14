import Post from '@/components/BasicComponents/Post/Post';
import styles from './home.module.scss'
import ContainerRight from '@/components/BasicComponents/Containers/containerRight';
import Link from 'next/link';


export async function Home(){
    return(
        <div className={styles.homeWrapper}>
            <div className={styles.containerMiddle}>
                <div className={styles.feedSticky}>
                    <Link href='/map'><h1>Map</h1></Link>
                </div>
                <div className={styles.post}><Post/></div>
            </div>
            <ContainerRight/>
        </div>
    )
}
export default Home;