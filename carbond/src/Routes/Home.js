import Title from './image/logo/TitleCB.png';
import './css/App.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from './Firebase';
import {  collection, getDocs, doc, getDoc } from 'firebase/firestore';

import HomeIcon from './image/svg/Home.png';
import RequestIcon from './image/svg/Request.png';
import ResearchIcon from './image/svg/Research.png';
import PartnersIcon from './image/svg/Partners.png';
import MarketIcon from './image/svg/Market.png';
import UserIcon from './image/svg/person.png';

import { Link } from "react-router-dom";
//import LOCKER from './image/svg/locker.svg';

function Home() {
  //var fetchcount = 0;
  const location = useLocation();
  const userCollectionRef = collection(db, 'USERS');
  const { userUID } = location.state || {};
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [HasFetched, setFetch] = useState(false);
  //const [showSetting, setShowSetting] = useState(false); // State to track whether to show Setting component
  const [plotDocuments, setplotDocuments] = useState([])
  //const [showDropdown, setShowDropdown] = useState(false);

  const [MaximumCredit , setMaximumCredit] = useState(0);

  console.log(plotDocuments)
  console.log(MaximumCredit)
  const handleNavigation = (path) => {
    // Use the navigate function to navigate to the specified path
    navigate(path);
  };
  
  
 
  const fetchPlotDocuments = async (userUID) => {
    const dataCollectionRef = collection(db, 'USERS', userUID, 'DataCollection');
  
    try {
      const querySnapshot = await getDocs(dataCollectionRef);
      const plotDocuments = querySnapshot.docs
        .filter((doc) => doc.id.startsWith('PlotNO_'))
        .map((doc) => doc.data());
        
      return plotDocuments;
    } catch (error) {
      console.error('Error fetching plot documents:', error);
      return [];
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(userCollectionRef, userUID);
        const userDocSnapshot = await getDoc(userDocRef);
        const plotDocuments = await fetchPlotDocuments(userUID);
    
        setplotDocuments(plotDocuments)

        var sum = 0;
        for (let i = 0; i < plotDocuments.length; i++) {
          sum = sum + ((44/12)*((plotDocuments[i].Area / 0.0016)*230*0.65 * 0.8825  / (1000)))
        }

  setMaximumCredit(sum)
        if (userDocSnapshot.exists()) {
          const USERS_UID_SubCollection = collection(userDocRef, 'ProfileCollection');
          const USERS_UID_SubCollection_Snapshot = await getDocs(USERS_UID_SubCollection);

          const userData = USERS_UID_SubCollection_Snapshot.docs.map((doc) => doc.data());
          setUserData(userData);
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    if (!HasFetched){
      fetchData();
      setFetch(true)
    }
  }, [userUID, userCollectionRef, HasFetched]); 

  if (location.state == null) {
    console.log("USER IS NOT RECOGNIZED");
  
    return (
      <div className="App-header">
        <h1>UNAUTHORIZED ACCESS</h1>
        <a href='/login'> Click here to return </a>
      </div>
    );
  } 
  
  else if (!userData) {
    return <div className="App-header">Loading...</div>;
  } 
  
  else {
    return (
      <div className="App">
        <div className="static-bar">
        <div className="left-content">
          <Link to="/">
            <img className="title-image" src={Title} alt="Title" />
          </Link>
        </div>
        <Link to="/login" className="green-box">
          <img src={UserIcon} alt="UGBN" className="Locker" />
          <h1 className="green-box-text">Wei Shen</h1>
        </Link>

      </div>
      <div className='Dashboard'>
        
      <div className="sidebar">
        <div className="sidebar-option" onClick={() => handleNavigation('/option1')}>
          <img src={HomeIcon} alt="UGBN" className="IconClass" />
          <span>Home</span>
        </div>
        <div className="sidebar-option" onClick={() => handleNavigation('/option2')}>
          <img src={RequestIcon} alt="UGBN" className="IconClass" />
          <span>Request</span>
        </div>
        <div className="sidebar-option" onClick={() => handleNavigation('/option3')}>
          <img src={ResearchIcon} alt="UGBN" className="IconClass" />
          <span>Research</span>
        </div>
        <div className="sidebar-option" onClick={() => handleNavigation('/option4')}>
          <img src={PartnersIcon} alt="UGBN" className="IconClass" />
          <span>Partners</span>
        </div>
        <div className="sidebar-option" onClick={() => handleNavigation('/option5')}>
          <img src={MarketIcon} alt="UGBN" className="IconClass" />
          <span>Market</span>
        </div>
      </div>
      
    </div>
    <div className='ContentBoard'>
      <h1>555</h1>
      <h1>555</h1>

    </div>
    

    </div>
    );
  }
}

export default Home;

