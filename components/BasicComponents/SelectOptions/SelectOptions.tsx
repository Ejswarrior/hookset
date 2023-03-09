import { SurfaceProps } from "@/utils/SharedProps";

export interface SelectOptionsProps extends SurfaceProps {
    data: []
}

export default function SelectOptions(){
    return (
        <div>
            <select>
                <option value='option 1'/>
            </select>
        </div>
    )
}