import { Link } from "react-router-dom";
import Title from './image/logo/TitleCB.png';
import LOCKER from './image/svg/locker.svg';
import './css/App.css';
import { useEffect } from 'react';
function App() {
  
   useEffect(() => {
    window.scrollTo(0, 60); // Scroll to the top of the page
    // ... other useEffect code ...
  }, []);

  return (
    <div className="App">
      <div className="static-bar">
        <div className="left-content">
          <Link to="/">
            <img className="title-image" src={Title} alt="Title" />
          </Link>
        </div>
        <Link to="/login" className="green-box">
          <img src={LOCKER} alt="UGBN" className="Locker" />
          <h1 className="green-box-text">UGBN MEMBER</h1>
        </Link>

      </div>
    </div>
  );
}

export default App;