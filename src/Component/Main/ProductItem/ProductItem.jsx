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
                    <p>{selectedItem["price"]}</p>
                    <p>{selectedItem["category"]}</p>
                    <p>{selectedItem["description"]}</p>
                </div>
            </div>
        </>
    );
}

export default ProductItem;