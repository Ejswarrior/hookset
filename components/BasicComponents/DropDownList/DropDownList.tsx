import { LegacyRef, useEffect, useRef, useState } from 'react';
import styles from './DropDownList.module.scss';

export interface DropDownListProps {
    listItems: DropDownListItem[];
}

interface DropDownListItem {
    title: string;

    onClick: () => void;
}

const useClickOutside = (ref: React.RefObject<HTMLDivElement>, onClickOutside: () => void) => {
    useEffect(() => {
        const handleClickOutside = (evt: MouseEvent) => {
            if(ref.current && evt.target && !ref.current.contains(evt.target as Node)) {
                onClickOutside()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return() => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref, onClickOutside])
}

export default function DropDownList(props: DropDownListProps) {
    const { listItems} = props
    const dropDownRef = useRef(null)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onClose = () => {
            setIsOpen(false)
    }

    useClickOutside(dropDownRef, onClose)

    return (
        <div ref={dropDownRef} className={styles.dropDownContainer} >
                <div onClick={() => setIsOpen(true)}>
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