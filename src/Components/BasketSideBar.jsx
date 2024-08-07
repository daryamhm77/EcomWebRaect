import { GiMoneyStack } from "react-icons/gi";
import { TfiWidgetized } from "react-icons/tfi";
import { FiArchive } from "react-icons/fi";

import styles from './BasketSideBar.module.css';


const BasketSideBar = ({state,clickHandler}) => {
  
 

  return (
    <div className={styles.container}>
        <div>
            <GiMoneyStack/>
            <p>Total:</p>
            <span>{state.total}</span>
        </div>
        <div>
            <FiArchive/>
            <p>Quantity:</p>
            <span>{state.Counter}</span>
        </div>
        <div>
            <TfiWidgetized/>
            <p>Status:</p>
            <span>{!state.checkout && <p>Pending...</p>}</span>
        </div>
        <button onClick={()=>clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  )
}

export default BasketSideBar