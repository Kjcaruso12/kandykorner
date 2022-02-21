import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])

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


    return (
        <>
            {
                products.map(
                    (product) => {
                        return <div key={`location--${product.id}`}>
                            <p>{product.name} is a {product.productType.type} and costs ${product.price}</p>
                        </div>
                    }
                )
            }
        </>
    )
}