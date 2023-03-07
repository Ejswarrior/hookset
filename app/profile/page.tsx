import SearchInput from "@/components/BasicComponents/SearchInput/SearchInput"
import TextInput from "@/components/BasicComponents/TextInput/TextInput"

export default function profile() {

    return (
        <TextInput 
            required
            type='password'
            helperText="Enter in your password."
            placeholder='Enter in your password.'
            name='textinput'
            id='textinput'
            maxlength={25}
        />
    )
}