/* eslint-disable react/prop-types */
import { shortext } from "../Functions/Helper"
import { FaRegTrashCan } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";

import styles from './BasketCard.module.css'
import { CardContext } from "../Contexts/CardContext";
import { useContext } from "react";

const BasketCard = ({data}) => {
  const{dispatch} = useContext(CardContext)
  const clickHandler = (type, payload)=>{
    dispatch({type, payload})
  }
  return (
    <div className={styles.card}>
        <img src={data.image}/>
        <p>{shortext(data.title)}</p>
        <div className={styles.actions}>
            {data.quantity === 1 && (<button onClick={()=> clickHandler("REMOVE", data)}><FaRegTrashCan/></button>)}
            {data.quantity > 1 && (<button onClick={()=> clickHandler("DECREASE", data)}><TiMinus/></button>)}
            <span>{data.quantity}</span>
            <button onClick={()=> clickHandler("INCREASE", data) }><IoMdAdd/></button>
            
        </div>
    </div>
  )
}

export default BasketCard