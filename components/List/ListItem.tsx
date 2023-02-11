import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import styles from './list.module.scss'

export interface ListItemProps {
    href: string;
    src: StaticImageData;
    alt: string;
    children: ReactNode;
}

export default function ListItem(props: ListItemProps) {

    const {href, src, alt, children} = props;

    return (
        <Link href={href}><li className={styles.listStyles}>
                <Image src={src} alt={alt} width={25} height={25} className={styles.ListImage}/>
                <label className={styles.ListChildren}>{children}</label>
        </li></Link>
    )
}   