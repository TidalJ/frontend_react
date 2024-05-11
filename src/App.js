import React from 'react'

import { About, Footer, Testimonial, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';



const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Testimonial />
            <Work />
            <Skills />
            <Footer />
        </div>
    )
}

export default App;