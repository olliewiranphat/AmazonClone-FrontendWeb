import axios from "axios"
///// PUT Update UserData in DB (DB: No have ClerkID yet --> Create new data, if have alreadt --> Update)
export const updateProfile = async (token, input) => {
    return await axios.put('http://localhost:8080/user/update-account', input, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const deleteUserAccount = async (token) => {
    return await axios.delete('http://localhost:8080/user/delete-account', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}