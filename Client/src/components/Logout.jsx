import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logout successfully");
            setTimeout(() => {
                window.location.reload();
               
            }, 1000)

            
        } catch (error) {
            toast.error("Error:" + error);
            setTimeout(()=>{})
        }
    }
    return (
        <div>
            <button onClick={handleLogout} className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md'>Logout</button>
        </div>
    )
}

export default Logout
