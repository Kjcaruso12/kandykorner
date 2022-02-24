import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const timeStamp = Date.now()

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [purchase, setPurchase] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
                .then(res => res.json())
                .then((data) => {
                    setProducts(data)
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
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }

        return fetch("http://localhost:8088/purchases", fetchOption)
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