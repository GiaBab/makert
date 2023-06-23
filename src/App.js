import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './components/Product';
import CarMakert from './components/CarMakert';
import Header from './components/Hearder' ;
import Footer from './components/Footer' ;
import React, { useState, Fragment, useEffect } from 'react';
import Presuppose from './components/Presuppose';

var rtx = require('./img/rtx.png');
var intel = require('./img/intel.png');
var ryzen = require('./img/ryzen.png');
var pcGamer = require('./img/pcgame.png');

function App() {

  let carMakertSave = JSON.parse(localStorage.getItem('product'));

  if(!carMakertSave){
    carMakertSave = []
  };

  const [carMakert, modifCarMakert] = useState(carMakertSave)

  useEffect( ()=> {
    if(carMakertSave){
      localStorage.setItem('product', JSON.stringify(carMakert));
    }else{
      localStorage.setItem('product', JSON.stringify([]));
    }
  }, [carMakertSave])

  const [products, saveProducts] = useState([
    {id:0, article:'rtx3090', img:rtx, vaule:500}, 
    {id:1, article:'intel', img:intel, vaule:350},
    {id:2, article:'ryzen', img:ryzen, vaule:120},
    {id:3, article:'pc gamer', img:pcGamer, vaule:1000}
  ])

  return (
    <Fragment>
      <Header/>
  
      <CarMakert carMakert={carMakert} modifProduct={modifCarMakert}/>

      <div className='grid'>
          {
            products.map(product => (
            <div>
              <Product 
                product={product} 
                products={products} 
                key={product.id} 
                carMakert={carMakert} 
                modifProduct={modifCarMakert}/>
            </div>))
          }
      </div>
      <Presuppose/>
      <Footer/>
    </Fragment>
  );
}

export default App;
