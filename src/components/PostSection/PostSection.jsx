import React, {useEffect} from 'react'
import Post from './Post'
import styles from './PostSection.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {setPosts} from '../../redux/mainSplice'
import Pagination from '../Pagination/Pagination'


const PostSection = () => {

    const posts = useSelector((state) => state.main.sortedPosts)
    const isLoading = useSelector((state) => state.main.isLoading)
    const dispatch = useDispatch()
    const pageSize = useSelector(state => state.main.pageSize)
    const currentPage = useSelector(state => state.main.currentPage)

    useEffect( () => {
        dispatch(setPosts({limit: pageSize, page: currentPage}))
    }, [currentPage])

    let infoMessage
    if (isLoading) {
        infoMessage = 'Загрузка постов...'
    } else if (!isLoading && !posts.length) {
        infoMessage = 'Постов нет'
    } else {
        infoMessage = 'Список постов'
    }

    return (
        <section className={styles.container}>
            <div className={styles.info_message}>{infoMessage}</div>
            <Pagination />
            {
                posts.map((p, index) => <Post number={index + 1} key={p.id} id={p.id} title={p.title} body={p.body}/>)
            }

        </section>
    )
}

export default PostSection