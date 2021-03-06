import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"
import { PurchaseList } from "./purchases/PurchaseList"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/locations">
                <LocationList />
            </Route>
            <Route exact path="/products">
                <ProductList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/purchases">
                <PurchaseList />
            </Route>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

        </>
    )
}