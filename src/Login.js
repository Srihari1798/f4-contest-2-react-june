import React, { useState } from 'react'
import './Login.css'

function Login() {
 
    const [username, setUserName] = useState(" ")
    const [password, setPassword] = useState(" ")
    
    function submitHandler(e) {
        e.preventDefault()
        
        fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => { 
        if (res.status === 200) {
            console.log(res);
          return res.json();
          
        } else {
          throw new Error('Invalid username or password');
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        // console.log(data);
        window.location.href = '/profile';
      
      })
      .catch((error) => alert(error.message));

    }

return (
    <div className='LoginForm'>
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label for="exampleInputUserName " className="form-label">Username</label>
                <input type="text" className="form-control" placeholder="Username"  aria-label="Username" aria-describedby="addon-wrapping"onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="text" className="form-control" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>
)
}

export default Login
