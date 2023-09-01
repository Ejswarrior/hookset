'use client'
import styles from './Tabs.module.scss';

export interface TabProps {
    /**
     * Title for the tab
     */
    title: string;
    /**
     * toggles selected state for the tab
     */
    selected?: boolean;
    /**
     * Content rendered for the tab
     */
    children?: React.ReactNode
    /**
     * Unique Identifier for eact eab
     */
    id?: string;
    /**
     * onClick Event handler with an id supplied
     */
    onClick: (id: string) => void;
}

export default function Tab(props: TabProps) {
    const {title, selected, children, id='', onClick} = props;

    const tabStyles = [styles.tabContainer]

    if (selected) tabStyles.push(styles.selected);

    return (
        <div className={tabStyles.join(' ')} id={id} onClick={() => onClick(id)}>
            <div className={styles.tab}>
                <p className={styles.tabTitle}>{title}</p>
                <div className={styles.tabLine} />
            </div>

            <div className={styles.tabContent}>
                {children}
            </div>
        </div>
    )

}