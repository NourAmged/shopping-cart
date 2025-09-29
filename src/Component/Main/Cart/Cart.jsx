import styles from './Cart.module.css';

function Cart() {
    return (
        <div className={styles["cart"]}>
            <nav>
                Home &#8594; Cart
            </nav>
            <p>Your Shoping Cart</p>
            <div>
                <p>your shoping cart is empty</p>
                <button>Continue Shopping</button>
            </div>
        </div>
    );
}

export default Cart;