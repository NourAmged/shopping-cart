import styles from "./BodySection.module.css";
import { useNavigate } from 'react-router';

function Product({ data }) {
    const navigate = useNavigate();

    return (
        <div className={styles["product"]}>
            <div>
                <img src={data["image"]} alt="product" />
            </div>
            <p className={styles["product-title"]}>{data["title"]}</p>
            <p className={styles["product-price"]}>{"$" + data["price"]}</p>
            <button className={styles["product-btn"]} onClick={() => navigate('/second')}>Add to Cart</button>
        </div>
    );
}

function BodySection({ data }) {
    return (
        <section className={styles["body-section"]}>
            <h2>Featured Products</h2>
            <div className={styles["product-container"]}>
                <Product data={data[0]} />
                <Product data={data[1]} />
                <Product data={data[2]} />
            </div>
            <h2>Shop by Category</h2>
            <div className={styles["category-container"]}>
                <button className={styles["category-btn"]}>Men</button>
                <button className={styles["category-btn"]}>Women</button>
                <button className={styles["category-btn"]}>Accessories</button>
                <button className={styles["category-btn"]}>Electronics</button>
            </div>
            <div className={styles["discount-container"]}>
                <p>Get 20% Off Your First Order</p>
                <button className={styles["shopping-btn"]}>
                    Start Shopping
                </button>
            </div>
        </section>
    );
}

export default BodySection;