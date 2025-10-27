import styles from "./Shop.module.css";
import { Product } from "../Home/BodySection/BodySection";

function Shop({ data, setSelectedItem, setPurchasedItem, purchasedItem }) {
    return (
        <div className={styles["shop-container"]}>
            <nav>
                Home &#8594; Shop
            </nav>
            <div className={styles["container"]}>
                <div className={styles["filter-container"]}>
                    <p className={styles["filter"]}>Filters</p>
                    <div className={styles["category-container"]}>
                        <p className={styles["category"]}>Category</p>
                        <span>
                            <input type="checkbox" name="men" id="men" />
                            <label htmlFor="men">Men</label>
                        </span>

                        <span>
                            <input type="checkbox" name="accessories" id="accessories" />
                            <label htmlFor="accessories">Accessories</label>
                        </span>

                        <span>
                            <input type="checkbox" name="electronics" id="electronics" />
                            <label htmlFor="electronics">electronics</label>
                        </span>
                        <span>
                            <input type="checkbox" name="women" id="women" />
                            <label htmlFor="women">Women</label>
                        </span>
                    </div>
                    <div>
                        <p className={styles["price"]}>Price</p>
                        <div className={styles["price-controller"]}>
                            <span>
                                <p>Min</p>
                                <input type="number" min={"1"} placeholder={"1"} />
                            </span>
                            <span>
                                <p>Max</p>
                                <input type="number" min={"1"} max={"1500"} placeholder={"1500"} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles["display-products"]}>
                    {data.map((item, index) => (
                        <Product key={index} item={item} setSelectedItem={setSelectedItem} setPurchasedItem={setPurchasedItem} purchasedItem={purchasedItem} myStyle={{ product: styles["product"] }} />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Shop;