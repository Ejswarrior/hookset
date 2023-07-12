import styles from './SettingsTab.module.scss';
import Image, {StaticImageData} 
 from 'next/image';

interface ImageProps {
    src: StaticImageData;
    alt: string;
}
interface TabProps {
    iconImage?: ImageProps;
    title: string;
    subtitle?: string;
    withBorder?: boolean;
}
export default function SettingTab(props: TabProps) {

    const tabStyles = [styles.tabContainer]
    
    if (props?.withBorder) tabStyles.push(styles.withBorder)

    return (
        <div className={tabStyles.join(' ')}>
            <div className={styles.infoGroup}>
                {props.iconImage && <Image className={styles.icon} src={props.iconImage.src} alt={props.iconImage.alt}/>}
                <div className={styles.titleGroup}>
                    <h3 className={styles.title}>{props.title}</h3>
                    {props.subtitle && <h5 className={styles.subtitle}>{props.subtitle}</h5>}
                </div>
            </div>

            <div className={styles.iconArrow}> {'>'} </div>
        </div>
    )
}