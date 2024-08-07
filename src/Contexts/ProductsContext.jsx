/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import api from '../Services/api';


const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchAPi = async()=>{
            const response = await api.get("/products");
            setProducts(response);
        }
        fetchAPi();
    },[])
  return (
   <ProductsContext.Provider value={products}>
    {children}
   </ProductsContext.Provider>
  )
}

const useProducts = ()=>{
    const response = useContext(ProductsContext);
    return response;
}
const useDetails = (id)=>{
    const products = useContext(ProductsContext);
    const result = products.find(item=>item.id === id);
    return result;
}
export default ProductsProvider;
export {useProducts,useDetails};