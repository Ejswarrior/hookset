
import PostForm from '../../components/BasicComponents/PostForm/PostForm'
export default function profile() {
    const data = {
        id: '',
        name: 'input',
        maxLength: 30,
        placeHolder: "Talk About fish here",
        required: true,
        helperText: 'Please be mindful!',
        error: true,
        type: "email",
    }

    return (
        <PostForm {...data} />
    )
}