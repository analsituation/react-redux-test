import React, {useEffect, useState} from 'react'
import styles from './Header.module.css'
import Button from '../UI/Button'
import {searchPosts, sortPosts} from '../../redux/mainSplice'
import {useDispatch, useSelector} from 'react-redux'

const Header = ({setVisibility}) => {

    const [activeSort, setActiveSort] = useState(false)
    const [sort, setSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const currentPage = useSelector(state => state.main.currentPage)
    const dispatch = useDispatch()

    const swapVisibility = () => {
        if (!activeSort) {
            setActiveSort(true)
        } else {
            setActiveSort(false)
        }
    }

    // Данный useEffect сбрасывает установленную сортировку и запрос поиска,
    // когда мы переходим на другую страницу постов
    useEffect(() => {
        setSort('')
        setSearchQuery('')
    }, [currentPage])
    // А данный useEffect осуществляет сортировку при каждом изменении способа сортировки
    useEffect(() => {
        dispatch(sortPosts(sort))
    }, [sort])
    // useEffect для поиска по постам на текущей странице
    useEffect(() => {
        dispatch(searchPosts(searchQuery))
    }, [searchQuery])


    return (
        <div>
            <header className={styles.container}>
                <div className={styles.menu_container}>
                    <div className={styles.search_block}>
                        <div className={styles.sort_block} onClick={swapVisibility}>
                            {!sort ? 'Сортировка' : sort}
                            <span className={activeSort ? styles.arrow_active : styles.arrow}>⌄</span>
                            <div className={activeSort ? styles.elements_active : styles.elements}>
                                <div className={styles.element} onClick={() => setSort('A - Z')} >A - Z</div>
                                <div className={styles.element} onClick={() => setSort('Z - A')} >Z - A</div>
                                {sort && <div className={styles.element} onClick={() => setSort('')} >Не сортировать</div>}
                            </div>
                        </div>
                        <input
                            className={styles.search_input}
                            type="text"
                            placeholder={'Search'}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.currentTarget.value)}
                        />
                    </div>
                    <div>
                        <Button text="Добавить пост" onClick={() => setVisibility(true)}/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header