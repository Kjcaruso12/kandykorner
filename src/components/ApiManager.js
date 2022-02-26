export const existingLoginUserCheck = (email) => {
    return fetch(`http://localhost:8088/customers?email=${email}`)
        .then(res => res.json())
}

export const existingRegisterUserCheck = (customer) => {
    return fetch(`http://localhost:8088/customers?email=${customer.email}`)
        .then(res => res.json())
}

export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
}

export const getLocations = () => {
    return fetch("http://localhost:8088/locations")
        .then(response => response.json())
}

export const getAllPurchases = () => {
    return fetch("http://localhost:8088/purchases/?_expand=customer&_expand=product")
        .then(response => response.json())
}

export const getCurrentPurchases = (currentCustomer) => {
    return fetch(`http://localhost:8088/purchases/?customerId=${currentCustomer}&_expand=product`)
    .then(res => res.json())
}

export const getProducts = () => {
    return fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
        .then(res => res.json())
}

export const postCustomer = (customers) => {
    return fetch("http://localhost:8088/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customers)
    })
}

export const postEmployee = (employees) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employees)
    }

    return fetch("http://localhost:8088/employees", fetchOption)
}

export const postPurchase = (newPurchase) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPurchase)
    }

    return fetch("http://localhost:8088/purchases", fetchOption)
}

export const deleteEmployee = (id) => {
    return fetch(`http://localhost:8088/employees/${id}`, {
        method: "DELETE"
    })
}