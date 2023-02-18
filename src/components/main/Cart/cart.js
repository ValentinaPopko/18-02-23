import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './cart.css';


function Cart() {

    const [openCart, SetOpenCart] = useState(true)
    let styleOverflow = {}
    let styleSideBlock = {}

    if (openCart == true){
        styleOverflow = {width: '100%'};
        styleSideBlock = {width: '385px'};
    } else {
        styleOverflow = {width: '0'};
        styleSideBlock = {width: '0'};
    }
    return <div className='MainCart'>
      <div className='Overflow' style={styleOverflow} onClick={()=> SetOpenCart(false)}></div>
      <div className='SideBlock' style={styleSideBlock}></div>
    </div>
  }

export default Cart
