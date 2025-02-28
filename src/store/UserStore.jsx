import { create } from "zustand";
import { updateProfile } from "../api/user";
import { persist } from "zustand/middleware";
import { addImages } from "../api/images";

const authStore = (set) => ({ //set : set role as new value == Global State
    userData: null, //useZustand to keep State ROLE to show SELLER or ADMIN ??

    actionUpdateProflie: async (token, input) => {
        const response = await updateProfile(token, input)
        console.log('responseZustand', response);
        set({ userData: response.data.updateUserData })
    },

})

const useAuthStore = create(persist(authStore, { name: "user" })) //persist : keep User Data got from DB on Browser LocalStorage

export default useAuthStore


