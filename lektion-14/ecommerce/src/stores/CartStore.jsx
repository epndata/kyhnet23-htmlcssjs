import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const CartStore = createContext();
export const UseCartStore = () => useContext(CartStore);

export const CartStoreProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingProductIndex = cartItems.findIndex(item => item.product.id === product.id);
        if (existingProductIndex !== -1) {
            const updatedCartItems = cartItems.map((item, index) => {
                if (index === existingProductIndex) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { product: product, quantity: 1 }]);
        }


    };

    const removeFromCart = (productId) => {
        const existingProductIndex = cartItems.findIndex(item => item.product.id === productId);
        if (existingProductIndex !== -1) {
            const productToRemove = cartItems[existingProductIndex];
            if (productToRemove.quantity > 1) {
                const updatedCartItems = cartItems.map((item, index) =>
                    index === existingProductIndex ? { ...item, quantity: item.quantity - 1 } : item
                );
                setCartItems(updatedCartItems);
            } else {
                const updatedCartItems = cartItems.filter((item, index) => index !== existingProductIndex);
                setCartItems(updatedCartItems);
            }
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    useEffect(() => {
        try {
            const cart = JSON.parse(Cookies.get('cart'))
            if (cart.length > 0)
                setCartItems(cart)
        }
        catch {}
    }, [])


    useEffect(() => {
        Cookies.set('cart', JSON.stringify(cartItems), { expires: 30, path: '/' })
    }, [addToCart])

    return (
        <CartStore.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartStore.Provider>
    );
};