import Map from "@/components/PageComponents/Map/Map";
import { GoogleMap } from '@react-google-maps/api';
import styles from './MapPage.module.scss'

export default function ClientMapPage() {
    return (
        <div className={styles.mapPage}>
            <Map />
        </div>
    )
}