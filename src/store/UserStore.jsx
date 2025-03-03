import { create } from "zustand";
import { createUpdateAccount } from "../api/user";
import { persist } from "zustand/middleware";

const authStore = (set) => ({ //set : set role as new value == Global State
    userData: null, //useZustand to keep State ROLE to show SELLER or ADMIN ??
    actionUserAccount: async (token, input) => {
        const response = await createUpdateAccount(token, input)
        console.log('responseZustand', response);
        set({ userData: response.data.updateUserData })
    },

})

const useAuthStore = create(persist(authStore, { name: "user" })) //persist : keep User Data got from DB on Browser LocalStorage

export default useAuthStore


