import styles from "./BodySection.module.css";


function Product({ data }) {
    return (
        <div className={styles["product"]}>
            <div>
                <img src={data["image"]} alt="product" />
            </div>
            <p>{data["title"]}</p>
            <p>{data["price"]}</p>
            <button>Add to Cart</button>
        </div>
    );
}

function BodySection({ data }) {
    return (
        <section className={styles["body-section"]}>
            <h2>Featured Products</h2>
            <div className={styles["product-container"]}>
                <Product data={data[0]} />
                <Product data={data[1]} />
                <Product data={data[2]} />
            </div>
            <div></div>
            <h2>Shop by Category</h2>
            <div></div>
        </section>
    );
}

export default BodySection;