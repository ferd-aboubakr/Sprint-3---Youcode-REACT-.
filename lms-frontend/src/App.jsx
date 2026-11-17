import { useState } from "react"
import LoginForm from "./components/auth/LoginForm"


function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

const handleLogin = (userData, authToken) => {
  
  setToken(authToken)
  console.log('Logged in :', userData)
 
}

  return (
    <>
     <h1>LMS API FRONT-END</h1> 
     <LoginForm onLogin = {handleLogin}/>
    </>
  )
}

export default App
