import styles from "./HeaderSection.module.css";
import image from "../../../../assets/shopping-DaW05CRc.jpg";
import { useNavigate } from "react-router";

function HeaderSection() {

    const navigate = useNavigate();

    return (
        <section className={styles["welcome-section"]}>
            <div className={styles["welcome-section-txt"]}>
                <h1>Discover Your Style</h1>
                <p>Explore the latest trends and shop your favorite <br /> products now.</p>
                <button className={styles["header-btn"]} onClick={() => navigate("/shop")}>Shop Now</button>
            </div>
            <img src={image} />
        </section>
    );
}

export default HeaderSection;