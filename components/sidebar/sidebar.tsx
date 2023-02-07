import styles from './sideBar.module.scss'

export default function SideBar() {
    
    return(
    <div>
        <div className={styles.sideBarProfile}>
            <div>Profile Pic</div>
            <div>...</div>
        </div>

        <div className={styles.sideBarNav}>
            <ul>
                <li>profile</li>
                <li>Notifications</li>
                <li>Messages</li>
                <li>Settings</li>
            </ul>
        </div>
    </div>
    )
}