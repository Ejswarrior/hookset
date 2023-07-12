"use client";
import styles from "./Map.module.scss";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React from "react";

export default function Map() {
	const {isLoaded} = useLoadScript( {googleMapsApiKey: process.env.NEXT_GOOGLE_MAPS_API_KEY,} )

	if( !isLoaded ) return <div>...loading</div>
	return (
		<GoogleMap
			center={{lat:42.944896, 
				lng: -78.782278}}
			zoom={12}
			mapContainerClassName={styles.mapContainer}
		>
			
		</GoogleMap>
	)
}