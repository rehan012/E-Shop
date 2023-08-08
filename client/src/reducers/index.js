import { ADD_TO_CART, CHANGE_ORDER_CART } from "../action";



const initailStateProduct = {
  products: [
    {
      id: 1,
      name: 'Sony WX-5',
      price: 100.75,
      category: 'Headphones',
      rating: 3,
      color: 'red',
      size: 'S',
      details: {
        product: "",
        warranty: "",
        merchant: ""
      },
      image: 'product-1-square',
      images: ['product-1-square', 'product-1-square', 'product-1-square']
    },
    {
      id: 2,
      name: 'Apple Watch 2',
      price: 500.75,
      category: 'SmartWatch',
      rating: 4,
      color: 'black',
      size: '',
      details: {
        product: "",
        warranty: "",
        merchant: ""
      },
      image: 'product-2-square',
      images: ['product-2-square', 'product-2-square', 'product-2-square']
    },
    {
      id: 3,
      name: 'Apple iPhone 11',
      price: 799.75,
      category: 'Mobile',
      rating: 4,
      color: 'black',
      size: '',
      details: {
        product: "",
        warranty: "",
        merchant: ""
      },
      image: 'product-3-square',
      images: ['product-3-square', 'product-3-square', 'product-3-square']
    }
  ]
}

const initailStateCart = {
  items: []
}

const initailStateOrder = {
  items: [],
  shipping_charges: 50,
  discount_in_percent: 10,
  shipping_address: '',
  total_items: 0,
  total_cost: 0,

}

const productReducer = (state = initailStateProduct, action) => {
  return state;
}

const cartReducer = (state = initailStateCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      else {
        return { ...state, items: [...state.items, action.payload] }

      }

    default: return state;
  }
}

const orderReducer = (state = initailStateOrder, action) => {
  switch (action.type) {
    case CHANGE_ORDER_CART:
      return { ...state, items: action.payload }

    default: return state;
  }
}



export { productReducer, cartReducer, orderReducer };