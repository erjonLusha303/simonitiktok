import React, { useState, useContext, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import image from "./images.svg"
import image2 from "./tiktok2.svg"
import Loading from './loading';
import ButtonLoader from './buttonLoader';

const Home = () => {
  const {openModal, loading, waiting, setLoading, fetchQuestions} = useGlobalContext();
  const [coins, setCoins] = React.useState()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = React.useState(1)
/*   const [loading, setLoading] = React.useState(true) */
/*   
  const doShit = ()=>{
if(count == 1){
return <Loading />
}
  } */
/*   const openModal = () => {
    setIsModalOpen(true);
    
  }; */
/*   const getCountTimeout = () => {
    
    setTimeout(() => {
       if (loading) {
     return <Loading />
  }
    }, 5000);
    
  }; */


/* if (waiting) {
    return console.log('hello bitches');
  }
  if (loading) {
    return <Loading />
  }  */




  return (
    <main>
      {/* <img src={image2} class="image2"/> */}
        <h2>coins generator</h2>
        <div className='vl4'>
        <input type="text" className='grocery' placeholder='tiktok username'/>
     {/*    <button type='submit' className='submit-btn' onClick={<Loading />}>
           verify
          </button> */}
          <ButtonLoader />
        </div>
        <div className='vl1'>
        <div className='vl2'>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='100'/>
    <img src={image} className="image"/>
    </div>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='500'/>
    <img src={image} className="image"/>
    </div>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='1000'/>
    <img src={image} className="image"/>
    </div>
    </div>
    <div>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='2000'/>
    <img src={image} className="image"/>
    </div>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='5000'/>
    <img src={image} className="image"/>
    </div>
    <div className="container">
    <input className="input" type="number" id="input" placeholder='10000'/>
    <img src={image} className="image"/>
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
    <img src={image} className="image"/>
    </div>
    </div>

      <button onClick={openModal} className='btn'>
        transfer
      </button>
    </main>
  );
};

export default Home;