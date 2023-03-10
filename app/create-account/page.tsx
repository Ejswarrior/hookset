import SelectOptions from "@/components/BasicComponents/SelectOptions/SelectOptions";
import {day, month, year} from './DateData'

export default function CreateAccount(){

    return (
        <div>
            <SelectOptions data={day}/>
            <SelectOptions data={month}/>
            <SelectOptions data={year}/>
        </div>
    )
}