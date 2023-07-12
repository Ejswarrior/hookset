import styles from './Tabs.module.scss';

interface TabProps {
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
}

export default function Tab(props: TabProps) {
    const {title, selected, children} = props;

    const tabStyles = [styles.container]

    if (selected) tabStyles.push(styles.selected);

    return (
        <div className={tabStyles.join(' ')}>
            <div className={styles.tab}>
                <p className={styles.tabTitle}>{title}</p>
            </div>

            <div className={styles.tabContent}>
                {children}
            </div>
        </div>
    )

}