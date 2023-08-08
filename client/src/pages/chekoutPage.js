import { useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Checkout from '../components/checkout';




function CheckoutPage() {

    // const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const order = useSelector(state => state.order);

    return (
        <div>
            <Navbar cartCount={cartItems.length} />
            <Checkout order ={order} />
            <Footer />

        </div>
    );
}

export default CheckoutPage;