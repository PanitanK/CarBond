import { Link } from "react-router-dom";
import Title from './image/logo/TitleCB.png';
import LOCKER from './image/svg/locker.svg';
import './css/App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();

   useEffect(() => {
    window.scrollTo(0, 60); // Scroll to the top of the page
    // ... other useEffect code ...
  }, []);

  const handleClick = () => {
    // Navigate to the "/info" route
    navigate('/info');
  };

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

      <div className="container">
        <div className="rectangle">
        <span className="MiddleContent">
          <h1>" </h1>
          <h1 style={{ color: '#38991C' }}> รักโลก? </h1>
          <h1> เริ่มต้นด้วยการลงทุน " </h1>
        </span>
        </div>
      </div>

      
    <div className="center-table">
    <table className="my-table">
      <thead>
        <tr>
        <th className="table-header">
          <div className="Component1">
            <h1>คุณเป็นเกษตรกรใช่ไหม ? </h1>
            <div className="rectangle2">
              <h2>คลิกที่นี่เลย ! </h2>
            </div>
          </div>
        </th>

        <th className="table-header">
          <div className="Component1">
            
            <div className="rectangle3" onClick={handleClick} >
            <h1>Car</h1>
          <h1 style={{ color: '#38991C' }}>Bond</h1>
          <h1> คืออะไร ?</h1>
            </div>
          </div>
        </th>

        </tr>
      </thead>
      <tbody></tbody>
    </table>
    </div>
    
    
    </div>
  );
}

export default App;