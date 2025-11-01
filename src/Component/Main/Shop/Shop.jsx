import styles from "./Shop.module.css";
import { Product } from "../Home/BodySection/BodySection";
import { useNavigate } from "react-router";
import { useState } from "react";

function Shop({ data, setSelectedItem, setPurchasedItem, purchasedItem, defaultCategory }) {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        min: 0,
        max: 1500,
        categories: defaultCategory ? new Set([defaultCategory]) : new Set(),
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
                <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                    Home
                </span>{" "}
                &#8594; Shop
            </nav>

            <div className={styles["container"]}>
                <div className={styles["filter-container"]}>
                    <p className={styles["filter"]}>Filters</p>

                    <div className={styles["category-container"]}>
                        <p className={styles["category"]}>Category</p>

                        <span>
                            <input
                                type="checkbox"
                                id="men"
                                checked={filters.categories.has("men's clothing")}
                                onChange={() => handleCategoryChange("men's clothing")}
                            />
                            <label htmlFor="men">Men</label>
                        </span>

                        <span>
                            <input
                                type="checkbox"
                                id="accessories"
                                checked={filters.categories.has("jewelery")}
                                onChange={() => handleCategoryChange("jewelery")}
                            />
                            <label htmlFor="accessories">Accessories</label>
                        </span>

                        <span>
                            <input
                                type="checkbox"
                                id="electronics"
                                checked={filters.categories.has("electronics")}
                                onChange={() => handleCategoryChange("electronics")}
                            />
                            <label htmlFor="electronics">Electronics</label>
                        </span>

                        <span>
                            <input
                                type="checkbox"
                                id="women"
                                checked={filters.categories.has("women's clothing")}
                                onChange={() => handleCategoryChange("women's clothing")}
                            />
                            <label htmlFor="women">Women</label>
                        </span>
                    </div>

                    <div>
                        <p className={styles["price"]}>Price</p>
                        <div className={styles["price-controller"]}>
                            <span>
                                <p>Min</p>
                                <input
                                    type="number"
                                    min="1"
                                    placeholder="1"
                                    value={filters.min}
                                    onChange={(e) =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            min: Number(e.target.value),
                                        }))
                                    }
                                />
                            </span>
                            <span>
                                <p>Max</p>
                                <input
                                    type="number"
                                    min="1"
                                    max="1500"
                                    placeholder="1500"
                                    value={filters.max}
                                    onChange={(e) =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            max: Number(e.target.value),
                                        }))
                                    }
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles["display-products"]}>
                    {filteredData.map((item, index) => (
                        <Product
                            key={index}
                            item={item}
                            setSelectedItem={setSelectedItem}
                            setPurchasedItem={setPurchasedItem}
                            purchasedItem={purchasedItem}
                            myStyle={{ product: styles["product"] }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shop;
