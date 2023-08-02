import styles from './Post.module.scss';
import Profile from '../Profile/Profile';
import ButtonPrimary from '../Button/ButtonPrimary';

interface PostProps {
    /**
     * Content of the post
     */
    content: string;
    /**
     * Total Number of posts
     */
    likeCount?: number;
    /**
     * Total Number of comments
     */
    commentCount?: number;
    /**
     * Event handler for submitting the post
     */
}
export default function Post(props: PostProps) {
    const {content, likeCount = 0, commentCount = 0} = props
    return(
    <div className={styles.postContainer}>
        <div className={styles.attribution}>
            <div className={styles.postProfile}>
                <Profile expanded={false}/>
                <label className={styles.postUsername}>Username</label>
            </div>
            <button className={styles.postSettings}>...</button>
        </div>

        <span className={styles.postContent}>{content}</span>
        <div className={styles.bottonContainer}>
            <div className={styles.postIcons}>
                <p>{likeCount}</p>
                <button className={styles.buttonComment}><i className={styles.iconComment}/></button>
                <p>commentCount</p>
                <button className={styles.buttonLike}><i className={styles.iconLike}/></button>
            </div>
            <div className={styles.buttonContainer}>
            </div>
        </div>
    </div>
    )
}