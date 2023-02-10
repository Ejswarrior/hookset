import Profile from "../Profile/Profile"
import styles from './container.module.scss'
import List from "../List/list"


export default function ContainerLeft() {
    return (
        <div className={styles.containerLeft}>

            <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>HookSet</h3>
                <Profile/>
                <List/>
            </div>
        </div>
    )
}