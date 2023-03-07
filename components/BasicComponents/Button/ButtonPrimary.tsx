

export interface ButtonProps {
    /**
     * Set Button Type
     */
    type: 'button' | 'reset' | 'submit'
    /**
     * Toggle Disabled state
     */
    disabled: boolean;
    /**
     * Button's children content
     */
    children: React.ReactNode
}

export default function ButtonPrimary(props: ButtonProps) {

    const {type, disabled, children} = props
    return (
        <div>
            <button
            type={type}
            disabled={disabled}
            
            >
            {children}
            </button>
        </div>
    )
}