import axios from "axios";

export const addImages = async (token, resizedImage) => {
    return await axios.post('http://localhost:8080/seller-center/products/add-product-images', { productImage: resizedImage }, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const updateImages = async (token, resizedImage) => {
    return await axios.post('http://localhost:8080/seller-center/products/add-product-images', { productImage: resizedImage }, {
        headers: { Authorization: `Bearer ${token}` }
    })
}