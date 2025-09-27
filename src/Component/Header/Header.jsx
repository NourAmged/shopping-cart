import styles from "./Header.module.css";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { useNavigate } from "react-router";

function Header() {

    const navigate = useNavigate();

    return (
        <header>
            <button className={styles["shop-logo"]} onClick={() => navigate("/")}>
                <CiShop size={'32px'} /> What a Shop
            </button>
            <div className={styles["header-content"]}>
                <button className={styles["home-btn"]} onClick={() => navigate("/")}>Home</button>
                <button className={styles["shop-btn"]}>Shop</button>
                <button className={styles["about-btn"]}>About</button>
                <input type="text" placeholder="Search products..." />
                <IoCartOutline size={'24px'} />
            </div>
        </header>
    );
}

export default Header;