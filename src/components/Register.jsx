import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


// Conditional rendering
function Register() {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const redirect = () => {
    if (name) {
      navigate('/');
    } else {
      navigate('/contact')
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <button onClick={redirect}>Click</button>
    </div>
  )
}

export default Register
