import { ADD_ADDRESS, ADD_TO_CART, CHANGE_ORDER_CART, CHANGED_QUANTITY, EMPTY_CART, PLACE_ORDER, REMOVE_ITEM, SET_SHIP_ADDRESS } from "../action";



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
      images: ['product-1', 'product-1-2', 'product-1-3']
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
      images: ['product-2', 'product-2-2', 'product-2-3']
    },
    {
      id: 3,
      name: 'Apple iPhone 12',
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
      images: ['product-3', 'product-3-2', 'product-3-3']
    },
    {
      id: 4,
      name: 'Nikon Xl54',
      price: 1200.75,
      category: 'Camera',
      rating: 3,
      color: 'black',
      size: '',
      details: {
        product: "",
        warranty: "",
        merchant: ""
      },
      image: 'product-4-square',
      images: ['product-4', 'product-4-2', 'product-4-3']
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

const initialStateUser = {
  name: 'John',
  email: 'john@example.com',
  addresses: [
  ],
  orders: [],
};


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
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] }

      }

    case CHANGED_QUANTITY:
      const oldItem = (state.items.find(item => item.id === action.payload.id))
      const index = state.items.indexOf(oldItem)
      const newItems = [...state.items]
      newItems[index] = action.payload

      return { ...state, items: newItems }

    case EMPTY_CART:

      return { ...state, items: [] }

    case REMOVE_ITEM:
      const item = action.payload;
      const newIt = state.items.filter((it) => it.id !== item.id)

      return { ...state, items: newIt }




    default: return state;
  }
}

const orderReducer = (state = initailStateOrder, action) => {
  switch (action.type) {
    case CHANGE_ORDER_CART:
      const items = action.payload;
      const total_items = items.reduce(
        (total, item) => total + item.quantity * 1,
        0
      );
      const total_cost = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return { ...state, items: action.payload, total_items, total_cost };

    case SET_SHIP_ADDRESS:

      return { ...state, shipping_address: action.payload };

    default: return state;
  }
}


const userReducer = (state = initialStateUser, action) => {

  switch (action.type) {
    case ADD_ADDRESS:

      return { ...state, addresses: [...state.addresses, action.payload] };

    case PLACE_ORDER:

      return { ...state, orders: [...state.orders, action.payload] };

    default: return state;
  }
}


export { productReducer, cartReducer, orderReducer, userReducer };