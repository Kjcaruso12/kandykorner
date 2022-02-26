import React, { useEffect, useState } from "react"
import { getCurrentPurchases } from "../ApiManager"
import "./Purchase.css"

export const PurchaseList = () => {
    const [purchases, updatePurchases] = useState([])
    const currentCustomer = parseInt(localStorage.getItem("kandy_customer"))

    useEffect(
        () => {
            getCurrentPurchases(currentCustomer)
                .then((data) => {
                    updatePurchases(data)
                })
        },
        []
    )

    const createLineItem = () => {
        const purchaseMap = new Map()

        for (const purchase of purchases) {
            const keyObj = {
                "productId": purchase.product.id,
                "price": purchase.product.price
            }
            if (purchaseMap.has(keyObj)) {
                purchaseMap.set(keyObj, (purchaseMap.get(keyObj))+1)
            }
            else {
                purchaseMap.set(keyObj, 1)
            }
        }
        return purchaseMap
    }

    const productQuanity = createLineItem()

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Candy</th>
                        <th>Quantity</th>
                        <th>Price/unit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        purchases.map(
                            (purchase) => {
                                for (const product of productQuanity.keys()) {
                                    if (product.productId === purchase.product.id) {
                                        return <tr key={`purchase--${purchase.id}`}>
                                            <td>{purchase.product.name}</td>
                                            <td>{productQuanity.get(product)}</td>
                                            <td>{purchase.product.price}</td>
                                        </tr>
                                    } 
                                }
                            }
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
