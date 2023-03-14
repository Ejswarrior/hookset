"use client"

import { useState } from "react"
import Profile from "../Profile/Profile"
import styles from "./container.module.scss"
import List from "../List/list"
import home from "../../../public/home.png";
import notification from "../../../public/notification.png";
import messages from "../../../public/messenger.png";
import settings from "../../../public/email.png";


export default function ContainerLeft() {
    
	const data = [
		{children: "Home",
			src: home,
			alt: "home",
			href: "home",
			expanded: false},
		{children: "Notifications",
			src: notification,
			alt: "Notification Icon",
			href: "/notifications",
			expanded: false},
		{children: "Messages",
			src: messages,
			alt: "Messages Icon",
			href: "/messages",
			expanded: false},
		{children: "Settings",
			src: settings,
			alt: "Setting Icon",
			href: "/settings",
			expanded: false},
		{children: "Catches",
			src: settings,
			alt: "Setting Icon",
			href: "/catches",
			expanded: false}

	]

	const [isExpanded, setIsExpanded] = useState( false );

	const leftContainerStyles = [styles.containerLeft];

	if ( isExpanded ) leftContainerStyles.push( styles.expanded );

	return (
		<div className={leftContainerStyles.join( " " )}>
			<div className={styles.listContainer}>

				{isExpanded &&
                <div className={styles.leftHeader}>
                	<h3 className={styles.listTitle}>HookSet</h3>
                	<button onClick={() => {setIsExpanded( !isExpanded )}} className={styles.buttonIcon}>X</button>   
                </div>
				}

				{!isExpanded &&
                <div className={styles.headerCollapsed}>
                	<button onClick={() => {setIsExpanded( !isExpanded )}} className={styles.buttonIcon}>X</button>   
                </div>
				}
				<Profile expanded={isExpanded}/>
				<List expanded={isExpanded} data={data}/>
			</div>
		</div>
	)
}