import React from 'react'
import { UseProductStore } from '../stores/ProductStore';
import { UseCartStore } from '../stores/CartStore';

const ProductList = () => {
    const { products } = UseProductStore()
    const { addToCart } = UseCartStore()
    
    return (
    <section className="product-list">
        <div className="products">
            {
                products.map(product => (
                    <div key={product.id} className="product">
                        <h3>{product.description}</h3>
                        <h5>{product.manifacturer} {product.title}</h5>
                        <button onClick={() => addToCart(product)}>Lägg till i kundvagn</button>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default ProductList