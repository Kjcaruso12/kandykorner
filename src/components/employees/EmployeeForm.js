import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const EmployeeForm = () => {
    const [employees, update] = useState({
        first_name: "",
        last_name: "",
        manager: false,
        fullTime: false,
        hourlyRate: 1,
        locationId: 0
    });

    const [locations, setLocation] = useState([])

    useEffect( () => {
        return fetch("http://localhost:8088/locations")
        .then(res => res.json())
                .then((data) => {
                    setLocation(data)
        })
    },
    [])

    const history = useHistory()

    const saveEmployee = (event) => {
        event.preventDefault()


        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employees)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
        .then(() => {
            history.push("/employees")
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="first_name">First Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="First name of employee"
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.first_name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Last name of employee"
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.last_name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Hourly rate of pay"
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.hourlyRate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.fullTime = evt.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.manager = evt.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="location_dropdown">
                        Locations: <select 
                                    name="location" 
                                    id="location"
                                    onChange={
                                        (evt) => {
                                            const copy = {...employees}
                                            copy.locationId = evt.target.value
                                            update(copy)
                                        }
                                    }>
                                        <option value="0">Select a location</option>
                                        {
                                            locations.map(location => {
                                                return <option 
                                                        key={`location--${location.id}`} 
                                                        value={location.id}
                                                        >{location.name}</option>
                                            })
                                        }
                                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    )
}