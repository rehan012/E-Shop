import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Cart from '../components/cart';
import { CHANGED_QUANTITY, CHANGE_ORDER_CART } from '../action';
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

   


return (
    <div>
        <Navbar cartCount={cartItems.length} />
        <Cart items={cartItems} order={order} changeQuantity={changeQuantity} />
        <Footer />

    </div>
);
}

export default CartPage;