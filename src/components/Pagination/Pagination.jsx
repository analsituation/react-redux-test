import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from './Pagination.module.css'
import {setPage} from '../../redux/mainSplice'

const Pagination = () => {

    const dispatch = useDispatch()
    const totalCount = useSelector(state => state.main.totalCount)
    const pageSize = useSelector(state => state.main.pageSize)
    const totalPages = Math.ceil(totalCount / pageSize)

    const getPagesArray = (totalPages) => {
        let pagesArray = []
        for (let i = 1; i <= totalPages; i++) {
            pagesArray.push(i)
        }
        return pagesArray
    }
    const pagesArray = getPagesArray(totalPages)

    return (
        <div className={styles.pagination_block}>
            {pagesArray.map(page => <span onClick={() => dispatch(setPage(page))} key={page} className={styles.page__btn}>{page}</span>)}
        </div>
    )
}

export default Pagination