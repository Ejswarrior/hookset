import Profile from "../Profile/Profile"
import styles from './container.module.scss'

export default function ContainerLeft() {
    return (
        <div className={styles.containerLeft}>
            <h3>HookSet</h3>
            <Profile/>
        </div>
    )
}