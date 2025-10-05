import styles from './Cart.module.css';

function Cart({ purchasedItem }) {
    return (
        <div className={styles["cart"]}>
            <nav>
                Home &#8594; Cart
            </nav>
            <p style={{ fontSize: "1.5em", fontWeight: "550" }}>Your Shoping Cart</p>
            {
                purchasedItem.length ?
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
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
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