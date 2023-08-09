import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Checkout from '../components/checkout';
import { addAddressAC, setShipAddressAC, placeOrderAC, emptyCartAC } from '../action';




function CheckoutPage() {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const order = useSelector(state => state.order);
    const user = useSelector(state => state.user);


    const addAddress = (address) => {
        dispatch(addAddressAC(address))
    }

    const setShipAddress = (address) => {
        dispatch(setShipAddressAC(address))
    }

    const placeOrder = () => {
        if (order.shipping_address) {
            dispatch(placeOrderAC(order))

            dispatch(emptyCartAC())

        }
        else alert("Select Shipping address")
    }


    return (
        <div>
            <Navbar cartCount={cartItems.length} />
            <Checkout order={order} user={user} addAddress={addAddress} setShipAddress={setShipAddress} placeOrder={placeOrder} />
            <Footer />

        </div>
    );
}

export default CheckoutPage;