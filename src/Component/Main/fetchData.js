const fetchData = (setJson, setLoading) => {
    const url = "https://fakestoreapi.com/products";

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not OK (${response.status})`);
            }
            return response.json();
        })
        .then((data) => setJson(data))
        .catch((err) => console.error("Fetch or parse error:", err))
        .finally(() => setLoading(false));
};


export default fetchData;