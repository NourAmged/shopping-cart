import styles from "./Main.module.css";
import image from "../../assets/shopping-DaW05CRc.jpg";

function Main() {
    return (
        <main>
            <section className={styles["welcome-section"]}>
                <div className={styles["welcome-section-txt"]}>
                    <h1>Discover Your Style</h1>
                    <p>Explore the latest trends and shop your favorite <br /> products now.</p>
                    <button>Shop Now</button>
                </div>
                <img src={image} />
            </section>
        </main>
    );

}

export default Main;