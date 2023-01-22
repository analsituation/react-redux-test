import React, {useState} from 'react'
import styles from './Header.module.css'
import Button from '../UI/Button'

const Header = ({setVisibility}) => {

    const [activeClass, setActiveClass] = useState(styles.elements)


    const swapVisibility = () => {
        if (activeClass === styles.elements) {
            setActiveClass(styles.elements_active)
        } else {
            setActiveClass(styles.elements)
        }
    }

    const showModalHandler = () => {
        console.log('dad')

        setActiveClass(true)
    }

    return (
        <div>
            <header className={styles.container}>
                <div className={styles.menu_container}>
                    <div className={styles.search_block}>
                        <div className={styles.sort_block} onClick={swapVisibility}>
                            Сортировка <span className={styles.arrow}>⌄</span>
                            <div className={activeClass}>
                                <div className={styles.element} value="1">По заголовку</div>
                                <div className={styles.element} value="2">По тексту</div>
                            </div>
                        </div>
                        <input className={styles.search_input} type="text" placeholder={'Search'}/>
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