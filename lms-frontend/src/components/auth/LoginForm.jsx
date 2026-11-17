import {useState} from 'react'
import {login, getCurrentUser} from '../../services/api'


function LoginForm ({onLogin}) {
const [email, setEmail] = useState('') 
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [isloading, setIsLoading] = useState(false)

const handleSubmit = async (e) => {
e.preventDefault()
setIsLoading(true)
setError('')

try {
const loginResponse = await login({email, password})
 const token = loginResponse.token
 //console.log('login Succes : ', token)
 const user = await getCurrentUser(token)

const userData ={
    name: user.fullName,
    email: user.email,
    role: user.role
}

 onLogin(userData, token)
 setPassword('')
} 
catch(err){
setError(err.message.includes('401') ? 'Invalid credentials' : 'Login failed')
}
finally{
setIsLoading(false)
}

}

return (
    <form onSubmit= {handleSubmit}>
        <h2>Login</h2>

        <div >
        <label> Email: </label>
        <input 
        type = 'email'
        value = {email}
        onChange ={(e) => setEmail(e.target.value)}
        required
        />

        </div>


        <div>

        <label> Password : </label>

        <input
        type = 'password'
        value = {password}
        onChange={(e) => setPassword(e.target.value)}
        required 
        />
        </div>
        <p style = {{color : 'red'}}>{error}</p>
        <button type = 'submit' disabled = {isloading} >
        {isloading ? 'Loading...' : 'login'}
        </button>

    </form>


)



}

export default LoginForm