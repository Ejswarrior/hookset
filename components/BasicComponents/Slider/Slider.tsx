'use client';
import styles from './Slider.module.scss';
import { useState } from 'react';

interface SliderProps {
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function Slider(props: SliderProps) {

    const [selectedNumber, setSelectedNumber] = useState('50')

    const _onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedNumber(evt.currentTarget.value)

        if(props.onChange) props.onChange(evt)
    }

    return (
        <div className={styles.sliderContainer}>
            <input className={styles.slider} type='range' min={0} max={100} onChange={_onChange}/>
            <div>{selectedNumber}%</div>
        </div>
    )
}