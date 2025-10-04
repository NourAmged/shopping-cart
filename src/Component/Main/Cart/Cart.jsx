import styles from './Cart.module.css';

function Cart() {
    return (
        <div className={styles["cart"]}>
            <nav>
                Home &#8594; Cart
            </nav>
            <p style={{fontSize:"1.5em", fontWeight:"550"}}>Your Shoping Cart</p>
            <div className={styles["no-items"]}>
                <p>your shoping cart is empty</p>
                <button className={styles["shopping-btn"]}>Continue Shopping</button>
            </div>
        </div>
    );
}

export default Cart;