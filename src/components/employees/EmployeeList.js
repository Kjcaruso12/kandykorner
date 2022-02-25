import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { deleteEmployee, getEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const history = useHistory()

    const fireEmployee = (id) => {
        deleteEmployee(id)
        const copy = employees.filter(employee => {
            return employee.id != id
        })
        changeEmployee(copy)
    } 

    useEffect(
        () => {
            getEmployees()
                .then((employees) => {
                    changeEmployee(employees)
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
                                    <p>{employee.first_name} {employee.last_name} currently works at {employee.location.name}
                                    <button onClick={() => {
                                        fireEmployee(employee.id)
                                        }}>Fire Employee</button>
                                    </p>
                                </div>
                    }
                )
            }
        </>
    )
}