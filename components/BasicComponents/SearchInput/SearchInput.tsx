import { SurfaceProps } from '@/utils/SharedProps';
import styles from './SearchInput.module.scss'


interface DataListProps {
    /*Value for data list option */
    value: string | number | readonly string[] | undefined
}

interface SearchInputProps extends SurfaceProps {
    /*PlaceHolder text for input */
    placeholder?: string;
    /*Id for input */
    id?: string;
    /*Id for data list */
    dataListId?: string;
    /*Name for input */
    name?: string;
    /*Toggle required state for input */
    required: boolean;
    /*Toggle Error state for input */
    error: boolean;
    /*Text underneath the input */
    helperText?: string;
    /*Accepts an change event function for input */
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    /*List of options for the Data list */
    data: string[]
}


export default function SearchInput(props: SearchInputProps) {

    const {placeholder, required, id, name, error, onChange, data, dataListId, helperText, surface='light'} = props

    const inputStyles = [styles.inputContainer]

    if (error) inputStyles.push(styles.error)

    if (surface === 'dark') inputStyles.push(styles.dark)

    return (
        <div className={inputStyles.join(' ')}>
            <input
                placeholder={placeholder}
                required={required}
                id={id}
                name={name}
                onChange={onChange}
                className={styles.input}
                list={dataListId}
            />
            {data && <datalist className={styles.dataList} id={dataListId}>
                {data.map((item) => (
                    <option value={item}/>
                ))}
            </datalist>}
            {helperText && <label className={styles.helperText}>{helperText}</label>}
        </div>
    )
}