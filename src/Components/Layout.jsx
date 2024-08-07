/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom';
import { useCard} from '../Contexts/CardContext';
import { AiOutlineShoppingCart } from "react-icons/ai";

import styles from './Layout.module.css'

const Layout = ({children}) => {
    const [state] = useCard();
    console.log(state);
  return (
    <div>
        <header className={styles.header}>
            <Link to='/products'>SeaShop</Link>
            <Link to='/checkout'>
            <AiOutlineShoppingCart/>
            <span>{state.Counter > 0 && state.Counter}</span>
            
            </Link>
        </header>
        {children}
        <footer className={styles.footer}>Made By Darya</footer>
    </div>
  )
}

export default Layout