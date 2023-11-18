import { Link } from "react-router-dom";
import Title from './image/logo/TitleCB.png';
import LOCKER from './image/svg/locker.svg';
import CSink from './image/Data/CSink.png';
import RainMap from './image/Data/RainMap.png';
import RubberTree from './image/Data/RubberTree.png';
import Rev from './image/Data/Rev.png';
import './css/App.css';
import MK2 from './image/logo/MK2.png';
import LineChart from './LineChart';
import LineChart2 from './LineChart2';
import { useNavigate } from 'react-router-dom';
function Info() {

  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to the "/info" route
    navigate('/Home' , { state: { userUID: "T8qpBOb5mkTsQUjagbq3UmwePMq2"} });
  };
/*
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
  */




  return (
    <div className="App">
      <div className="static-bar">
        <div className="left-content">
          <Link to="/">
            <img className="title-image" src={Title} alt="Title" />
          </Link>
        </div>
        <div className="green-box" onClick={handleClick}>
          <img src={LOCKER} alt="UGBN" className="Locker" />
          <h1 className="green-box-text">UGBN MEMBER</h1>
        </div>
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

      <div className="container2XE">
        <div className="rectangle5" style={{ lineHeight: '1.6' }}>
          <span className="MiddleContent2">
          <h1>เราผ่านจุด</h1>
          <h1 style={{ color: '#38991C' }}> สูงสุดของเราในปี 2010 </h1>
          <h1>มาแล้ว 13 ปี</h1>
          </span>
          <span className="MiddleContent2">
          <h1>ในปัจจุบัน</h1>
          <h1 > การยางไทยอยู่ในจุดอิ่มตัว</h1>
          </span>
          <span className="MiddleContent2">
          <h1>และเข้าสู่ </h1>
          <h1 style={{ color: '#38991C' }}>Point of Diminishing Return </h1>
          <h1> แปลว่า</h1>
          </span>
          
   
        </div>
      </div>

      <div className="container3" style={{ lineHeight: '1.2' }}>
        <span className="Content3">
        <h1>หากภาครัฐต้องการเพิ่มกำลังผลิตยาง</h1>
        <span className="MiddleContent3">
        <h1>แทนที่จะทำให้ </h1>
        <h1 style={{ color: '#38991C' }}>รายได้เพิ่มขึ้น </h1>
        </span>
        <span className="MiddleContent3">
        <h1>จะส่งผลตรงข้าม </h1>
        <h1 style={{ color: '#e68e13' }} >ทำให้ปริมาณยางในตลาดมีมาก </h1>
        </span>
        <span className="MiddleContent3">
        <h1>ทำให้ราคายาง </h1>
        <h1 style={{ color: '#ff0000' }} >ตกยิ่งกว่าเดิม</h1>
        </span>
        <div className="container3Chart ">
      
        <div className="chart-container">
          <LineChart2/>
        </div>
      </div>

        </span>
      </div>

      <div className="container2Plus">
        <div className="rectangle5" style={{ lineHeight: '0.6' }}>
          <span className="MiddleContent3" style={{paddingTop:'7.5vh'}}>
          <h1 style={{ color: '#38991C' }} >วิธีแก้ปัญหาตรงไปตรงมา </h1>
          <h1 >คือ </h1>
          <h1 style={{ color: '#38991C' }} >ลดกำลังการผลิตยาง  </h1>
          </span>
          <span className="MiddleContent3">
          <h1>คำพูดนี้เหมือนจะง่ายแต่จะมีผลกระทบต่อสวนยางที่ได้ลงทุนไปแล้ว</h1>
          </span>
          <span className="MiddleContent3">
          <h1>คงจะไม่มีใครยอมขาดทุนเว้นแต่จะมีทาง </h1>
          <h1 style={{ color: '#38991C' }} >ชดเชยเงินส่วนต่าง</h1>
          </span>

        </div>
      </div>

      <div className="container3" style={{ lineHeight: '1.5' }}>
        <h1>ในปัจจุบัน สหภาพยุโรปได้ออกมาตรการควบคุมการปลดปล่อย CO2 <br></br>
         แก่กิจการที่มี Carbon Emission ให้ลดการปลดปล่อย หากทำไม่ได้ให้หาแหล่ง<br></br>
        ที่สามารถทำ Carbon Offset ได้ 
        โดยจะต้องแลกเปลี่ยนในรูปของ </h1>
        <h1 style={{ color: '#38991C' }} >" Carbon Credit "</h1>
        <h1>นี้เป็นการยกผลประโยชน์ให้แก่ประเทศที่มี Carbon Sink Potential</h1>
      </div>

      <div className="container2Plus2">
        <div className="ShiftLeft">
        <div className="rectangle5">

          <h1 style={{ color: '#38991C' }} >Carbon Sink Potential Map</h1>
          <img src={CSink} alt="UGBN" className="CSink" />

        <div className="Southern">
          <img src={RainMap} alt="UGBN" className="RainMap" />
        <div className="SouthTextBox">


        
        <h1 style={{ color: '#38991C' }}  >ในการกักเก็บ CO2 พืชจำเป็นจะต้องใช้ </h1>
        <span className="MiddleContent3">
        <h1>CO2 + </h1>
        <h1 style={{ color: '#00BFFC' }}> H2O </h1>
        <h1>+ </h1>
        <h1 style={{ color: '#FEBA0D' }}>Sunlight </h1>
        <h1> → Organic Compound</h1>
        </span>
        <div style={{ lineHeight: '0.2', marginTop:'5vh'}} >
        <span className="MiddleContent3">
          <h1>ภาคใต้มีพื้นที่คิดที่คิดเป็น</h1>
          <h1 style={{ color: '#00BFFC' }} > 14% </h1>
          <h1>ของพื้นที่ประเทศไทย</h1>
        </span>

        <span className="MiddleContent3">
   
          <h1>แต่รองรับ </h1>
          <h1 style={{ color: '#00BFFC' }} >ปริมาณน้ำฝนเกิน 50 % </h1>
          <h1>ของทั้งประเทศ</h1>
        </span>
        </div>

        <span className="MiddleContent3" style={{ lineHeight: '0.5', marginTop:'5vh'}}>
   
          <h1>และมี </h1>
          <h1 style={{ color: '#FEBA0D' }} >แสงแดด </h1>
          <h1>เฉลี่ยทั้งปี </h1>
      
          <h1 style={{ color: '#FEBA0D' }} >11 ชม 50 นาที </h1>
          <h1>ในหนึ่งวัน </h1>
        </span>

        <span className="MiddleContent3" style={{ lineHeight: '0.5', marginTop:'5vh'}}>
   
          <h1>แล้วภาคใต้มีอะไรมากที่สุดหล่ะ? </h1>
          <h1 style={{ color: '#38991C' }}  >พืชเศรษฐกิจ </h1>
          <h1>อะไรมากที่สุดหล่ะ?</h1>
  
        </span>
        </div>
        </div>
        
        </div>

      </div>
      </div>

      <div className="container3X">
        <img src={RubberTree} alt="UGBN" className="RubberTree" />

       
      <div className="Para">
        <div className="ParaText">
          <span className="MiddleContent3" style={{ lineHeight: '0.5', marginTop:'5vh'}}>
          <h1  style={{ color: '#38991C' ,fontStyle:'italic'}}   >Hevea brasiliensis </h1>
            <h1>หรือ ต้นยางพารา</h1>
          </span>

          <div style={{ lineHeight: '0', marginTop:'5vh'}}>
          <span className="MiddleContent3" style={{ lineHeight: '0.5', marginTop:'5vh'}}>
            <h1>  ในประเทศไทยปลูกต้นยางอยู่ </h1>
            <h1 style={{ color: '#38991C' }}  >   22 ล้านไร่ </h1>
            
          </span>
          <h3 >( สำนักงานปลัดกระทรวงเกษตรและสหกรณ์ 2023 )</h3>
        </div>

      <div className="TableBox">
        <div className="Table">
          <div className="TableRow">
            <div className="TableColumn">
              {/* First FigureBox */}
              <div className="FigureBox">
                <h1 className="FigureHeader" style={{ color: "black" }}>ผลผลิตทั้งประเทศ</h1>
                <h1 className="FigureValue" style={{ fontSize: "80px", lineHeight: '0' }}>5</h1>
                <h1 className="FigureDescription" style={{ color: "black", fontSize: "30px" }}>ล้านตัน/ปี</h1>
              </div>
            </div>

            <div className="TableColumn2">
              {/* Second FigureBox */}
              <div className="FigureBox2">
                <h1 className="FigureHeader" style={{ color: "black" }}>CO2 Absorption</h1>
                <h1 className="FigureValue" style={{ fontSize: "80px", lineHeight: '0' }}>28.6</h1>
                <h1 className="FigureDescription" style={{ color: "black", fontSize: "30px" }}>ล้านตัน/ปี</h1>
              </div>
            </div>
          </div>
        </div>
        </div>

        </div>
        
      </div>
    </div>
    


      <div className="container2Plus3">
        <div className="rectangle5">
        <img src={Rev} alt="UGBN" className="Rev" />
          
     
   
        </div>
      </div>

      <div className="container2Plus4">
        <div className="rectangle5x">
          <h2>เรายังสามารถทำได้ดีกว่านี้ นำ Carbon Credit ไทยเข้าสู่ตลาดสากล</h2>
          <h2>และพัฒนาความสามารถในการดูดซับ CO2 ของสวนยางกัน</h2>
          <h1>เรามาตามหาโอกาสใหม่ๆ ด้วยกันไหม </h1>
          
        </div>
       
        <div className="rectangle2x" onClick={handleClick} >
            <h3>คลิกที่นี่เลย !</h3>
        </div>
        

        
      </div>


    
    </div>
  );
}

export default Info;