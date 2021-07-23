import React, { useReducer } from 'react'
import productReducer, { initialProductState } from './reducers/productReducer'
import types from './types'

const ProductApp = () => {

    const [productState, dispatch] = useReducer(productReducer, initialProductState)
    const { products, cart, activeProduct } = productState

    return (
        <div>
            {/* products */}
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.title}
                        <button onClick={() => dispatch({
                            type: types.productShow,
                            payload: product
                        })}>
                            Show
                        </button>
                        <button onClick={() => dispatch({
                            type: types.productAddToCart,
                            payload: product
                        })}>
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
            {/* cart */}
            <h2>Cart</h2>
            <ul>
                {cart.map(product => (
                    <li key={product.id}>
                        {product.title} - quantity : {product.quantity}
                        <button onClick={() => dispatch({
                            type: types.productRemoveOneFromCart,
                            payload: product.id,
                        })}>
                            Remove One
                        </button>
                        <button onClick={() => dispatch({
                            type: types.productRemoveFromCart,
                            payload: product.id,
                        })}>
                            Remove from Cart
                        </button>
                    </li>
                ))}
            </ul>
            <h2>Preview</h2>
            <p>{activeProduct.title}</p>
        </div>
    )
}

export default ProductApp
