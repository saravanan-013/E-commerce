// Signup.js

import React, { useState } from 'react';


function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example, send the data to the server
    const userData = {
      username,
      password,
      mobileNo,
      email
    };
    console.log(userData); // You can replace this with your form submission logic
    // Reset form fields after submission
    setUsername('');
    setPassword('');
    setMobileNo('');
    setEmail('');
  };

  return (
    <div className="signup-container"> {/* Apply container class */}
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form"> {/* Apply form class */}
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Mobile No:</label>
          <input
            type="text"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
