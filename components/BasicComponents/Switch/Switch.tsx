"use client";

import styles from "./Switch.module.scss";
import { useState } from "react"

interface SwitchProps {

    disabled?: boolean;
    name?: string;
    id?: string;
}

export default function Switch( props: SwitchProps ) {

	const [isChecked, setIsChecked] = useState( false );

	const switchStyles = [styles.switch];

	if ( isChecked ) switchStyles.push( styles.checked )


	return (
		<div className={switchStyles.join( " " )}>
			<div className={styles.switch}></div>
			<input className={styles.input} disabled={props.disabled} onChange={( evt: React.ChangeEvent<HTMLInputElement> ) => setIsChecked( evt.currentTarget.checked )} type='checkbox'/>
		</div>
	)
}