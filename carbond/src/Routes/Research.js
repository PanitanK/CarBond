import React from 'react';
import './css/Comp.css';
import TGO from './image/Insitute/TGO.png'
import RAOT from './image/Insitute/RAOT.png'
import PSU from './image/Insitute/PSU.png'
import WU from './image/Insitute/WU.png'
const Research = () => {
  return (
    <div className='BigBox3'>
      <div className='Cell'>
        <div className='Subbox2'>
          <img src={TGO} alt="UGBN" className="Partner" />
        </div>
        
        <div className='Subbox2'>
        <img src={RAOT} alt="UGBN" className="Partner" />
        </div>
      </div>
      <div className='Cell'>
        <div className='Subbox2'>
        <img src={PSU} alt="UGBN" className="Partner" />
        </div>
        <div className='Subbox2'>
        <img src={WU} alt="UGBN" className="Partner" />
        </div>
      </div>
    </div>
  );
};

export default Research;
