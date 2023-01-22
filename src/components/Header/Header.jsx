import React, {useState} from 'react'
import styles from './Header.module.css'
import Button from '../UI/Button'

const Header = (props) => {

    const [activeClass, setActiveClass] = useState(styles.elements)


    const swapVisibility = () => {
        if (activeClass === styles.elements) {
            setActiveClass(styles.elements_active)
        } else {
            setActiveClass(styles.elements)
        }
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
                        <Button text="Добавить пост" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header