import React from 'react'
import styles from './Modal.module.css'
import Button from '../UI/Button'

const Modal = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.window}>
                <div className={styles.form}>
                    <div className={styles.title}>
                        <label htmlFor={"title"}>
                            Название поста<br/>
                            <input name="title" placeholder='Введите заголовок'/>
                        </label>
                    </div>
                    <div className={styles.text}>
                        <label htmlFor={"text"}>
                            Содержимое поста<br/>
                            <textarea name="text" placeholder='Текст'></textarea>
                        </label>
                    </div>
                    <div className={styles.btn_container}>
                        <Button text="Отправить"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal