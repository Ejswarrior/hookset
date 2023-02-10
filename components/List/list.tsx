import Image from "next/image"
import Link from "next/link"
import styles from './list.module.scss'
import ListItem from "./ListItem"
import home from '../../public/home.png'

export default function List() {

    return (
        <ul>
            <ListItem 
                href='/home'
                src='/public/home.png'
                alt='Home Icon'
                children='Home'
            ></ListItem>
        </ul>
    )
}