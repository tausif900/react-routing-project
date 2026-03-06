import React from 'react'
import { useNavigate } from 'react-router-dom'


// Conditional rendering
function Register() {
  const [name, setName] = useState('')
  navigate = useNavigate()
  const redirect = () => {
    if (name) {
      navigate('/');
    } else {
      navigate('contact')
    }
  }
  return (
    <div>
      Register
      <button onClick={redirect}>Click</button>
    </div>
  )
}

export default Register
