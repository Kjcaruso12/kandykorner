import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const CustomerList = () => {
    const [customers, setCustomer] = useState([])

    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
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