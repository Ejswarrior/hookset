import SelectOptions from "@/components/BasicComponents/SelectOptions/SelectOptions";
import {day, month, year} from './DateData';
import styles from './CreateAccount.module.scss';
import TextInput from "@/components/BasicComponents/TextInput/TextInput";
import ButtonPrimary from "@/components/BasicComponents/Button/ButtonPrimary";

interface DetailsPageProps {
    onClick: () => void;
}

export default function DetailsPage(props: DetailsPageProps) {
    const {onClick} = props
    return (
        <>
        
        <TextInput 
            required
            type='text'
            placeholder='Name'
            name='name'
            id='name'
            maxlength={35}
        />
        
        <TextInput 
            required
            type='email'
            placeholder='Email'
            name='email'
            id='email'
            maxlength={35}
        />
        
        <div className={styles.dataPicker}>
            <SelectOptions data={day}/>
            <SelectOptions data={month}/>
            <SelectOptions data={year}/>
        </div>

        <ButtonPrimary onClick={onClick} variation="primary" type="button">Next</ButtonPrimary>
        </>
    )
}