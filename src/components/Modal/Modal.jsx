import React, {useState} from 'react'
import styles from './Modal.module.css'
import Button from '../UI/Button'
import {useDispatch, useSelector} from 'react-redux'
import {addPost} from '../../redux/mainSplice'

const Modal = ({visibility, setVisibility}) => {

    const modalClass = [styles.overlay]
    if (visibility) {
        modalClass.push(styles.overlay_active)
    }
    const [values, setValues] = useState({title: '', text: ''})

    const dispatch = useDispatch()

    const sendPostHandler = (values) => {
        if (values.title !== '' && values.text !== '') {
            const newPost = {
                id: Date.now(),
                title: values.title,
                text: values.text,
            }
            dispatch(addPost(newPost))
            setValues({title: '', text: ''})
        } else {
            alert('Вы ничего не ввели')
        }
        setVisibility(false)
    }

    return (
        <div className={modalClass.join(' ')} onClick={() => setVisibility(false)}>
            <div className={styles.window} onClick={(e) => e.stopPropagation()}>
                <div className={styles.form}>
                    <div className={styles.title}>
                        <label htmlFor={"title"}>
                            Название поста<br/>
                            <input
                                value={values.title}
                                onChange={(e) => setValues({...values, title: e.currentTarget.value})}
                                name="title"
                                placeholder='Введите заголовок'
                            />
                        </label>
                    </div>
                    <div className={styles.text}>
                        <label htmlFor={"text"}>
                            Содержимое поста<br/>
                            <textarea
                                value={values.text}
                                onChange={(e) => setValues({...values, text: e.currentTarget.value})}
                                name="text"
                                placeholder='Текст'>
                            </textarea>
                        </label>
                    </div>
                    <div className={styles.btn_container}>
                        <Button text="Отправить" onClick={() => sendPostHandler(values)}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal