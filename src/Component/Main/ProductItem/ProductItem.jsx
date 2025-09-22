import styles from "./ProductItem.module.css";

function ProductItem({ selectedItem }) {

    console.log(selectedItem);
    return (
        <>
            <div className={styles["product-item"]}>
                <img src={selectedItem["image"]} />
                <div>
                    <p>{selectedItem["title"]}</p>
                    <p>{selectedItem["price"]}</p>
                    <p>{selectedItem["category"]}</p>
                    <p>{selectedItem["description"]}</p>
                </div>
            </div>
        </>
    );
}

export default ProductItem;