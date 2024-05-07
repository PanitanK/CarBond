import React from 'react';
import { useState , useEffect } from 'react';

import HomeMode from './HomeComp';
import Active from './Active'
import Addplot from './Addplot'
import Credential from './Credential'
import Properties from './Properties'
import { db } from './Firebase';
import {  doc,setDoc, collection, getDocs } from 'firebase/firestore';

function ContentBoard({ mode ,userData,plotDocuments,UID, handleModeChange}) {

  const [ Currmode , setCurrmode] = useState(null);
  
  const uploadDataToPlotCollection = async (userId, data, address) => {
    try {
      const plotCollectionRef = collection(db, 'USERS', userId, 'PlotCollection');
      
      // Get the number of items in PlotCollection
      const snapshot = await getDocs(plotCollectionRef);
      const itemCount = snapshot.size;
      
      // Create a new document named Plot_No.X inside PlotCollection
      const newDocumentName = `Plot_No.${itemCount}`;
      const newDocumentRef = doc(plotCollectionRef, newDocumentName);
      
      // Set data and address fields in the new document
      await setDoc(newDocumentRef, { data, address });
      console.log('Data document added successfully:', newDocumentRef.id);
      setCurrmode("/option2")
      handleModeChange('/option2'); 
    } catch (error) {
      console.error('Error uploading data to PlotCollection:', error);
    }
  };

  const handleDataSubmit = (Data,Addr) =>{
    uploadDataToPlotCollection(UID,Data,Addr)
  }

  useEffect(() => {
    setCurrmode(mode); // Update CurrMode when mode changes
  }, [mode]);

  switch (Currmode) {
    case '/option1':
      return <HomeMode DataPackage={{userData , plotDocuments }} />;
    case '/option2':
      return <Active DataPackage={{ userData, plotDocuments }} />;
    case '/option3':
      return <Addplot  DataPackage={{userData , plotDocuments}} onSubmit={handleDataSubmit} />
      //return <Addplot  DataPackage={{userData , plotDocuments}} onSubmit={handleDataSubmit} />;
    case '/option4':
      return <Credential DataPackage={{userData , plotDocuments}}/>;
    case '/option5':
      return <Properties DataPackage={{userData , plotDocuments}}/>;


    default:
      return null; // Render null for unknown modes
  }
}

export default ContentBoard;
