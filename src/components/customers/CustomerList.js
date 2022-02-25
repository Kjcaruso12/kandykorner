import React, { useEffect, useState } from "react"
import { getAllCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomer] = useState([])

    useEffect(
        () => {
            getAllCustomers()
                .then((data) => {
                    setCustomer(data)
                })
        },
        []
    )

    return (
        <>
            {
                customers.map(
                    (customer) => {
                        return <div key={`customer--${customer.id}`}>
                                    <p>{customer.first_name} {customer.last_name}</p>
                                </div>
                    }
                )
            }
        </>
    )
}