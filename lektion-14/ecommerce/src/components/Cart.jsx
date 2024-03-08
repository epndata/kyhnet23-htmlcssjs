import React from 'react'
import { UseCartStore } from '../stores/CartStore'

const Cart = () => {
    const { addToCart, removeFromCart, cartItems, clearCart } = UseCartStore()


    return (
        <>
            <div>
                <h2>Kundvagn</h2>
                {cartItems.map((item) => (
                    <div key={item.product.id}>
                        {item.quantity} x {item.product.manufacturer} {item.product.title}
                        <button onClick={() => addToCart(item.product)}>+</button>
                        <button onClick={() => removeFromCart(item.product.id)}>-</button>
                    </div>
                ))}
                {cartItems.length > 0 && <button onClick={clearCart}>Töm kundvagnen</button>}
            </div>
            <hr />
        </>
    )
}

export default Cart