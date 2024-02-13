import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext=createContext(null);

const getDefaultCart = () =>{
  let cart={};
  for(let index =0; index < all_product.length;index++){
    cart[index] =0;
  }
  return cart;
}

const ShopContextProvider = (porps) => {
   
 
    const[cartItems,serCartItems] = useState(getDefaultCart());
   
    const addToCart= (itemId) => {
      serCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      console.log(cartItems);
    }

    const removeFromCart= (itemId) => {
      serCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

      const totalcart = () =>{
        let totalamount=0;
        for(const item in cartItems){
          if(cartItems[item]>0){
            let itemInfo = all_product.find((product)=>product.id===Number(item));
            totalcart +=itemInfo.new_price * cartItems[item];
          }
          return totalamount;
        }
      }

    const contextValue={totalcart ,all_product,cartItems,addToCart,removeFromCart};
    


  return (
   <ShopContext.Provider value={contextValue}>

      {porps.children}
   </ShopContext.Provider>
  )
}

export default ShopContextProvider;