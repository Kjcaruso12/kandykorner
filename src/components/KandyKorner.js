import React from "react"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"

export const KandyKorner = () => {
    return (
        <>
            <h1>KandyKorner</h1>
            <div>
            <h1>Locations</h1>
            <LocationList />
            <h1>Products</h1>
            <ProductList />
            </div>
        </>
    )
}