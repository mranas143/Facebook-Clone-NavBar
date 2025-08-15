import React, { useState } from 'react';
import img from './images/img.png';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake login logic (for now)
    if (email && password) {
      onLogin(); // tell App we're logged in
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <div style={styles.loginContainer}>
        <img src={img} style={{width:"100px",height:"100px",marginTop:"-45px"}} alt="" />
      <h2>Facebook Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
         <div>   
        <input
          type="text"
          placeholder="Email or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{width: '250px',marginLeft:"32px",padding:"15px",margin: '10px 0', fontSize: '16px',borderRadius:"20px",border:"none",backgroundColor:"#f0f2f5"}}
        /></div>
        <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{width: '250px',marginLeft:"32px",padding:"15px",margin: '10px 0', fontSize: '16px',borderRadius:"20px",border:"none",backgroundColor:"#f0f2f5"}}        />
        </div>
        <div>
        <button type="submit" 
          style={{width: '280px',marginLeft:"32px",padding:"15px",margin: '10px 0', fontSize: '16px',borderRadius:"20px",border:"none",backgroundColor:"rgb(8 101 255)",fontWeight:"bold",color:"white"}}        
        >Log In</button></div>
        </div>
      </form>
    </div>
  );
};

const styles = {
  loginContainer: {
    textAlign: 'center',
    marginTop: '100px'
  },
  form: {
    display: 'inline-block',
    textAlign: 'left',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  },
  input: {
    display: 'block',
    width: '250px',
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#1877f2',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Login;