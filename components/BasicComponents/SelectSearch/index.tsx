import styles from './SelectSearch.module.scss';
import {useState} from 'react'
interface SelectSearchProps {
    data: data[];
    /**
     * placeholder for the select
     */
    placeholder: string
    /**
     * Label for input
     */
    label: string
}

interface data {
    name: string;
}

export default function SelectSearch(props: SelectSearchProps) {
    const {data, placeholder, label} = props
    const [selectValue, setSelectValue] = useState<string>('')
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const selectStyles = [styles.selectContainer];
    let dataArray = false;

    const _onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSelectValue(evt.currentTarget.value)
    }

    const _onFocus = () => {
        setIsFocused(!isFocused)
    }

    const _onBlur = () => {
        setIsFocused(false)
    }

    if (isFocused) selectStyles.push(styles.focused)

    return (
        <div className={selectStyles.join(' ')}>
            {label && <label>{label}</label>}
            <input 
                placeholder={placeholder}
                value={selectValue}
                onChange={_onChange}
                className={styles.input}
                onFocus={_onFocus}
                onBlur={_onBlur}
            />
            {selectValue && <div className={styles.dropDown}>
                {data.map((item) => {
                    if(item.name.includes(selectValue)) {
                        dataArray = true
                        return <div onClick={() => setSelectValue(item.name)}>{item.name}</div>
                    }
                })}
                {!dataArray && <div>No Results Found.</div>}
            </div>}
        </div>
    )
}