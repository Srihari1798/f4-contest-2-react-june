import React, { useState,useEffect } from 'react'


function Profile() {
 
  const [user, setUser] = useState("")
  

  useEffect(() => {
    
    const id = localStorage.getItem('id');
   
    if (id) {
      fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => {
          if (res.status === 200) {
          
            return res.json();
          } else {
            throw new Error('Unable to retrieve user information');
          }
        })
        .then((data) => setUser(data))
        .catch((error) => alert(error.message));
      
    }
  }, []);

  return (
    <div>
       {user ? (
        <>
          <h1>Welcome {user.id}!</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Company: {user.company.name}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Profile
