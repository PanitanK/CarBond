import React from 'react';
import './css/Comp.css';
import RAOT from './image/Insitute/RAOT.png'
import FTI from './image/Partner/FTI.png'
import TEI from './image/Partner/TEI.png'
import TGO from './image/Partner/TGO.png'
const Partner = () => {
  return (
    <div className='BigBox3'>
      <div className='Cell'>
        <div className='Subbox2'>
        <img src={TGO} alt="UGBN" className="Partner" />
        </div>
        <div className='Subbox2'></div>
        <div className='Subbox2'>
        <img src={RAOT} alt="UGBN" className="Partner" />
        </div>
      </div>
      <div className='Cell'>
        
        <div className='Subbox2'>
        <img src={TEI} alt="UGBN" className="Partner" />
        </div>
    
        
        <div className='Subbox2'>
        <img src={FTI} alt="UGBN" className="Partner" />
        </div>
      </div>
      
    </div>
  );
};

export default Partner;
