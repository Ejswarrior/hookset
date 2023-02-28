import Profile from "../Profile/Profile"
import styles from './container.module.scss'
import List from "../List/list"
import home from '../../../public/home.png';
import notification from '../../../public/notification.png';
import messages from '../../../public/messenger.png';
import settings from '../../../public/email.png';


export default function ContainerLeft() {
    
    const data = [
        {
            children: 'Home',
            src: home,
            alt: 'home',
            href: 'home'
        },
        {
            children: 'Notifications',
            src: notification,
            alt: 'Notification Icon',
            href: '/notifications'
        },
        {
            children: 'Messages',
            src: messages,
            alt: 'Messages Icon',
            href: '/messages'
        },
        {
            children: 'Settings',
            src: settings,
            alt: 'Setting Icon',
            href: '/settings'
        },
        {
            children: 'Catches',
            src: settings,
            alt: 'Setting Icon',
            href: '/catches'
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