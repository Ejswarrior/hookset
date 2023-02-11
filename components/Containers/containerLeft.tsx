import Profile from "../Profile/Profile"
import styles from './container.module.scss'
import List from "../List/list"


export default function ContainerLeft() {
    
    const data = [
        {
            children: 'Home',
            src:'/public/home.png',
            alt: 'home',
            href: 'home'
        },
        {
            children: 'Notifications',
            src:'/public/notification.png',
            alt: 'Notification Icon',
            href: '/notifications'
        },
        {
            children: 'Messages',
            src:'/public/messages.png',
            alt: 'Messages Icon',
            href: '/messages'
        },
        {
            children: 'Settings',
            src:'/public/settings.png',
            alt: 'Setting Icon',
            href: '/settings'
        }
    ]
    return (
        <div className={styles.containerLeft}>

            <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>HookSet</h3>
                <Profile/>
                <List data={data}/>
            </div>
        </div>
    )
}