import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import styles from "./list.module.scss"

export interface ListItemProps {
    href: string;
    src: StaticImageData;
    alt: string;
    children: ReactNode;
    expanded: boolean;
}

export default function ListItem( props: ListItemProps ) {

	const {href, src, alt, children, expanded} = props;

	const listItemStyles = [styles.listStyles]

	if ( !expanded ) listItemStyles.push( styles.expanded )

	return (
		<Link href={href}><li className={listItemStyles.join( " " )}>
			<Image src={src} alt={alt} width={25} height={25} className={styles.listImage}/>
			<label className={styles.listChildren}>{children}</label>
		</li></Link>
	)
}   