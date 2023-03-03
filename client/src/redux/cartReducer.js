import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
  wishlists:[],
  wishIcon:[{ id: 420,
    wish: false,}],
    transitionValue:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
       
      const item = state.products.find(item=>item.id === action.payload.id)
      if(item){
        item.quantity += action.payload.quantity;
      } else{
        state.products.push(action.payload);
      }

      
     
    },
    removeItem: (state,action) => {
     
      state.products = state.products.filter(item=>item.id !== action.payload)

    },
    resetCart: (state) => {
      state.products = []
    },

    addToWishlist: (state ,action) =>{
      const item = state.wishlists.find(item=>item.id === action.payload.id)
      if(item){
     state.wishlists =  state.wishlists.filter(wish=>wish!=item)
      } else{
        state.wishlists.push(action.payload);
      }
    }
,
    setWishlist: (state,action) =>{
      const item = state.wishIcon.find(item=>item.id === action.payload.id)
       
      if(item){
        if(item.wish){
          item.wish = false
        }
        else{
          item.wish =true
        }
      }
      else{
        state.wishIcon.push(action.payload);
      }

    },

    


  },
})


export const { addToCart , removeItem , resetCart , addToWishlist , setWishlist} = cartSlice.actions

export default cartSlice.reducer