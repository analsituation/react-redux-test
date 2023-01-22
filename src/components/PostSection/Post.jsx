import React, {useEffect} from 'react'
import styles from './PostSection.module.css'
import Button from '../UI/Button'
import {useDispatch} from 'react-redux'
import {removePost} from '../../redux/mainSplice'


const Post = (props) => {

    const dispatch = useDispatch()

    return (
        <div className={styles.post}>
            <div className={styles.post_info}>
                <div className={styles.title}>
                    <h2>{props.number} {props.title}</h2>
                </div>
                <div className={styles.body}>
                    {props.body}
                </div>
            </div>
            <Button onClick={() => dispatch(removePost(props.id))} text="Удалить"/>
        </div>
    )
}

export default Post