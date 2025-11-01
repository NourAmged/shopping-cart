import styles from "./BodySection.module.css";
import addToCart from "../addToCart";
import { useNavigate } from 'react-router';
import { useState } from "react";


function Product({ item, setSelectedItem, setPurchasedItem, purchasedItem, myStyle = {} }) {

    const navigate = useNavigate();

    return (
        <div className={`${styles["product"]} ${myStyle.product || ""}`} onClick={() => { setSelectedItem(item); navigate('/shop/item') }}>
            <div>
                <img src={item["image"]} alt="product" />
            </div>
            <p className={styles["product-title"]}>{item["title"]}</p>
            <p className={styles["product-price"]}>{"$" + item["price"]}</p>
            <button className={styles["product-btn"]} onClick={(e) => { e.stopPropagation(); addToCart(setPurchasedItem, purchasedItem, item) }} >Add to Cart</button>
        </div>
    );
}

function BodySection({ data, setSelectedItem, setPurchasedItem, purchasedItem, setDefaultCategory }) {

    const navigate = useNavigate();

    return (
        <section className={styles["body-section"]}>
            <h2>Featured Products</h2>
            <div className={styles["product-container"]}>
                {data.slice(0, 3).map((item, index) => (
                    <Product key={index} item={item} setSelectedItem={setSelectedItem} setPurchasedItem={setPurchasedItem} purchasedItem={purchasedItem} />
                ))}

            </div>
            <h2>Shop by Category</h2>
            <div className={styles["category-container"]}>
                <button className={styles["category-btn"]} onClick={() => { setDefaultCategory("men's clothing"); navigate("/shop") }} >Men</button>
                <button className={styles["category-btn"]} onClick={() => { setDefaultCategory("women's clothing"); navigate("/shop") }}>Women</button>
                <button className={styles["category-btn"]} onClick={() => { setDefaultCategory("jewelery"); navigate("/shop") }}>Accessories</button>
                <button className={styles["category-btn"]} onClick={() => { setDefaultCategory("electronics"); navigate("/shop") }}>Electronics</button>
            </div>
            <div className={styles["discount-container"]}>
                <p>Get 20% Off Your First Order</p>
                <button className={styles["shopping-btn"]} onClick={() => navigate("/shop")}>
                    Start Shopping
                </button>
            </div>
        </section>
    );
}

export { BodySection, Product };