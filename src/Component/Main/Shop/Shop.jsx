import styles from "./Shop.module.css";
import { Product } from "../Home/BodySection/BodySection";
import { useNavigate } from "react-router";
import { useState } from "react";

function Shop({ data, setSelectedItem, setPurchasedItem, purchasedItem }) {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        min: 0,
        max: 1500,
        categories: new Set(),
    });

    const handleCategoryChange = (category) => {
        setFilters((prev) => {
            const newCategories = new Set(prev.categories);
            if (newCategories.has(category)) {
                newCategories.delete(category);
            } else {
                newCategories.add(category);
            }
            return { ...prev, categories: newCategories };
        });
    };

    const filteredData = data.filter((item) => {
        const matchesPrice = item.price >= filters.min && item.price <= filters.max;
        const matchesCategory =
            filters.categories.size === 0 || filters.categories.has(item.category);
        return matchesPrice && matchesCategory;
    });

    return (
        <div className={styles["shop-container"]}>
            <nav>
                <span style={{ cursor: "pointer" }} onClick={() => { navigate("/") }}>Home</span> &#8594; Shop
            </nav>
            <div className={styles["container"]}>
                <div className={styles["filter-container"]}>
                    <p className={styles["filter"]}>Filters</p>
                    <div className={styles["category-container"]}>
                        <p className={styles["category"]}>Category</p>
                        <span>
                            <input type="checkbox" name="men" id="men" onClick={() => handleCategoryChange("men's clothing")} />
                            <label htmlFor="men">Men</label>
                        </span>

                        <span>
                            <input type="checkbox" name="accessories" id="accessories" onClick={() => handleCategoryChange("jewelery")} />
                            <label htmlFor="accessories">Accessories</label>
                        </span>

                        <span>
                            <input type="checkbox" name="electronics" id="electronics" onClick={() => handleCategoryChange("electronics")} />
                            <label htmlFor="electronics">electronics</label>
                        </span>
                        <span>
                            <input type="checkbox" name="women" id="women" onClick={() => handleCategoryChange("women's clothing")} />
                            <label htmlFor="women">Women</label>
                        </span>
                    </div>
                    <div>
                        <p className={styles["price"]}>Price</p>
                        <div className={styles["price-controller"]}>
                            <span>
                                <p>Min</p>
                                <input type="number" min={"1"} placeholder={"1"} onChange={(e) => { setFilters({ ...filters, min: e.target.value }) }} />
                            </span>
                            <span>
                                <p>Max</p>
                                <input type="number" min={"1"} max={"1500"} placeholder={"1500"} onChange={(e) => { setFilters({ ...filters, max: e.target.value }) }} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles["display-products"]}>
                    {filteredData.map((item, index) => (
                        <Product key={index} item={item} setSelectedItem={setSelectedItem} setPurchasedItem={setPurchasedItem} purchasedItem={purchasedItem} myStyle={{ product: styles["product"] }} />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Shop;