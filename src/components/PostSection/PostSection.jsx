import React from 'react'
import Post from './Post'
import styles from './PostSection.module.css'
import {useSelector} from 'react-redux'


const PostSection = () => {

    const posts = useSelector((state) => state.main.posts)


    return (
        <section className={styles.container}>
            {
                !posts.length
                ? <h1>Постов нет</h1>
                : <h1>Список постов</h1>
            }
            {
                posts.map((p, index) => <Post number={index + 1} key={p.id} id={p.id} title={p.title} text={p.text} />)
            }
        </section>
    )
}

export default PostSection