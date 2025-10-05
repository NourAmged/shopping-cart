import styles from "./Main.module.css";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import HeaderSection from "./HeaderSection/HeaderSection";
import BodySection from "./BodySection/BodySection";
import ProductItem from "../ProductItem/ProductItem";
import Cart from "../Cart/Cart";
import { Route, Routes } from "react-router";

function Main() {
    const [data, setData] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [purchasedItem, setPurchasedItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(setData, setLoading);
    }, []);

    if (loading)
        return (<p>loading</p>);

    return (
        <main>
            <Routes>
                <Route path="/" element={
                    <>
                        <HeaderSection />
                        <BodySection data={data} setSelectedItem={setSelectedItem} setPurchasedItem={setPurchasedItem} purchasedItem={purchasedItem} />
                    </>} />
                <Route path="/shop/item" element={<ProductItem selectedItem={selectedItem} />} />
                <Route path="/cart" element={<Cart purchasedItem = {purchasedItem} />} />
            </Routes>
        </main>
    );

}

export default Main;