import axios from 'axios'

const BASE_URL = "http://localhost:5000"

const ProductsApi={
     url: BASE_URL+"/products",

     fetchAllProducts: ()=>{
        return axios.get(ProductsApi.url)
     },

     fetchProductById: (id)=>{
        return axios.get(ProductsApi.url+"/"+id)
     }
}

export default ProductsApi