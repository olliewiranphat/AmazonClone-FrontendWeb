import axios from "axios"
///// PUT Update UserData in DB (DB: No have ClerkID yet --> Create new data, if have alreadt --> Update)
export const updateProfile = async (token, input) => {
    return await axios.put('http://localhost:8080/user/update-account', input, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}