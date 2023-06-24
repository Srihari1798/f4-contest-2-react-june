import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const id = user ? user.id : '';

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Unable to retrieve user information');
          }
        })
        .then((data) => {
          // console.log(data);
          // Save user object with all details to Redux state
          dispatch({ type: 'SET_USER_DETAILS', payload: data });
        })
        .catch((error) => alert(error.message));
    }
  }, [id, dispatch]);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome {user.username}!</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          {user.company && <p>Company: {user.company.name}</p>}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
