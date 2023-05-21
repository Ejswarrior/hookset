import styles from './Post.module.scss';
import Profile from '../Profile/Profile';


export default function Post() {

    return(
    <div className={styles.postContainer}>
        <div className={styles.attribution}>
            <div className={styles.postProfile}>
                <Profile expanded={false}/>
                <label className={styles.postUsername}>Username</label>
            </div>
            <button className={styles.postSettings}>...</button>
        </div>

        <span className={styles.postContent}>I went for a walk today and found that I really hate winter. Like why is it always so cold</span>
        <div className={styles.postIcons}>
            <p>0</p>
            <button className={styles.buttonComment}><i className={styles.iconComment}/></button>
            <p>0</p>
            <button className={styles.buttonLike}><i className={styles.iconLike}/></button>
        </div>
    </div>
    )
}