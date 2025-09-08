import styles from "./Header.module.css";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";

function Header() {
    return (
        <header>
            <div className={styles["shop-logo"]}>
                <CiShop size={"32px"} /> What a Shop
            </div>
            <div className={styles["header-content"]}>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <input type="text" placeholder="Search products..." />
                <IoCartOutline size={'22px'} />
            </div>
        </header>
    );
}

export default Header;