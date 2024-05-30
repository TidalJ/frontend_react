import React from 'react'

import { Video, Footer, Photo, Header, Skills, Develop } from './container';
import { Navbar } from './components';
import './App.scss';



const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <Video />
            <Photo />
            <Develop />
            <Skills />
            <Footer />
        </div>
    )
}

export default App;