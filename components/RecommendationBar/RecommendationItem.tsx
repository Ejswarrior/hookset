import { ReactNode } from "react";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './recommendation.module.scss';

export interface RecommendationItemProps {
    src: StaticImageData;
    alt: string;
    fish: ReactNode;
    fishNumber: number;
    catches: number;
    bait: string;
    water: string;
    userName: string;
}

export default function RecommendationItem(props: RecommendationItemProps) {

    const {src, alt, fish, fishNumber, catches, bait, water, userName } = props;

    return( 

        <div>
            <li className={styles.recList}>
                <div className={styles.fishTitleGroup}>
                    <Image className={styles.recIamge} src={src} alt={alt} width={100} height={100}/>
                    <h1 className={styles.fishTitle}>#{fishNumber} {fish}</h1>
                </div>
                <div className={styles.fishList}>
                    <h4 className={styles.listItem}>Catches: {catches}</h4>
                    <h4 className={styles.listItem}>Top Bait: {bait}</h4>
                    <h4 className={styles.listItem}>Top Water: {water}</h4>
                    <h4 className={styles.listItem}>Top {fish} catcher: {userName}</h4>
                </div>
            </li>
        </div>

    )
}