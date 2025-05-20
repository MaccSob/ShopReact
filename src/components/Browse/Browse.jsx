import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';


export default function Browse() {
    
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const response = await fetch('https://dummyjson.com/products')  // fetch the products
        const data = await response.json() // convert the response to json
        setProducts(data.products) // set the products in the state to the products we fetched
      }

      useEffect(() => {
        getProducts()
      }, [])
      return (
        <div className='container'>
            {
              products.map(product => (
                <div key={product.id} className='productid'>
                  <img src={product.thumbnail} alt={product.title} className='thumbnail' />
                  <div className='details'>
                    <h1 className='title'>{product.title}</h1>
                    <p className='description'>{product.description.slice(0, 40)}...</p>
                    <p className='price'>${product.price}</p>
                  </div>
                  <div className='buttoncontainer'>
                    <button className='addtocart'>Add to cart</button>
                  </div>
                </div>
              ))
            }
          </div>
      )
    }