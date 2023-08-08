import { Link } from "react-router-dom";




export default function Cart({ items, order,changeQuantity }) {

    
    return (
        <>
            <div className="container mb-5">
                <div className="d-flex flex-row align-items-start">
                    <div className="col-8 d-flex flex-column m-2">
                        {items.map(item => <div className="cart-item p-3">
                            <div className="d-flex flex-row">
                                <img
                                    className="col-2 img-fluid"
                                    src={`images/${item.image}.jpg`}
                                    alt=""
                                />
                                <div className="col-6 p-2">
                                    <h5>{item.name}</h5>
                                    <h6>{item.category}</h6>
                                    <p>$ {item.price}</p>
                                    <p>qty {item.quantity}</p>
                                </div>
                                <div className="col-2 p-2">
                                    Quantity
                                    <select name="" id="" onChange={(e) => changeQuantity(e.target.value,item)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div data-bs-toggle="modal" data-bs-target="#removeItemModal"
                                    className="col-2 d-flex justify-content-end align-items-start close"
                                >
                                    <i className="bi bi-x-circle"></i>
                                </div>
                            </div>
                        </div>

                        )}



                    </div>
                    <div class="col-4 order p-3 m-2">
                        <h4>Order Total</h4>
                        <div class="d-flex flex-row py-2">
                            <input type="text" class="form-control" placeholder="promo code" />
                            <button class="btn btn-primary">Apply</button>
                        </div>
                        <div class="d-flex flex-row justify-content-between p-2">
                            <span class="billing-item">Total Quanity</span>
                            <span class="billing-cost">{order.total_items}</span>
                        </div>
                        <div class="d-flex flex-row justify-content-between p-2">
                            <span class="billing-item">Items</span>
                            <span class="billing-cost">${order.total_cost}</span>
                        </div>
                        <div class="d-flex flex-row justify-content-between p-2">
                            <span class="billing-item">Shipping</span>
                            <span class="billing-cost">$ {order.shipping_charges}</span>
                            
                        </div>
                        <div class="d-flex flex-row justify-content-between p-2">
                            <span class="billing-item">Discount({order.discount_in_percent}%)</span>
                            <span class="billing-cost">-${order.total_cost*order.discount_in_percent/100}</span>
                        </div>
                        <div class="d-flex flex-row justify-content-between p-2">
                            <span class="billing-item fs-5">Total</span>
                            <span class="billing-cost fs-5">${order.total_cost-order.total_cost*order.discount_in_percent/100+order.shipping_charges }</span>
                        </div>

                        <div class="d-flex mt-3">
                            <Link to="/checkout" class="btn btn-primary flex-grow-1">Pay Now</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
