import styles from './Switch.module.scss';

interface SwitchProps {
    checked: boolean;
    disabled: boolean;
    
}

export default function Switch() {

    <div className={styles.switch}>
        <input type='checkbox'/>
        <div className={styles.slider}></div>
    </div>
}