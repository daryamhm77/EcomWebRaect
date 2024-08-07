import BasketCard from '../Components/BasketCard';
import BasketSideBar from '../Components/BasketSideBar';
import {useCard} from '../Contexts/CardContext';
import empty from '../assets/e.svg'

import styles from './Checkout.module.css'

const Checkout = () => {
  const [state,dispatch] = useCard();
  console.log(state);
  const clickHandler = (type,data)=>{
    dispatch({type,data})
  }
 
  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler}/>
      <div className={styles.products}>
      {state.selectedItems.map(item=><BasketCard key={item.id} data={item} />)}
      </div>
    </div>
  )
}

export default Checkout