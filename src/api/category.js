import axios from "axios"

export const addCategory = async (token, value) => {
    return await axios.post('http://localhost:8080/category/add-category', value, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getAllCategories = async (token) => {
    return await axios.get('http://localhost:8080/category/all-categories', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

