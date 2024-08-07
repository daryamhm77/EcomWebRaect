import {Link} from 'react-router-dom';

import { CgDetailsMore } from "react-icons/cg";
import { FiShoppingBag } from "react-icons/fi";
import { isInCart, productFind, shortext } from '../Functions/Helper';
import { IoMdAdd } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from './Card.module.css';
import { useCard } from '../Contexts/CardContext';

const Card = ({data}) => {
  const{id,title,image,price} = data;
  const[state,dispatch]=useCard();
  const quantity = productFind(state,id)
  const clickHandler = (type)=>{
    dispatch({type,payload:data})
    console.log(state);
  }
  return (
    <div className={styles.card}>
      <img src={image} alt="title" style={{width:'150px'}}/>
      <h3>{shortext(title)}</h3>
      <p>$ {price}</p>
      <div className={styles.actions}>
      <Link to={`/products/${id}`}>
      <CgDetailsMore/>

      </Link>
      {
              quantity === 1 && ( <button onClick={()=>clickHandler('REMOVE')}>
                <FaRegTrashCan/>
            </button>)
            }
            {quantity > 1 && (<button onClick={()=>clickHandler('DECREASE')}>
                <TiMinus/>
            </button>)}
      <p>{ quantity > 0 && quantity}</p>
      {isInCart(state,id) ? <button onClick={()=>clickHandler("INCREASE")}><IoMdAdd/></button> :
      <button onClick={()=>clickHandler("ADD")}><FiShoppingBag/></button>}
      </div>
    </div>
  )
}

export default Card