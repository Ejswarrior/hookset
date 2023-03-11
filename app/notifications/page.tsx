import Notification from "@/components/PageComponents/Notification/Notification";
import styles from './NotificationPage.module.scss';

export default function NotificationPage() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Notifications</h1>
            </div>
            <Notification />
        </div>
    )
}