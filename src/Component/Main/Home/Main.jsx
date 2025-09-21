import styles from "./Main.module.css";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import HeaderSection from "./HeaderSection/HeaderSection";
import BodySection from "./BodySection/BodySection";


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
            <BodySection  data={json}/>
        </main>
    );

}

export default Main;