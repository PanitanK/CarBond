import React from 'react';
import { useState , useEffect } from 'react';

import HomeMode from './HomeComp';
import Active from './Active'
import Addplot from './Addplot'
import Credential from './Credential'
import Properties from './Properties'
import { db } from './Firebase';
import {  addDoc, collection } from 'firebase/firestore';

function ContentBoard({ mode ,userData,plotDocuments,UID}) {
  const [ Intermediate , setIntermediate] = useState(null);
  const [ Currmode , setCurrmode] = useState(null);
  const uploadDataToPlotCollection = async (userId, data, address) => {
    try {
      // Create Plot Collection (subcollection) under the user's document
      const plotCollectionRef = collection(db, 'USERS', userId, 'PlotCollection');
      
      // Add Data document to PlotCollection
      const dataDocRef = await addDoc(plotCollectionRef, data);
      console.log('Data document added successfully:', dataDocRef.id);
  
      // Add Address document to PlotCollection
      const addressDocRef = await addDoc(plotCollectionRef, address);
      console.log('Address document added successfully:', addressDocRef.id);
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
      return <HomeMode DataPackage={{userData , plotDocuments,Intermediate }} />;
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
