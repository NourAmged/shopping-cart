import styles from "./ProductItem.module.css";
import addToCart from "../Home/addToCart";
import { useRef } from "react";

function ProductItem({ setPurchasedItem, purchasedItem, selectedItem }) {

    const quantityRef = useRef(1);

    return (
        <>
            <div className={styles["product-item"]}>
                <div style={{width: "100%"}}>
                    <nav style={{ paddingBottom: "22px" }}>
                        Home &#8594; Shop &#8594; {selectedItem["title"]}
                    </nav>
                    <div className={styles["product-img-container"]}>
                        <img src={selectedItem["image"]} className={styles["product-img"]} />
                    </div>
                </div>
                <div className={styles["product-information"]}>
                    <p className={styles["product-title"]}>{selectedItem["title"]}</p>
                    <p className={styles["product-price"]}>${selectedItem["price"]}</p>
                    <p className={styles["product-category"]}>{selectedItem["category"]}</p>
                    <p className={styles["product-description"]}>{selectedItem["description"]}</p>
                    <div className={styles["color-pick-container"]}>
                        <p>Select Color</p>
                        <div className={styles["color-container"]}>
                            <button className={styles["black-color"]}></button>
                            <button className={styles["red-color"]}></button>
                            <button className={styles["blue-color"]}></button>
                            <button className={styles["green-color"]}></button>
                            <button className={styles["yellow-color"]}></button>
                            <button className={styles["purple-color"]}></button>
                            <button className={styles["orange-color"]}></button>
                        </div>
                    </div>
                    <div className={styles["size-container"]}>
                        <p>Select Size</p>
                        <div className={styles["size"]}>
                            <button>XS</button>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                        </div>
                    </div>
                    <div>
                        <input className={styles["add-quantity"]} type="number" min="1" max="5" placeholder="1" ref={quantityRef} />
                        <button className={styles["add-cart"]} onClick={(e) => {
                            e.stopPropagation();
                            const quantity = Number(quantityRef.current.value) || 1;
                            addToCart(setPurchasedItem, purchasedItem, selectedItem, quantity);
                        }
                        }>Add to Cart</button>
                    </div>
                </div>
            </div >
        </>
    );
}

export default ProductItem;