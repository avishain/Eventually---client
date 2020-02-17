import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './components/Home';

function App() {
    return (
        <div className="App" style={{ backgroundColor: '#F3EBE3' }} >
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
