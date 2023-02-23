'use client'
import styles from './container.module.scss';
import SearchBar from '../Search/SearchBar';
import {useState} from 'react'
import RecommendationBar from '../RecommendationBar/RecommendationBar';

export default function ContainerRight() {

    const [searchValue, setValue] = useState('')
    return (
        <div className={styles.containerRight}>
            <SearchBar value={searchValue} onChange={(e) => {setValue(e.target.value)}} />
            <RecommendationBar />
        </div>
    )

}