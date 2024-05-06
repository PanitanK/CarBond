import React from 'react';
import { useState , useEffect } from 'react';

import HomeMode from './HomeComp';
import Active from './Active'
import Addplot from './Addplot'
import Credential from './Credential'
import Properties from './Properties'

function ContentBoard({ mode ,userData,plotDocuments}) {
  const [ Intermediate , setIntermediate] = useState(null);
  const [ Currmode , setCurrmode] = useState(null);
  const handleDataSubmit = (data) => {
    setIntermediate(data);
    /*console.log("Intermediate set as")
    console.log(data)*/
    setCurrmode('/option1')
    /*console.log("Curr Mode is ")
    console.log(mode)*/
  };

  useEffect(() => {
    setCurrmode(mode); // Update CurrMode when mode changes
  }, [mode]);

  switch (Currmode) {
    case '/option1':
      return <HomeMode DataPackage={{userData , plotDocuments,Intermediate }} />;
    case '/option2':
      return <Active DataPackage={{ userData, plotDocuments }} onSubmit={handleDataSubmit} />;
    case '/option3':
      return <Addplot  DataPackage={{userData , plotDocuments}}/>;
    case '/option4':
      return <Credential DataPackage={{userData , plotDocuments}}/>;
    case '/option5':
      return <Properties DataPackage={{userData , plotDocuments}}/>;


    default:
      return null; // Render null for unknown modes
  }
}

export default ContentBoard;
