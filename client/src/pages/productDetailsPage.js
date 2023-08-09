import Nav from '../components/navbar';
import Footer from '../components/footer';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/product-details';
// import {addToCartAC, CHANGED_ITEM_IN_CART} from '../actions';
import { ADD_TO_CART } from '../action';

const ProductDetailsPage = () => {
  const dispatch = useDispatch();  
  let { productId } = useParams();
  const cartItems = useSelector(state=>state.cart.items)
  const products = useSelector(state=>state.product.products)
  const product = products.find(p=>p.id===(productId*1))
//   console.log(productId,products,product);

  const addToCart = (product)=>{
    dispatch({type : ADD_TO_CART, payload : product})
  }

  return (
     <>
     <Nav cartCount={cartItems.length}></Nav>
     <ProductDetails product={product} addToCart={addToCart}></ProductDetails>
     <Footer></Footer>
     </> 
  );
}

export default ProductDetailsPage;