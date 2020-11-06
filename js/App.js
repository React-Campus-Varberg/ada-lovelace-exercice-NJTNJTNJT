import React from 'react';
import ReactDOM from 'react-dom';
import About from '../component/About';
import Image from '../component/Image';

function App() {
  return (
    <div>
      <header>
        <h1>Ada Lovelace </h1>
        <p>Exercise 1 - Natasha</p>
        <Image />
        <About />
      </header>
    </div>
  );
}

export default App;