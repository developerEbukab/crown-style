import { SHOP_DATA } from "./Shop.data";

const INITIAL_STATE = {
  collections: SHOP_DATA  
}

const ShopReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default ShopReducer;