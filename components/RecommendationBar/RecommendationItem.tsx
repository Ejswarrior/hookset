import { ReactNode } from "react";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './recommendation.module.scss';

interface RecommendationItemProps {
    children?: ReactNode;
    href: URL;
    src: StaticImageData;
    alt: string;
}
export default function RecommendationItem(props: RecommendationItemProps) {
    const { children, href, src, alt } = props;
    return(
        <div>
            <Link href={href}><li className={styles.recList}><Image className={styles.recIamge} src={src} alt={alt} width={30} height={30}/>
            {children}</li></Link>
        </div>
    )
}