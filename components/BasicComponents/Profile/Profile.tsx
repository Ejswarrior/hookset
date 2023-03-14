import Image, { StaticImageData } from "next/image"
import styles from "./profile.module.scss";
import dw from "../../../public/dw.jpg";

interface ProfileProps {
    expanded: boolean;
    username?: string;
    profilePic?: StaticImageData;
}
export default function Profile( props: ProfileProps ) {
	const {expanded,
		username ="ejswarrior",
		profilePic = dw,} = props

	const profileStyles = [styles.profile]

	if ( expanded ) profileStyles.push( styles.expanded )


	return (
		<div className={profileStyles.join( " " )}>

			{expanded && 
                <div className={styles.usernameGroup}>
                	<Image className={styles.profilePic} src={profilePic} alt='Profile Picture' width={30} height={30}/>
                	<label className={styles.userName}>@{username}</label>
                </div>
			}


			{!expanded && 
                <div className={styles.userExpanded}>
                	<Image className={styles.profilePic} src={dw} alt='Profile Picture' width={30} height={30}/>
                </div>
			}

			{expanded && <div className={styles.settings}>...</div>}
		</div>
	)

}