import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Products = (props) => {
    const {AddClickInfo, allProducts} = props;
    const {image,id,model,price} = allProducts;
   
   
    return (
        <div className='cart-style'>
         <img src={image} alt="" width={250} height={200}/>
          <div className="product-info">
              <h4>{model}</h4>
              <p>Price : ${price}</p>
              <p>Code : 16{id}</p>
              <button className='btn-design' onClick={() => AddClickInfo(allProducts)}><p>Add to Cart</p><FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon></button>
          </div>
        </div>
    );
};

export default Products