import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Cart from '../components/cart';
import { CHANGED_QUANTITY, CHANGE_ORDER_CART, REMOVE_ITEM } from '../action';
import { useEffect } from 'react';



function CartPage() {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const order = useSelector(state => state.order);

    useEffect(() => {

        dispatch({ type: CHANGE_ORDER_CART, payload: cartItems });

    }, [cartItems])

    const changeQuantity = (quantity, item) => {
        dispatch({ type: CHANGED_QUANTITY, payload: { ...item, quantity: quantity } });
    }

    const removeItem = (item) => {
    dispatch({ type: REMOVE_ITEM, payload: item });
    }

   


return (
    <div>
        <Navbar cartCount={cartItems.length} />
        <Cart items={cartItems} order={order} changeQuantity={changeQuantity} removeItem={removeItem} />
        <Footer />

    </div>
);
}

export default CartPage;