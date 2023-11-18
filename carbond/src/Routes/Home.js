import Title from './image/logo/TitleCB.png';
import './css/App.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from './Firebase';
import {  collection, getDocs, doc, getDoc } from 'firebase/firestore';
import HomeIcon from './image/svg/Home.png';
import RequestIcon from './image/svg/Request.png';
import ResearchIcon from './image/svg/Research.png';
import PartnersIcon from './image/svg/Partners.png';
import MarketIcon from './image/svg/Market.png';
import UserIcon from './image/svg/person.png';

import { Link } from "react-router-dom";

import ContentBoard from './ContentBoard';

function Home() {
  //var fetchcount = 0;
  const location = useLocation();
  const userCollectionRef = collection(db, 'USERS');
  const { userUID } = location.state || {};
  //const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [HasFetched, setFetch] = useState(false);
  const [mode, setMode] = useState("/option1");
  const [plotDocuments, setplotDocuments] = useState([])

  //  <ContentBoard mode={mode} userData={userData} plotDocuments={plotDocuments} />

  
  const handleMode = (USERMode) => {
    setMode(USERMode);
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
  
 /* FETCH DATA UPON START*/
  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const userDocRef = doc(userCollectionRef, userUID);
        const userDocSnapshot = await getDoc(userDocRef);
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

      const plotDocuments = await fetchPlotDocuments(userUID);
      setplotDocuments(plotDocuments)
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
       /* STATIC BAR */
       <div className="App">
       <div className="static-bar">
       <div className="left-content">
         <Link to="/">
           <img className="title-image" src={Title} alt="Title" />
         </Link>
       </div>
       <div className="green-box2">
         <img src={UserIcon} alt="UGBN" className="UserIcon" />
         <h1 className="green-box-text2"> {userData[0].Name}</h1>
       </div>
     </div>
  
        <div className="Dashboard">
          <div className="sidebar">
            <div
              className={`sidebar-option ${mode === '/option1' ? 'active' : ''}`}
              onClick={() => handleMode('/option1')}
            >
              <img src={HomeIcon} alt="UGBN" className="IconClass" />
              <span>Home</span>
            </div>
            
            <div
              className={`sidebar-option ${mode === '/option3' ? 'active' : ''}`}
              onClick={() => handleMode('/option3')}
            >
              <img src={ResearchIcon} alt="UGBN" className="IconClass" />
              <span>Research</span>
            </div>
            <div
              className={`sidebar-option ${mode === '/option4' ? 'active' : ''}`}
          
            >
              <img src={PartnersIcon} alt="UGBN" className="IconClass" />
              <span>Partners</span>
            </div>
            <div
              className={`sidebar-option ${mode === '/option2' ? 'active' : ''}`}
              onClick={() => handleMode('/option2')}
            >
              <img src={RequestIcon} alt="UGBN" className="IconClass" />
              <span>Request</span>
            </div>
            <div
              className={`sidebar-option ${mode === '/option5' ? 'active' : ''}`}
              onClick={() => handleMode('/option5')}
            >
              <img src={MarketIcon} alt="UGBN" className="IconClass" />
              <span>Pricing</span>
            </div>
          </div>
        </div>
  
        <div className="ContentBoard">
        
          <ContentBoard mode = {mode} userData={userData} plotDocuments={plotDocuments}/>
        </div>
      </div>
    );
  }
}
  
export default Home;

