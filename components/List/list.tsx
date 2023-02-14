import Image from "next/image"
import Link from "next/link"
import styles from './list.module.scss'
import ListItem from "./ListItem"
import home from '../../public/home.png'
import { ListItemProps } from "./ListItem"

interface ListProps {
    data: ListItemProps[];
}

export default function List(props: ListProps) {
    const {data} = props
    return (
        <ul className={styles.list}>
            {data.map((item) => {
                return <ListItem src={item.src} alt={item.alt} href={item.href}>{item.children}</ListItem>
            })}
        </ul>
    )
}