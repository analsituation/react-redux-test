import React, {useState} from 'react'

import './index.css'
import Header from './components/Header/Header'
import PostSection from './components/PostSection/PostSection'
import Modal from './components/Modal/Modal'


function App() {


    return (
      <div className="App">
          <div className="app__container">
              <Modal />
              <Header />
              <PostSection />
          </div>
      </div>)
}

export default App
