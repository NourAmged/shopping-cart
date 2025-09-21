import Header from "./Component/Header/Header"
import Main from "./Component/Main/Home/Main";
import Footer from "./Component/Footer/Footer";
import { Routes, Route } from 'react-router';
import ProductItem from "./Component/Main/ProductItem/ProductItem";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/second" element={<ProductItem />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App
