import {Link, useParams} from 'react-router-dom';
import { useDetails } from '../Contexts/ProductsContext';

import { FaMoneyCheckAlt } from "react-icons/fa";
import { HiChevronLeft } from "react-icons/hi";
import { RxActivityLog } from "react-icons/rx";

import styles from './ProductDetails.module.css';

const ProductsDetails = () => {
  const {id} = useParams()

  const details = useDetails(+id);
  return (
    <div className={styles.container}>
      
        <img src={details.image} alt={details.title}/>
      
      <div className={styles.info}>
        <h3 className={styles.title}>{details.title}</h3>
        <p className={styles.description}>{details.description}</p>
        <p className={styles.category}> <RxActivityLog/> {details.category}</p>
      <div>
        <span className={styles.price}>
         <FaMoneyCheckAlt/> ${details.price}
        </span>
        <Link to='/products'> <HiChevronLeft/> Back To Shop</Link>
      </div>
      </div>
    </div>
  )
}

export default ProductsDetails