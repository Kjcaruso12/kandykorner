import React, { useEffect, useState } from "react"
import { getLocations } from "../ApiManager"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            getLocations()
                .then((data) => {
                    setLocations(data)
                })
        },
        []
    )


    return (
        <>
            {
                locations.map(
                    (location) => {
                        return <div key={`location--${location.id}`}>
                                    <p>{location.name}</p>
                                </div>
                    }
                )
            }
        </>
    )
}