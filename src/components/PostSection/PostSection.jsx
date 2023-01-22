import React, {useEffect} from 'react'
import Post from './Post'
import styles from './PostSection.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {APIFetches} from '../../API/api'
import {setPosts} from '../../redux/mainSplice'


const PostSection = () => {

    const posts = useSelector((state) => state.main.posts)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(setPosts())
    }, [])

    // useEffect(async () => {
    //     const posts = await APIFetches.getPosts()
    //     await dispatch(setPosts(posts))
    // }, [])

    return (
        <section className={styles.container}>
            {
                !posts.length
                    ? <h1>Постов нет</h1>
                    : <h1>Список постов</h1>
            }
            {
                posts.map((p, index) => <Post number={index + 1} key={p.id} id={p.id} title={p.title} body={p.body}/>)
            }
        </section>
    )
}

export default PostSection