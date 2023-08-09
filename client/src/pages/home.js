import ProductList from '../components/product-list';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import { addToCartAC } from '../action';

function Home() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const cart = useSelector(state => state.cart.items);

    const addToCart = (product) => {
        dispatch(addToCartAC(product))

    }
    return (
        <div>
            <Navbar cartCount={cart.length} />
            <Carousel />
            <ProductList products={products} addToCart={addToCart} />
            <Footer />

        </div>
    );
}

export default Home;