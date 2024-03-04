import {useState} from 'react'

const Signup = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword]= useState('')

    const handleSubmit= async (e)=>{
        e.preventDefault();

        console.log(email, password)
    }
  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h3>Sign up</h3>

        <label>Email:</label>
        <input
         type="email"
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
         />
        <input
         type="password"
         value={password}
         onChange={(e)=> setPassword(e.target.value)}
         />

         <button >Sign Up</button>
    </form>
  )
}

export default Signup