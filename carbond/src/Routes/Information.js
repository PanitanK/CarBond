import { Link } from "react-router-dom";
import Title from './image/logo/TitleCB.png';
import LOCKER from './image/svg/locker.svg';
import CSink from './image/Data/CSink.png';
import RainMap from './image/Data/RainMap.png';
import RubberTree from './image/Data/RubberTree.png';
import './css/App.css';
import MK2 from './image/logo/MK2.png';
import LineChart from './LineChart';
import { useNavigate } from 'react-router-dom';
function Info() {

  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to the "/info" route
    navigate('/Home' , { state: { userUID: "T8qpBOb5mkTsQUjagbq3UmwePMq2"} });
  };

  const RubberRevDataset = {
    labels: [
      '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2016',
      '2017', '2018', '2019', '2020', '2021', '2022'
    ],
    datasets: [
      {
        label: 'Expense',
        data: [3706, 4330, 4908, 4672, 4757, 6772, 6294, 6349, 9121, 10188, 11411, 13542, 10435, 20329, 11108],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Income',
        data: [5106, 5098, 4696, 5883, 14747, 14855, 10347, 5694, 8380, 10168, 12095, 13498, 11709, 17523, 12477],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };
  

  console.log(RubberRevDataset)


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

      <div className="container3Chart ">
        <h1>ประเทศไทยเป็นทั้งผู้ผลิตและส่งออกยางอันดับหนึ่งของโลกตั้งแต่ปี 1991</h1>
        <div className="chart-container">
          <LineChart />
        </div>
      </div>

      <div className="container2">
        <div className="rectangle5">

          <h1>ปีที่ดีที่สุดของเรา ( 2010 ) ได้ผ่านมาแล้ว 13 ปี </h1>
          <h1>ในปัจจุบันยางไทยอยู่ในจุดอิ่มตัวและเข้าสู่</h1>
          <h1>Point of Diminishing Return </h1>
   
        </div>
      </div>

      <div className="container3">
        <h1>หมายความว่า หากภาครัฐต้องการเพิ่มกำลังผลิตยาง</h1>
        <h1>แทนที่จะทำให้ได้รายได้เพิ่มขึ้น </h1>
        <h1>กลับกันจะทำให้ปริมาณยางในตลาดมีมาก </h1>
        <h1>ทำให้ราคายางตกยิ่งกว่าเดิม</h1>
      </div>

      <div className="container2Plus">
        <div className="rectangle5">

          <h1>วิธีแก้ปัญหาตรงไปตรงมา คือ ลดกำลังการผลิตยาง  </h1>
          <h1>คำพูดนี้เหมือนจะง่ายแต่จะมีผลกระทบต่อสวนยางที่ได้ลงทุนไปแล้ว</h1>
          <h1>คงจะไม่มีใครยอมขาดทุนเว้นแต่จะมีทาง ชดเชยเงินส่วนต่าง </h1>
   
        </div>
      </div>

      <div className="container3">
        <h1>ในปัจจุบัน สหภาพยุโรปได้ออกมาตรการควบคุมการปลดปล่อย CO2</h1>
        <h1> แก่กิจการที่มี Carbon Emission ให้ลดการปลดปล่อย หากทำไม่ได้ให้หาแหล่ง</h1>
        <h1>ที่สามารถทำ Carbon Offset ได้ </h1>
        <h1>โดยจะต้องแรกเปลี่ยนในรูปของ Carbon Credit</h1>
        <h1>นี้เป็นการยกผลประโยชน์ให้แก่ประเทศที่มี Carbon Sink Potential</h1>
      </div>

      <div className="container2Plus2">
        <div className="rectangle5">

          <h1>Carbon Sink Potential Map</h1>
          <img src={CSink} alt="UGBN" className="CSink" />

        <div className="Southern">
          <img src={RainMap} alt="UGBN" className="RainMap" />

          <h1>ในปัจจุบัน สหภาพยุโรปได้ออกมาตรการควบคุมการปลดปล่อย CO2</h1>
        <h1> แก่กิจการที่มี Carbon Emission ให้ลดการปลดปล่อย หากทำไม่ได้ให้หาแหล่ง</h1>
        <h1>ที่สามารถทำ Carbon Offset ได้ </h1>
        <h1>โดยจะต้องแรกเปลี่ยนในรูปของ Carbon Credit</h1>
        <h1>นี้เป็นการยกผลประโยชน์ให้แก่ประเทศที่มี Carbon Sink Potential</h1>
        </div>
      </div>
      </div>

      <div className="container3X">
      <img src={RubberTree} alt="UGBN" className="RubberTree" />
        <h1>ในปัจจุบัน สหภาพยุโรปได้ออกมาตรการควบคุมการปลดปล่อย CO2</h1>
        
      </div>

      <div className="container2Plus">
        <div className="rectangle5">

          <h1>ผลตอบแทนจาก Carbon Credit ต่อไร่</h1>
         
   
        </div>
      </div>

      <div className="container2Plus">
        <div className="rectangle5">

          <h1>เรายังสามารถทำได้ดีกว่านี้ นำ Carbon Credit ไทยเข้าสู่ตลาดสากล</h1>
          <h1>และพัฒนาความสามารถในการดูดซับ CO2 ของสวนยางกัน</h1>
          <h1>เรามาตามหาโอกาสใหม่ๆ ด้วยกันไหม </h1>
          <div className="rectangle2" onClick={handleClick} >
            <h1>คลิกที่นี่เลย !</h1>
       
            </div>
   
        </div>
      </div>


    
    </div>
  );
}

export default Info;