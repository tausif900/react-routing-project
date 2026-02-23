import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Contact() {
  const [searchParams, setSearchParams] = useSearchParams()                     //useSearchParams Hooks are used to fetch data or also we can say to filter data from the searchparameter which is started after the ? in the URL
  return (
    <div>
      <p>Name: {searchParams.get('name')}</p>
      <p>Phone No: {searchParams.get('PhonenNo')}</p>
      <button className='btn btn-primary m-3' onClick={()=>setSearchParams({email:'ansaritausif9268@gmail.com'})}>Set Search Parameter</button>
    </div>
  )
}

export default Contact
