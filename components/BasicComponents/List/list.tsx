import Image from "next/image"
import Link from "next/link"
import styles from './list.module.scss'
import ListItem from "./ListItem"
import home from '../../public/home.png'
import { ListItemProps } from "./ListItem"

interface ListProps {
    data: ListItemProps[];
    expanded: boolean;
}

export default function List(props: ListProps) {
    const {data, expanded} = props

    const listStyles = [styles.list]

    if (!expanded) listStyles.push(styles.expanded)

    return (
        <ul className={listStyles.join(' ')}>
            {data.map((item, index) => {
                return <ListItem key={index} expanded={expanded} src={item.src} alt={item.alt} href={item.href}>{item.children}</ListItem>
            })}
        </ul>
    )
}