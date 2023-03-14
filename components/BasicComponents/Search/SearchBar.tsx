import React, { useState } from "react"
import Image from "next/image"
import styles from "./SearchBar.module.scss"


interface SearchBarProps{
    onChange?: ( e: React.ChangeEvent<HTMLInputElement> ) => void;
    value: string;
}

export default function SearchBar( props: SearchBarProps ) {
	const { onChange, value } = props
    
	const [selected, setSelected] = useState( false )
	const selectedStyles = [styles.searchInput];

	if ( selected ) selectedStyles.push( styles.selected )

    
	return (
		<div>
			{/* <Image src={} alt='' width={30} height={30}/> */}
			<input type="search" className={selectedStyles.join( " " )} placeholder="Search Hookset" value={value} onClick={() => {setSelected( !selected )}} onChange={onChange} />
		</div>
	)
}