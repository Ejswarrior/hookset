import Profile from '@/components/BasicComponents/Profile/Profile'
import styles from './Notification.module.scss'


interface NotificationProps {
    content?: React.ReactNode;
    open?: boolean;
    onClick?: (evt: React.MouseEvent) => void;
}

export default function Notification(props: NotificationProps) {
    return (
        <div onClick={props.onClick} className={styles.notificationContainer}>
            <div className={styles.profileGroup}>
                <p className={styles.title}>Ejswarrior mentioned you</p>
                <Profile expanded={false}/>
            </div>

            <div className={styles.settings}>...</div>

            <div className={styles.content}>{props.content}</div>
        </div>
    )
}