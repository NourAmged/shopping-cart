import Header from "./Component/Header/Header"
import Main from "./Component/Main/Home/Main";
import Footer from "./Component/Footer/Footer";
import { useState } from "react";

function App() {
    const [purchasedItem, setPurchasedItem] = useState([]);

    return (
        <>
            <Header purchasedItem={purchasedItem} />
            <Main purchasedItem={purchasedItem} setPurchasedItem={setPurchasedItem} />
            <Footer />
        </>
    );
}

export default App
