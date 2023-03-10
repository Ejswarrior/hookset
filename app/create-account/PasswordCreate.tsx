import TextInput from "@/components/BasicComponents/TextInput/TextInput";

export default function PasswordCreate() {
    return (
        <div>
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
        </div>
    )
}