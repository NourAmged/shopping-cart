import styles from "./Main.module.css";

function Main() {
    return (
        <main>
            <section className={styles["welcome-section"]}>
                <div>
                    <p>Discover Your Style</p>
                    <p>Explore the latest trends and shop your favorite products now.</p>
                    <button>Shop Now</button>
                </div>

            </section>
        </main>
    );

}

export default Main;