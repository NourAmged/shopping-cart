import styles from "./ProductItem.module.css";

function ProductItem({ selectedItem }) {

    console.log(selectedItem);
    return (
        <>
            <div className={styles["product-item"]}>
                <div className={styles["product-img-container"]}>

                    <img src={selectedItem["image"]} className={styles["product-img"]} />
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
                </div>
            </div >
        </>
    );
}

export default ProductItem;