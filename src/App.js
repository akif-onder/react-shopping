
import React, { useEffect, useState } from 'react';
import './App.css';
import Amazon from './components/Amazon';
import Navbar from './components/Navbar';


function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.includes(item)) return
    setCart([...cart, item])
  }

  return (
    <React.Fragment>
      <Navbar setShow={setShow} />
      <Amazon handleClick={handleClick} />
      
    </React.Fragment>
  );
}

export default App;
