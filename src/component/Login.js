import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../Firebase"

const Login = () => {
    const [loginEmail, SetLoginEmail] = useState("")
    const [loginPassword, SetLoginPassword] = useState("")
    const userLogin = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            alert("Giriş yapıldı")
        } catch (error) {
            alert("Error")
        }
    }
  return (
    <div>
       <main className='flex items-center justify-center h-screen bg-gray-100'>
           <form>
               <div className='bg-white w-96 p-6 rounded shadow-sm'>
                   
               <div className='flex items-center justify-center mb-4'></div>
               <label className='text-gray-700'>Email</label>
               <input className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' type="email" />
               <label className='text-gray-700'>Password</label>
               <input className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' type="password"/>
               <button type='submit' className='bg-blue-500 w-full text-gray-100 py-2 mt-2 rounded hover:bg-blue-600 transition-colors' onClick={userLogin}>Login</button>
               <div className='flex justify-end text-gray-700 mt-4'>
                   <a href='#'>Have you got account? Login</a>
               </div>
               </div>
            </form>
        </main> 
    </div>
  )
}

export default Login