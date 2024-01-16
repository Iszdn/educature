import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


export const BasketContext=createContext()


const BasketProvider = ({children}) => {
    const [basket, setBasket] = useLocalStorage("basket")
function addBasket(product) {
    const existBasket=basket.findIndex(x=>x._id===product._id)
    if (existBasket!==-1) {
        basket[existBasket].count++
        setBasket([...basket])
    }
    else{
        setBasket([...basket,{...product,count:1}])
    }
}
function deleteBasket(product) {
    const deletedBas=basket.filter(x=>x._id!==product._id)
    setBasket(deletedBas)
}
function increaseBasket(product) {
    const existBasket=basket.findIndex(x=>x._id===product._id)
    if (existBasket!==-1) {
        basket[existBasket].count++
        setBasket([...basket])
    }
}
function decreaseBasket(product) {
    const existBasket=basket.findIndex(x=>x._id===product._id)
    if (existBasket!==-1) {
        if (basket[existBasket].count===0) {
            deleteBasket(product)
            return
        }
        
        basket[existBasket].count--
        setBasket([...basket])
    }
}
    const data={
basket, setBasket,addBasket,deleteBasket,increaseBasket,decreaseBasket
    }
  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider