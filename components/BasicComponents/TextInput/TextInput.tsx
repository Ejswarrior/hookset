import { SurfaceProps } from "@/utils/SharedProps";
import inputStyles from "./input.module.scss"

interface TextInputProps extends SurfaceProps{
    type: "email" | "text" | "password";
    placeholder?: string;
    name?: string;
    id?: string;
    required?: boolean;
    helperText?: string;
    disabled?: boolean;
    error?: boolean;
    maxlength?: number;
	value: string;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
	errorText?: string;
}
export default function TextInput( props: TextInputProps ) {

	const {
		type, 
		placeholder, 
		name, 
		id, 
		required, 
		helperText, 
		disabled, 
		error, 
		onChange,
		value,
		surface = "light",
		errorText
	} = props

	const inputs = [inputStyles.inputContainer]

	if ( disabled ) inputs.push( inputStyles.disabled )

	if ( error ) inputs.push( inputStyles.error )

	if ( surface === "dark" ) inputs.push( inputStyles.dark )

	return (
		<div className={inputs.join( " " )}>
			{helperText && <label className={inputStyles.helperText}>{helperText}</label>}

			<input 
				placeholder={placeholder}
				type={type}
				name={name}
				id={id}
				required={required}
				value={value}
				onChange={onChange}
				className={inputStyles.textInput}
			/>
			{errorText && error && <label className={inputStyles.errorText}>{errorText}</label>}
		</div>
	)
}