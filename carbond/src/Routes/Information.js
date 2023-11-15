import { Link } from "react-router-dom";
import Title from './image/logo/TitleCB.png';
import LOCKER from './image/svg/locker.svg';
import './css/App.css';
import MK2 from './image/logo/MK2.png';


function info() {

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

      <div className="container2">
        <div className="rectangle5">
        <img className="title-image2" src={MK2} alt="Title" />
        <span className="MiddleContent2">
        
          <h1>เราคือ </h1>
          <h1 style={{ color: '#38991C' }}>One Stop Service</h1>
        </span>

        <span className="MiddleContent2">
          <h1>สำหรับ </h1>
          <h1 style={{ color: '#38991C' }}>ชาวสวนยาง </h1>
          <h1>ที่ต้องการจะก้าว </h1>
        </span>

        <span className="MiddleContent2">
          <h1>เข้าสู่ตลาด </h1>
          <h1 style={{ color: '#38991C' }}>Carbon Credit</h1>
        </span>

        </div>
      </div>

    
    
    </div>
  );
}

export default info;