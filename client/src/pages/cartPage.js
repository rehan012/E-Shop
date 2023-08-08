import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Cart from '../components/cart';
import { CHANGE_ORDER_CART } from '../action';
import { useEffect } from 'react';



function CartPage() {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const order = useSelector(state => state.order);

    useEffect(() => {

        dispatch({ type: CHANGE_ORDER_CART, payload: cartItems });

    }, [cartItems])




    return (
        <div>
            <Navbar cartCount={cartItems.length} />
            <Cart items={cartItems} order={order} />
            <Footer />

        </div>
    );
}

export default CartPage;