import { SurfaceProps } from "@/utils/SharedProps";

export interface OptionProps extends SurfaceProps {
    label?: string;
    value?: string;
    size?: number;
    disabled?: boolean;
}

export interface SelectOptionsProps extends OptionProps {
    data: OptionProps[];
}

export default function SelectOptions(props: SelectOptionsProps){
    const {data} = props;
    return (
            <select>
                {data && data.map((optionItem) => (
                    <option key={optionItem.label} value={optionItem.value} disabled={optionItem.disabled}>{optionItem.label}</option>
                ))}
            </select>
    )
}