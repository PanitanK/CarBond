import './css/App.css';
import Title from './image/logo/TitleCB.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ErrMSG, setErrMsg] = useState(null);
  const navigate = useNavigate();

 

  const handleLogin = async (event) => {
    event.preventDefault();
    
    //console.log('Submitted username:', email);
    //console.log('Submitted password:', password);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const _user = userCredential.user;

      //console.log(userCredential)
      //console.log(_user.uid)

      setErrMsg(null);
      navigate('/Protected', { state: { userUID: _user.uid } });

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMsg(errorCode + '  ' + errorMessage);
    }
  };
  const handleClick2 = () =>{
    navigate('/Register');
  }
  return (
    <div className="LoginPage">
      <div className="static-bar">
        <div className="left-content">
          <Link to="/">
            <img className="title-image" src={Title} alt="Title" />
          </Link>
        </div>
        <div className="green-box3" onClick={handleClick2}>
          
          <h1 className="green-box-text3">NOT A MEMBER ?</h1>
        </div>

      </div>

      <div className="App-header-login">
 
      <div className="LogRegBox">
        <h1>Login</h1>
    
 
        <form onSubmit={handleLogin}>

          <div> 
            <h5 htmlFor="Email" class="input-placeholder">Email</h5>
            <input
              type="text"
              id="Email"
              class="form-style"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <h5 htmlFor="password" class="input-placeholder">Password</h5>
            <input
              type="password"
              id="password"
              class="form-style"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
         
        
        <div>
        <div className="button-container">
            <button type="submit" className="submit-button">ENTER</button>
            <p className="error-message">{ErrMSG}</p>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>

  );
}

export default Login;
