import styles from './TextEditor.module.scss'
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';

interface TextEditorProps {
    placeholder: string;
}
const onError = (error: string) => {
    console.error(error)
}
export default function TextEditor(props: TextEditorProps) {
    const {placeholder} = props

    const theme = { 

    }

    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
      };

    return (
        <div>
            <LexicalComposer initialConfig={initialConfig}>
                <RichTextPlugin 
                      contentEditable={<ContentEditable />}
                      placeholder={<div>placeHolder</div>}
                      ErrorBoundary={LexicalErrorBoundary}
                />

            </LexicalComposer>
        </div>
    )
}