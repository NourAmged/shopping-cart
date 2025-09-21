
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
            <div className={styles["information"]}>
                <div>
                    <h4>What a Shop</h4>
                    <p>Your one‑stop shop for the best products at<br /> great prices.</p>
                </div>
                <div>
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Press</p>
                </div>
                <div>
                    <h4>Support</h4>
                    <p>Contact</p>
                    <p>FAQs</p>
                    <p>Shipping</p>
                </div>
                <div>
                    <h4>Legal</h4>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;