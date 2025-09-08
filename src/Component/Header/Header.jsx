import styles from "./Header.module.css";

function Header(){
    return (
        <header>
            <div>
                Shop Name
            </div>
            <div className={styles["header-content"]}>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <input type="text" />
                <img src="" alt="logo" />
            </div>
        </header>
    );
}

export default Header;