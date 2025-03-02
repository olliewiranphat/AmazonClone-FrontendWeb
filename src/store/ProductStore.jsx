import { create } from "zustand";
import { getAllProductDB } from "../api/product"
import { persist } from "zustand/middleware";

const ProductStore = (set) => ({
    allProductsDB: null,
    actionGetAllProductsDB: async () => {
        const allproducts = await getAllProductDB()
        // console.log('allproducts', allproducts);
        set({ allProductsDB: allproducts.data.results })
    }
})

const useProductStore = create(persist(ProductStore, { name: "allProductsDB" }))
export default useProductStore