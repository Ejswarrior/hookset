'use client'
import styles from './Tabs.module.scss';
import Tab, { TabProps } from './Tab';

interface TabsProps {
    /**
     * Array of tab properties
     */
    tabs: Omit<TabProps, 'onClick'>[];

    selectedTab: number;

    onClick: (id: string) => void;
}


export default function Tabs(props: TabsProps) {
    const {tabs, selectedTab, onClick} = props;

    return (
        <div className={styles.tabs}>
            {tabs.map((item, index) => (
                <Tab 
                    key={`${item.title}-${index}`} 
                    selected={item.selected} 
                    title={item.title} 
                    id={item.id}
                    onClick={(id) => onClick(id)}
                />
            ))}
        </div>
    )
}