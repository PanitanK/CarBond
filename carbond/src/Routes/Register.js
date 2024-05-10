import './css/App.css';
//import { Link } from "react-router-dom";
import Title from './image/logo/TitleCB.png';
//import placeholderImage from './image/logo/Placeholder.png';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { auth , db  } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {  doc, setDoc } from 'firebase/firestore';



function Register() {
 
 
  const [email, regEmail] = useState('');
  const [password, regPassword] = useState('');
  const [ErrMSG, setErrMsg] = useState(null);
  const [Firstname,regFirstName] = useState('');
  const [Lastname,regLastName] = useState('');
  const navigate = useNavigate();

  const createUserDocumentAndSubcollections = async (userId, dataCollection, profileData) => {
    try {
      // Create user document using UID
      const userDocRef = doc(db, 'USERS', userId);
      await setDoc(userDocRef, {});
  
      const dataDocumentId = 'Credential_Data'; // Replace with your desired custom document ID
      const dataDocumentRef = doc(db, 'USERS', userId, 'DataCollection', dataDocumentId);
      await setDoc(dataDocumentRef, dataCollection);
      
      const plotDataDocumentId = 'Placeholder'; // Replace with your desired custom document ID
      const plotDataDocumentRef = doc(db, 'USERS', userId, 'PlotCollection', plotDataDocumentId);
      await setDoc(plotDataDocumentRef,{});  
      
      const profileDocumentId = 'Profile_Data'; // Replace with your desired custom document ID
      const profileDocumentRef = doc(db, 'USERS', userId, 'ProfileCollection', profileDocumentId);
      await setDoc(profileDocumentRef, profileData);
  
    } catch (error) {
      console.error('Error creating user document and subcollections: ', error);
    }
  };
  const handleClick2 = () =>{
    navigate('/Login');
  }
  const Reg = async (event) => {
    event.preventDefault();
    //console.log('Submitted username:', email);
    //console.log('Submitted password:', password);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setErrMsg(null);
      const currentDate = new Date();

      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so we add 1
      const year = currentDate.getFullYear();

      

      const dataCollection = { Credential: 'NULL' };

      const profileData = { 
        Name: Firstname + " " + Lastname,
        FirstName:Firstname , 
        LastName:Lastname , 
        Hometown: 'Unknown' , 
        Latitude : 8.435164926  , 
        Longitude : 99.95782950 , 
        Credit_Own : 0 ,
        Created_Date : `${day}/${month}/${year}`,
        Expiry_Date : `${day}/${month}/${year+1}`
      
      };
      // Create user document and storage folder simultaneously
      await Promise.all([
        createUserDocumentAndSubcollections(user.uid, dataCollection, profileData),
        //createUserFolder(user.uid)
      ]);

      //console.log('Both Firebase and Storage operations are successful');
      navigate('/login');
    } catch (error) {
      // Handle any errors that occur during user creation
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMsg(errorCode + "  " + errorMessage);
      // You can display the error message to the user or perform other error handling tasks.
    }
  };


  
  return (
    
    <div className="LoginPage">
    <div className="static-bar">
        <div className="left-content">
          <Link to="/">
            <img className="title-image" src={Title} alt="Title" />
          </Link>
        </div>
        <div className="green-box3" onClick={handleClick2}>
          
          <h1 className="green-box-text3">ALREADY A MEMBER ?</h1>
        </div>

      </div>
     
      <div className="App-header-Reg" >
  
        <h1>Register</h1> {/* Add "Register" title */}
    
        
        <form onSubmit={Reg}>
        
        <div className='NameRow'>
          
          <div>
            <h5 htmlFor="First_Name"class="input-placeholder2">Firstname</h5>
            <input
              type="text"
              id="Firstname"
              class="form-style2"
              value={Firstname}
              onChange={(e) => regFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <h5 htmlFor="Last_Name" class="input-placeholder2">Lastname</h5>
            <input
              type="text"
              id="Lastname"
              class="form-style3"
              value={Lastname}
              onChange={(e) => regLastName(e.target.value)}
              required
            />
          </div>
          </div>


          <div>
            <h5 htmlFor="Email"class="input-placeholder">Email</h5>
            <input
              type="text"
              id="username"
              class="form-style"
              value={email}
              onChange={(e) => regEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <h5 htmlFor="Password"class="input-placeholder">Password</h5>
            <input
              type="password"
              id="password"
              class="form-style"
              value={password}
              onChange={(e) => regPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="button-container">
            <button type="submit" className="submit-button">ENTER</button>
            <p className="error-message">{ErrMSG}</p>
          </div>
          
          
        </form>
        
      </div>
    </div>

  
    
  );
}

export default Register;