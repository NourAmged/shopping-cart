import styles from "./Shop.module.css";


function Shop({ data }) {
    return (
        <div className={styles["shop-container"]}>
            <nav>
                Home &#8594; Shop
            </nav>
            <div>
                <div className={styles["filter-container"]}>
                    <p>Filters</p>
                    <div className={styles["category-container"]}>
                        <p>Category</p>
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
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Shop;