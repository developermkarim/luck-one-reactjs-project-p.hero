import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Carts from '../Carts/Carts';
import './Shop.css'

const Shop = () => {

    const [product, Setproduct] = useState([])
    

     useEffect(() =>{
        fetch('mobile-data.json')
        .then(res => res.json())
        .then(data => Setproduct(data))

    },[])

     
    const [cart, Setcart] = useState([])
const handleAddToCart = (cartProducts) =>{
const newCart = [...cart, cartProducts]
         Setcart(newCart)
        console.log(newCart);
    }
 
    
    const rmoveItem = () =>{
        Setcart([])
        console.log(Setcart([]));
   
 }
 

    return (

        <div className='shop-container'>
            
            <div className="product-container">
            
        
        {
            product.map(perProduct => <Products
            
                key = {perProduct.id}

                allProducts = {perProduct}

                AddClickInfo = {handleAddToCart}
            >
            </Products>)
        }
        
       

            </div>
      

            <div className="cart-container">

                <h2>Selected Items: {cart.length}</h2>

                <Carts cartInfo = {cart} removing = {rmoveItem}> </Carts>

               
              
            </div>
        
        </div>
    );
};

export default Shop;