
import styles from './Footer.module.css';

function FooterSection() {
    return (
        <footer>
            <div className={styles["subscribe"]}>
                <h3>Join our newsletter & get 20% off</h3>
                <p>Be the first to know about new arrivals,<br /> sales & exclusive offers.</p>
                <form>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className={styles["email"]}
                        required
                    />
                    <button type="submit" className={styles["subscribe-btn"]}>Subscribe</button>
                </form>
            </div>
        </footer>
    );
}

export default FooterSection;