import React, { useEffect, useState } from 'react'
import ProductsApi from './ProductsApi'

function Home() {
  const [products, setProducts] = useState([]);

  const fetchAllProducts = () => {
    ProductsApi.fetchAllProducts().then((response) => {
      setProducts(response.data);
      console.log("response>>", response.data)
    }).catch(error => console.log(error));
  }

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <div className='d-flex col-12 mt-5'>
      {products.map(product => (
        <div className="card m-auto " key={product.id} style={{ width: "18rem" }}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.descrption}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default Home