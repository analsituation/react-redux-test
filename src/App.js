import React, {useState} from 'react'

import styles from './index.module.css'
import Header from './components/Header/Header'
import PostSection from './components/PostSection/PostSection'
import Modal from './components/Modal/Modal'


function App() {

    const [visibility, setVisibility] = useState(false)


    return (
      <div className={styles.App}>
          <div className={styles.app__container}>
              <Modal visibility={visibility} setVisibility={setVisibility}/>
              <Header setVisibility={setVisibility}/>
              <PostSection />
          </div>
      </div>)
}

export default App
