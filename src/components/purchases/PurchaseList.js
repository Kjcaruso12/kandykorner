import React, { useEffect, useState } from "react"
import { getPurchases } from "../ApiManager"
import "./Purchase.css"

export const PurchaseList = () => {
    const [purchases, updatePurchases] = useState([])      
    const currentCustomer = parseInt(localStorage.getItem("kandy_customer"))
    
    useEffect(
        () => {
            getPurchases(currentCustomer)
                .then((data) => {
                    updatePurchases(data)
                })
        },
        []
    )

    return (
        <>
            {
                purchases.map(
                    (purchase) => {
                        return <div key={`purchase--${purchase.id}`}>
                                    <p>{purchase.product.name} for {purchase.product.price}</p>
                                </div>

                    }
                )
                
            }
        </>
    )
}
