/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import { createContext, useContext, useReducer } from "react"

import {sumItems} from '../Functions/Helper';

export const CardContext = createContext();

const initialState ={
    selectedItems: [],
    counter: 0,
    total: 0,
    checkout: false
}
const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            if(!state.selectedItems.find(item=>item.id === action.payload.id)){
                state.selectedItems.push({...action.payload, quantity:1})
            }
            return{
                
                selectedItems:[...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout:false
            };
        case "REMOVE":
            const newItems = state.selectedItems.filter((item)=>item.id !== action.payload.id)
            return{
                selectedItems:[...newItems],
                ...sumItems(newItems)
            }
        case "INCREASE":
            const index =  state.selectedItems.findIndex((item)=>item.id===action.payload.id);
            state.selectedItems[index].quantity += 1;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex((item)=>item.id===action.payload.id);
            state.selectedItems[indexD].quantity -= 1;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
            return{
                selectedItems: [],
                counter: 0,
                total: 0,
                checkout: true
            }
        default:
            return state;

    }
      
    
}
const CardProvider = ({children}) => {
    const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <CardContext.Provider value={{state,dispatch}}>
        {children}
    </CardContext.Provider>
  )
}

const useCard = ()=>{
    const {state,dispatch} = useContext(CardContext);
    return [state,dispatch];
}

export default CardProvider
export {useCard};