import { create } from "zustand";
import { getAllProductDB, searchProducts } from "../api/product"
import { persist } from "zustand/middleware";

const ProductStore = (set) => ({
    allProductsDB: null,
    searchProductsDB: null,
    categoryID: null,
    search: null,
    actionGetAllProductsDB: async () => {
        const allproducts = await getAllProductDB()
        // console.log('allproducts', allproducts);
        set({ allProductsDB: allproducts.data.results })
    },
    actionsearchProductsDB: async (categoryID, search) => {
        const resSearchPD = await searchProducts(categoryID, search)
        console.log('resSearchPD', resSearchPD);
        set({ searchProductsDB: resSearchPD.data.results, categoryID, search })
    }
})

const useProductStore = create(persist(ProductStore, { name: "ProductStore" }))
export default useProductStore