function addToCart(setPurchasedItem, purchasedItem, product, quantity = 1) {
    const existingItem = purchasedItem.find(item => item.id === product.id);

    if (existingItem) {
        const updatedCart = purchasedItem.map(item =>
            item.id === product.id ? { ...item, amount: item.amount + quantity } : item
        );
        setPurchasedItem(updatedCart);
    } else {
        const updatedCart = [...purchasedItem, { ...product, amount: quantity }];
        setPurchasedItem(updatedCart);
    }
}


export default addToCart;

