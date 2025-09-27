import styles from "./BodySection.module.css";
import { useNavigate } from 'react-router';

function Product({ item, setSelectedItem }) {
    const navigate = useNavigate();

    return (
    <div className={styles["product"]} onClick={() => { setSelectedItem(item); navigate('/shop/item') }}>
            <div>
                <img src={item["image"]} alt="product" />
            </div>
            <p className={styles["product-title"]}>{item["title"]}</p>
            <p className={styles["product-price"]}>{"$" + item["price"]}</p>
            <button className={styles["product-btn"]} onClick={(e) => { e.stopPropagation() }} >Add to Cart</button>
        </div>
    );
}

function BodySection({ data, setSelectedItem }) {

    return (
        <section className={styles["body-section"]}>
            <h2>Featured Products</h2>
            <div className={styles["product-container"]}>
                {data.slice(0, 3).map((item, index) => (
                    <Product key={index} item={item} setSelectedItem={setSelectedItem} />
                ))}

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