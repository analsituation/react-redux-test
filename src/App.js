import React from 'react'

import './index.css'
import Header from './components/header/Header'
import PostSection from './components/PostSection/PostSection'


function App() {
    return (
      <div className="App">
          <div className="app__container">
              <Header />
              <PostSection />
          </div>
      </div>)
}

export default App
