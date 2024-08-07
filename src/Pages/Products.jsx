
import Card from '../Components/Card';
import { useProducts } from '../Contexts/ProductsContext'

import { BiCategory } from "react-icons/bi";

import styles from './Products.module.css';
import { useEffect, useState } from 'react';
import { categoryFilter, createQuery, getInitialQuery, searchFilter } from '../Functions/Helper';
import { useSearchParams } from 'react-router-dom';
import Search from '../Components/Search';
import Loader from '../Components/Loader';


const categories = [
  {id:1,type:'All'},
  {id:2,type:"Men's Clothing"},
  {id:3,type:"Women's Clothing"},
  {id:4,type:"Electronics"},
  {id:5,type:"jewelary"}
]

const Products = () => {
    const products = useProducts();
    const [search,setSearch]=useState("");
    const [data,setData] = useState([]);
    const [query,setQuery] = useState({});
    const [searchParams,setSearchParams] = useSearchParams();



    useEffect(()=>{
      setData(products);
      setQuery(getInitialQuery(searchParams))
      
    },[products])

    useEffect(()=>{
      setSearchParams(query);
      setSearch(query.search || "")
      console.log(query)
      let finalResult = searchFilter(query.search,products);
      finalResult = categoryFilter(query.category,finalResult);
      setData(finalResult);
      
    },[query])

    const categoryHandler = (event)=>{
      const category = event.target.innerText.toLowerCase()
      if(event.target.tagName !== "li") return;
      
      setQuery((query)=> createQuery(query,{category}))
    }
 
  return (
    <>
    <Search search={search} setSearch={setSearch} setQuery={setQuery}/>
    <div className={styles.container}>
      
      <div className={styles.products}>
        {!data.length && (<Loader/>)}
        {data.map(p=><Card key={p.id} data={p}/>)}
      </div>
      <div className={styles.sidebar}>
        <div>
        <h3>Category </h3>
        <BiCategory/>
        </div>
        <ul onClick = {categoryHandler}>
         {categories.map(p=>(
          <li key={p.id} className={p.type.toLowerCase()===query.category ? styles.selected : null}>
            {p.type}
          </li>
         ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Products;