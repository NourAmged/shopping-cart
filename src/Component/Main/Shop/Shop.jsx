import styles from "./Shop.module.css";


function Shop({ data }) {
    return (
        <div className={styles["shop-container"]}>
            <nav>
                Home &#8594; Shop
            </nav>
            <div>
                <div className={styles["filter-container"]}>
                    <p className={styles["filter"]}>Filters</p>
                    <div className={styles["category-container"]}>
                        <p className={styles["category"]}>Category</p>
                        <span>
                            <input type="checkbox" name="men" id="men" />
                            <label for="men">Men</label>
                        </span>

                        <span>
                            <input type="checkbox" name="accessories" id="accessories" />
                            <label for="accessories">Accessories</label>
                        </span>

                        <span>
                            <input type="checkbox" name="electronics" id="electronics" />
                            <label for="electronics">electronics</label>
                        </span>
                        <span>
                            <input type="checkbox" name="women" id="women" />
                            <label for="women">Women</label>
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
                <div>

                </div>
            </div>
        </div>
    );
}

export default Shop;