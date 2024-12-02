import React from 'react'
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {

    const { loggedUser } = useAuth(); 

  return (
    <div className="flex justify-center items-center h-screen">
      <div className='bg-main w-96 p-6 rounded-lg shadow-lg text-green-3 text-center text-2xl'>
        <h1>{loggedUser?.name}</h1>
        <h1>{loggedUser?.email}</h1>
      </div>
    </div>
  );
}

export default UserProfile