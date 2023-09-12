'use client'
import Image from 'next/image';
import styles from './Fishodex.module.scss';
import fishImage from '../../public/istockphoto-642042382-612x612.jpg'
import Tabs from '@/components/BasicComponents/Tabs/Tabs';
import { useState } from 'react';

export default function Fishodex() {
    const [selectedTab, setSelectedTab] = useState<string>('1')

    const tabs = [
        {
            title: 'Info',
            selected: true,
            id: '1',
        },
        {
            title: 'Catches',
            selected: false,
            id: '2'
        },
        {
            title: 'Top Baits',
            selected: false,
            id: '3'
        }
    ]

    const onSelectTab = (id: string) => {
        setSelectedTab(id)
    }

    return (
        <div className={styles.fishodexContainer}>

            <div className={styles.topContainer}>
                <div className={styles.imageTitle}>
                    <Image src={fishImage} alt={'fish'} height={280} width={380}/>
                    <span className={styles.fishTitleBlock}>
                        <p className={styles.fishodexFishTitle}>Steelhead</p>
                    </span>
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.infoContainer}>
                        <p className={styles.fishodexBestTitle}>Best Catch</p>
                        <div className={styles.infoRow}>
                            <p>Date Caught: 08/31/2023</p>
                            <p>Area: Niagara River</p>
                        </div>

                        <div className={styles.infoRow}>
                            <p>Weight: 08/31/2023</p>
                            <p>Length: 42 inches</p>
                        </div>

                        <p style={{fontSize: '24px'}}>Bait Used: Spinner</p>
                    </div>
                </div>
            </div>

            <div>
                <Tabs tabs={tabs} selectedTab={1} onClick={(id) =>  onSelectTab(id)}/>

               {selectedTab === '1' &&  <div>
                    hello
                </div>}

                
               {selectedTab === '2' &&  <div>
                    hello
                </div>}

                
               {selectedTab === '3' &&  <div>
                    hello
                </div>}
            </div>
        </div>
    )
}