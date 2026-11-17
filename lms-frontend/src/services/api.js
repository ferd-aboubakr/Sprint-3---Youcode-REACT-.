const BASE_URL = 'http://localhost:3100/api'

export const login = async (credentials) => {
const response = await fetch(`${BASE_URL}/auth/login` , {
    method : 'POST',
    headers : { 'Content-Type' : 'application/json'},
    body : JSON.stringify(credentials),
})
if (!response.ok) throw new Error(`HTTP error ! status : ${response.status}`)

const data = await response.json()
return data



}

export const getCurrentUser = async (token) =>{

const response = await fetch(`${BASE_URL}/auth/me`, {
        headers : {
            'authorization' : `Bearer ${token}`,
        }
    })
    if(!response.ok){
        throw new Error ('Failed to fetch user profile !')
    }
return response.json()
}


