import React  from 'react';
import { useGlobalContext } from './context';
import image from "./images.svg"

import ButtonLoader from './buttonLoader';

const Home = () => {
  const {openModal} = useGlobalContext();
  const [coins, setCoins] = React.useState()




  return (
    <main>
      
        <h2>coins generator</h2>
        <div className='vl4'>
        <input type="text" className='grocery' placeholder='tiktok username'/>
    
          <ButtonLoader />
        </div>
        <div className='vl1'>
        <div className='vl2'>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='100'/>
    <img src={image} className="image" alt='name'/>
    </div>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='500'/>
    <img src={image} className="image" alt='name'/>
    </div>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='1000'/>
    <img src={image} className="image" alt='name'/>
    </div>
    </div>
    <div>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='2000'/>
    <img src={image} className="image" alt='name'/>
    </div>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='5000'/>
    <img src={image} className="image" alt='name'/>
    </div>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='10000'/>
    <img src={image} className="image" alt='name'/>
    </div>
    </div>
    </div>
    <div className='vl34'>
    <div className="container">
    <input 
    className="input2" 
    type="number" 
    id="input" 
    placeholder='costum' 
    value={coins} 
    onChange={(e) => setCoins(e.target.value)}/>
    <img src={image} className="image" alt='name'/>
    </div>
    </div>

      <button onClick={openModal} className='btn'>
        transfer
      </button>
    </main>
  );
};

export default Home;