import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])

    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
            </div>
            {
                employees.map(
                    (employee) => {
                        return <div key={`employee--${employee.id}`}>
                                    <p>{employee.first_name} {employee.last_name} currently works at {employee.location.name}</p>
                                </div>
                    }
                )
            }
        </>
    )
}