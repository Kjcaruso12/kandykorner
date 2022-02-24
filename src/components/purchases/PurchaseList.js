import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./Purchase.css"

export const PurchaseList = () => {
    const [purchases, updatePurchases] = useState([])      

    const currentCustomer = parseInt(localStorage.getItem("kandy_customer"))
    useEffect(
        () => {
            fetch(`http://localhost:8088/purchases/?customerId=${currentCustomer}&_expand=product`)
                .then(res => res.json())
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
//${currentCustomer}