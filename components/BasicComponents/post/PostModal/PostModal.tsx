'use client';
import { useCallback, useMemo, useState } from 'react';
import ButtonPrimary from '../../Button/ButtonPrimary';
import TextInput from '../../TextInput/TextInput';
import styles from './PostModal.module.scss';

interface PostModalProps {
    visible: boolean;
    onSubmit: () => void;
}

interface PostFormData {
    postPhoto: string;
    postDescription: string;
    fishName: string;
    fishWeight: string;
    fishHeight: string;
    baitUsed: string;
    location: string;
}

export default function PostModal(props: PostModalProps) {
    const {visible, onSubmit} = props;
    const postFormDefualt: PostFormData = useMemo(() => {
        return {
            postPhoto: '',
            postDescription: '',
            fishName: '',
            fishWeight: '0lbs',
            fishHeight: '0',
            baitUsed: '',
            location: ''
        }
    }, [])
    const [postFormData, setPostFormData] = useState<PostFormData>(postFormDefualt)

    const _onChange = useCallback((field: string, value: string) => {
        setPostFormData(prevState => 
            ({
                ...prevState,
                [field]: value
            })
        )
    }, [])

    if(visible) return (
        <div className={styles.postModalContainer}>
            <h1 className={styles.postModalTitle}>Create a Post</h1>
            
                <form className={styles.postFormContainer}>
                    <div className={styles.photoAddContainer}>
                        <label className={styles.inputLabel}>Add a photo:</label>
                        <input 
                            className={styles.photoInput}
                        />
                    </div>

                    <div className={styles.descriptionContainer}>
                        <label className={styles.inputLabel}>Tell the story of your catch</label>
                        <textarea
                            className={styles.descriptionInput}
                            value={postFormData.postDescription}
                            placeholder={'Add your story...'}
                            onChange={(evt) => _onChange('postDescription', evt.target.value)}
                        />
                    </div>

                    <div>
                        <label className={styles.inputLabel}>What fish did you catch?</label>
                        <TextInput
                            type='text'
                            value={postFormData.fishName}
                            placeholder={"LargeMouth Bass"}
                            onChange={(evt) => _onChange('fishName', evt.target.value)}
                        />
                    </div>

                    <div className={styles.weightContainer}>
                        <label className={styles.inputLabel}>Wieght:</label>
                        <TextInput
                            type='text'
                            value={postFormData.fishWeight}
                            placeholder={"5lbs"}
                            onChange={(evt) => _onChange('fishWeight', evt.target.value)}
                        />
                    </div>

                    <div>
                        <label className={styles.inputLabel}>Height:</label>
                        <TextInput
                            type='text'
                            value={postFormData.fishHeight}
                            placeholder={"9 inches"}
                            onChange={(evt) => _onChange('fishHeight', evt.target.value)}
                        />
                    </div>

                    <div>
                        <label className={styles.inputLabel}>Bait Used:</label>
                        <TextInput
                            type='text'
                            value={postFormData.baitUsed}
                            placeholder={"Worms"}
                            onChange={(evt) => _onChange('baitUsed', evt.target.value)}
                        />
                    </div>

                    <div>
                        <label className={styles.inputLabel}>Location:</label>
                        <TextInput
                            type='text'
                            value={postFormData.location}
                            placeholder={"New York"}
                            onChange={(evt) => _onChange('locations', evt.target.value)}
                        />
                    </div>


                    <div>
                        <ButtonPrimary variation='primary' onClick={onSubmit}>Create Post</ButtonPrimary>
                        <ButtonPrimary variation='secondary'>Cancel</ButtonPrimary>
                    </div>
                </form>
            </div>
    )
    else return null
}