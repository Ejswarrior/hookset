
interface SearchInputProps {
    placeholder?: string;
    id?: string;
    name?: string;
    required: boolean;
    error: boolean;
    helperText: string;
    onChange:(evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput(props: SearchInputProps) {

    const {placeholder, required, id, name, error, onChange} = props

    return (
        <div>
            
            <input
                placeholder={placeholder}
                required={required}
                id={id}
                name={name}
                type='search'
                onChange={onChange}
            />
            <div className={styles.list}></div>
            <label className={styles.helperText}>{helperText}</label>
        </div>
    )
}