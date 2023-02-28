import styles from './container.module.scss'
import RecommendationBar from '../RecommendationBar/RecommendationBar'
export default function ContainerRight() {
    return (
        <div className={styles.containerRight}>
            <div>
                <RecommendationBar />
            </div>
        </div>
    )

}