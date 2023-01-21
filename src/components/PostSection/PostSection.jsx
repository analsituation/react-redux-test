import React from 'react'
import Post from './Post'
import styles from './PostSection.module.css'

const PostSection = () => {
    return (
        <section className={styles.container}>
            <h1>Список постов</h1>
            <Post />
            <Post />
            <Post />
        </section>
    )
}

export default PostSection