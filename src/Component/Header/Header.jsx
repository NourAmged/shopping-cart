import styles from "./Header.module.css";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

function Header({ purchasedItem }) {
    const navigate = useNavigate();

    const totalAmount = purchasedItem.reduce((amount, currentAmount) =>
        currentAmount.amount + amount
        , 0);

    return (
        <header>
            <button className={styles["shop-logo"]} onClick={() => navigate("/")}>
                <CiShop size={'32px'} /> What a Shop
            </button>
            <div style={{ display: "flex", gap: "12px" }}>
                <div className={styles["header-content"]}>
                    <button className={styles["home-btn"]} onClick={() => navigate("/")}>Home</button>
                    <button className={styles["shop-btn"]}>Shop</button>
                    <button className={styles["about-btn"]}>About</button>
                    <input type="text" placeholder="Search products..." />
                </div>
                <span>
                    <IoCartOutline style={{ cursor: "pointer" }} onClick={() => navigate("/cart")} size={'24px'} />
                    {
                        totalAmount === 0 ? "" : <span className={styles["total-amount"]}>{totalAmount}</span>
                    }
                    <IoMenuSharp size={26} className={styles["drawer"]}/>
                </span>
            </div>
        </header>
    );
}

export default Header;