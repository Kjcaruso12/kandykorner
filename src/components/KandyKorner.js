import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

export const KandyKorner = () => {
    return (
        <>
            <Route>
            <h1>KandyKorner</h1>
            <NavBar />
            <ApplicationViews />
            </Route>
        </>
    )
}