import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getProducts, postPurchase } from "../ApiManager"

const timeStamp = Date.now()

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [purchase, setPurchase] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getProducts()
                .then((products) => {
                    setProducts(products)
                })
        },
        []
    )

    const savePurchase = (product) => {
        const newPurchase = {
            productId: product.id,
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            timestamp: new Intl.DateTimeFormat(`en-US`, {year: `numeric`, month: `2-digit`,day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp)
        }
        postPurchase(newPurchase)
    }


    return (
        <>
            {
                products.map(
                    (product) => {
                        return <div key={`product--${product.id}`}>
                            <p>{product.name} is a {product.productType.type} and costs ${product.price}
                            <button className="purchase" 
                            onClick={
                                () => {
                                savePurchase(product)
                                }}
                            >Purchase
                            </button></p>
                        </div>
                    }
                )
            }
        </>
    )
}