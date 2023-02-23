import { ReactNode } from "react";
import Image, { StaticImageData } from 'next/image';
import RecommendationItem, {RecommendationItemProps} from "./RecommendationItem";
import Link from 'next/link';
import styles from './recommendation.module.scss';

interface RecommendationGroupProps {
    data: RecommendationItemProps[];
}
export default function RecommendationGroup(props: RecommendationGroupProps) {
    const { data } = props;

    return(

        <div>
            <ul className={styles.fishList}> 
                {data.map((item, index) => {
                    return <RecommendationItem key={index} {...item}/> 
                })} 
            </ul>
        </div>
        
    )
}