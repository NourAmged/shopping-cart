import styles from "./Main.module.css";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import HeaderSection from "./HeaderSection/HeaderSection";

function Main() {
    const [json, setJson] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(setJson, setLoading);
    }, []);

    if (loading)
        return (<p>loading</p>);

    return (
        <main>
            <HeaderSection />
            <section >

            </section>
        </main>
    );

}

export default Main;