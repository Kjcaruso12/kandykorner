import React, { useEffect, useState } from "react"
import { getAllCustomers, getAllPurchases } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomer] = useState([])
    const [purchases, setPurchases] = useState([])

    useEffect(
        () => {
            getAllCustomers()
                .then((data) => {
                    setCustomer(data)
                })
        },
        []
    )

    useEffect(
        () => {
            getAllPurchases()
                .then((data) => {
                    setPurchases(data)
                })
        },
        []
    )

    const totalPurchases = (customer) => {
        return purchases.filter((purchase) => customer.id === purchase.customerId).length
    }

    const sortedCustomers = () => {
        const addOrders = customers.map(customer => ({ ...customer, orders: totalPurchases(customer) }))
        
        const sortedArr = addOrders.sort((customer1, customer2) => {
            const orders1 = customer1.orders
            const orders2 = customer2.orders

            return orders2 - orders1
        })
        return sortedArr
    }




    return (
        <>  
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Candies Bought</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedCustomers().map(
                            (customer) => {
                                return <tr key={`customer--${customer.id}`}>
                                    <td>{customer.first_name} {customer.last_name}</td>
                                    <td>{totalPurchases(customer)}</td>
                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </>
    )
}