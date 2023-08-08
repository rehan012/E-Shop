export default function Checkout({order}) {
    return (
        <div>
            <div className="container mb-5">
                <main>
                    <div className="py-5 text-center">
                        <h2>Checkout</h2>
                    </div>

                    <div className="row g-3">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Your cart</span>
                                <span className="badge bg-secondary rounded-pill">{order.total_items}</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Total</h6>
                                        <small className="text-muted">Cart Items</small>
                                    </div>
                                    <span className="text-muted">${order.total_cost}</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Shipping</h6>

                                    </div>
                                    <span className="text-success">$ {order.shipping_charges}</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Discount({order.discount_in_percent})</h6>
                                    </div>
                                    <span className="text-success">{order.total_cost * order.discount_in_percent / 100}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>${order.total_cost - order.total_cost * order.discount_in_percent / 100 + order.shipping_charges}</strong>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Shipping address</h4>

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">John Doe</h5>
                                    <h6 className="card-subtitle mb-2 text-muted ">111, Sapphire Street, NJ, 11111</h6>
                                    <p className="card-text">+91-1111111111</p>
                                    <input type="checkbox" name="address" id="" /> Use this Address
                                </div>
                            </div>

                            <hr className="my-4" />
                            <h5>OR</h5>

                            <h4 className="mb-3">Add New Address</h4>

                            <form className="needs-validation" novalidate="" action="/order-success.html">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label for="firstName" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label for="lastName" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <label for="phone" className="form-label">Phone <span className="text-muted"></span></label>
                                        <input type="tel" className="form-control" id="phone" placeholder="+91-1111111111" value="" required="" />
                                        <div className="invalid-feedback">
                                            Please enter a valid phone for shipping updates.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                    </div>

                                    <div className="col-md-5">
                                        <label for="country" className="form-label">Country</label>
                                        <select className="form-select" id="country" required="">
                                            <option value="">Choose...</option>
                                            <option>United States</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <label for="state" className="form-label">State</label>
                                        <select className="form-select" id="state" required="">
                                            <option value="">Choose...</option>
                                            <option>California</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label for="zip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-4" />


                                <h4 className="mb-3">Payment</h4>

                                <div className="my-3">
                                    <div className="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                        <label className="form-check-label" for="credit">Credit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                        <label className="form-check-label" for="debit">Debit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                        <label className="form-check-label" for="paypal">PayPal</label>
                                    </div>
                                </div>

                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label for="cc-name" className="form-label">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label for="cc-number" className="form-label">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label for="cc-expiration" className="form-label">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label for="cc-cvv" className="form-label">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                            </form>
                        </div>
                    </div>
                </main>

            </div>


        </div>
    )
}
