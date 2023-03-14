import styles from "./sideBar.module.scss"
import Link from "next/link"

export default function SideBar() {
    
	return(
		<div>
			<div className={styles.sideBarProfile}>
				<div>Profile Pic</div>
				<div>...</div>
			</div>

			<div className={styles.sideBarNav}>
				<ul>
					<li><img/><Link href="profile">Profile</Link></li>
					<li><img/><Link href="/notification">Notifications</Link></li>
					<li><img/><Link href='/messages'>Messages</Link></li>
					<li><img/><Link href='/setting'>Settings</Link></li>
				</ul>
			</div>
		</div>
	)
}