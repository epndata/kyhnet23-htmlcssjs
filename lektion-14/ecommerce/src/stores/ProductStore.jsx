import { createContext, useContext, useState } from "react";

const ProductStore = createContext()
export const UseProductStore = () => useContext(ProductStore)

export const ProductStoreProvider = ({children}) => {
    const [products, setProducts] = useState([
        { id: 1029570, title: 'TQ65Q60CAUXXC', description: '65" 4K QLED-TV med djupa kontraster och klara färger', manifacturer: 'Samsung', price: 8790 },
        { id: 1029254, title: 'OLED77C35LA', description: '77" 4K OLED TV med 120 Hz & smart AI-processor', manifacturer: 'LG', price: 26990 },
        { id: 1030854, title: 'Tapo C220', description: 'Tilt- och roterbar kamera med 2K QHD live-visning', manifacturer: 'TP.Link', price: 399 }, 
        { id: 1024974, title: 'Xperia 1 IV 256GB 5G White', description: 'Kraftfull mobiltelefon med professionell kamera', manifacturer: 'Sony', price: 7990 }
    ])


    return (
        <ProductStore.Provider value={{products}}>
            {children}
        </ProductStore.Provider>
    )
}