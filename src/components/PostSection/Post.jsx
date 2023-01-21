import React from 'react'
import styles from './PostSection.module.css'
import Button from '../UI/Button'

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.post_info}>
                <div className={styles.title}>
                    <h2>1 Title</h2>
                </div>
                <div className={styles.body}>
                    body body body body body body
                </div>
            </div>
            <Button text="Удалить"/>
        </div>
    )
}

export default Post