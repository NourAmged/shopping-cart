import styles from './Cart.module.css';

function Cart({ purchasedItem }) {

    let subtotal = purchasedItem.reduce(
        (price, item) => price + (item["price"] * item["amount"]),
        0);

    subtotal = Math.round(subtotal * 100) / 100;

    let shipping = 0;

    const totalCost = Math.round((subtotal + shipping) * 100) / 100;

    return (
        <div className={styles["cart"]}>
            <nav>
                Home &#8594; Cart
            </nav>
            <p style={{ fontSize: "1.5em", fontWeight: "550" }}>Your Shoping Cart</p>
            {
                purchasedItem.length ?
                    <div className={styles["product-container"]}>
                        <div className={styles["items"]}>
                            {purchasedItem.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className={styles["item"]}>
                                            <div className={styles["product-image-container"]}>
                                                <img className={styles["product-image"]} src={item.image} alt="product item" />
                                            </div>
                                            <div>
                                                <p>{item.title}</p>
                                                <p>${item.price}</p>
                                                <p>quantity: {item.amount}</p>
                                            </div>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles["checkout-summary"]}>
                            <div className={styles["summary"]}>
                                <p className={styles["summary-header"]}>Order Summary</p>
                                <div className={styles["subtotal"]}>
                                    <p>Subtotal</p>
                                    <p>${subtotal}</p>
                                </div>
                                <div className={styles["shipping"]}>
                                    <p>Shipping</p>
                                    <p>Free</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles["total"]}>
                                    <p>Total</p>
                                    <p>${totalCost}</p>
                                </div>
                                <div className={styles["checkout-btn-container"]}>
                                    <button className={styles["checkout-btn"]}>Proceed to Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={styles["no-items"]}>
                        <p>your shoping cart is empty</p>
                        <button className={styles["shopping-btn"]}>Continue Shopping</button>
                    </div>
            }
        </div>
    );
}

export default Cart;