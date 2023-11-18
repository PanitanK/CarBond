import React from 'react';
import { useState , useEffect } from 'react';

import HomeMode from './HomeComp';
import ReqMode from './Req'
import ResearchMode from './Research'
import PartnerMode from './Partners'
import MarketMode from './Market'

function ContentBoard({ mode ,userData,plotDocuments}) {
  const [ Intermediate , setIntermediate] = useState(null);
  const [ Currmode , setCurrmode] = useState(null);
  const handleDataSubmit = (data) => {
    setIntermediate(data);
    console.log("Intermediate set as")
    console.log(data)
    setCurrmode('/option1')
    console.log("Curr Mode is ")
    console.log(mode)
  };

  useEffect(() => {
    setCurrmode(mode); // Update CurrMode when mode changes
  }, [mode]);

  switch (Currmode) {
    case '/option1':
      return <HomeMode DataPackage={{userData , plotDocuments,Intermediate }} />;
    case '/option2':
      return <ReqMode DataPackage={{ userData, plotDocuments }} onSubmit={handleDataSubmit} />;
    case '/option3':
      return <ResearchMode  DataPackage={{userData , plotDocuments}}/>;
    case '/option4':
      return <PartnerMode DataPackage={{userData , plotDocuments}}/>;
    case '/option5':
      return <MarketMode DataPackage={{userData , plotDocuments}}/>;


    default:
      return null; // Render null for unknown modes
  }
}

export default ContentBoard;
