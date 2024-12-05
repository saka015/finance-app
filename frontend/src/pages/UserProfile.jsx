import React from 'react'
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {

    const { loggedUser } = useAuth(); 

    console.log('loggedUser', loggedUser);

  return (
    <div className="bg-green-8 flex justify-center items-center min-h-[90vh]">
      <div className='bg-main w-96 p-6 rounded-lg shadow-lg text-purple text-center text-2xl'>
        <h1>{loggedUser?.name}</h1>
        <h1>{loggedUser?.email}</h1>
      </div>
    </div>
  );
}

export default UserProfile