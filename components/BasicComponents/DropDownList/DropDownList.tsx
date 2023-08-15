import { useEffect, useRef, useState } from 'react';
import styles from './DropDownList.module.scss';

export interface DropDownListProps {
    listItems: DropDownListItem[];
}

interface DropDownListItem {
    title: string;

    onClick: () => void;
}

export default function DropDownList(props: DropDownListProps) {
    const { listItems} = props
    const dropDownRef = useRef(null)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onClose = (evt: React.MouseEvent) => {
        if(dropDownRef.current && dropDownRef.current.contains(evt.target)) {
            setIsOpen(!isOpen)
        }
    }

    useEffect(() => {
        onClose()
    }, [])

    return (
        <div ref={dropDownRef} onClick={onClose} className={styles.dropDownContainer} >
                <div onClick={() => setIsOpen(!isOpen)}>
                    ...
                </div>
                {isOpen && (
                    <div className={styles.dropDown}>
                        {listItems.map((item) => (
                            <div className={styles.listItem} onClick={item.onClick}>
                                {item.title}
                            </div>
                        ))
                        }
                    </div>
                )}
        </div>
    )
}   