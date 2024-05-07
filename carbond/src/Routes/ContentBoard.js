import React from 'react';
import { useState , useEffect } from 'react';

import HomeMode from './HomeComp';
import Active from './Active'
import Addplot from './Addplot'
import Credential from './Credential'
import Properties from './Properties'
import { db } from './Firebase';
import { addDoc, doc,setDoc, collection, getDocs, updateDoc } from 'firebase/firestore';

function ContentBoard({ mode ,userData,plotDocuments,UID, handleModeChange}) {
  const [reports, setReports] = useState([]);
  const [ Currmode , setCurrmode] = useState(null);
  const [ index , setIndex] = useState(0);
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
      //console.log('Data document added successfully:', newDocumentRef.id);
      window.location.reload();
      

    } catch (error) {
      console.error('Error uploading data to PlotCollection:', error);
    }
  };

  const handleDataSubmit = (Data,Addr) =>{
    uploadDataToPlotCollection(UID,Data,Addr)
  }

  const onHomeClick = () => {
    //console.log("On Home Clicking")
    setCurrmode("/option3")
    handleModeChange('/option3'); 
  }
  const handleMapboxClick = (Input) => {
    //console.log("Index clicked in ContentBoard:", index);
    setCurrmode("/option2")
    handleModeChange('/option2'); 
    //console.log("Fetcting reports")
    fetchReports(Input+1)
    setIndex(Input+1)
  };

  const handleCredClick = () => {
    console.log("Index clicked in ContentBoard:", index);
    setCurrmode("/option4")
    handleModeChange('/option4'); 

  };

  const handlePropClick = () => {
    console.log("Index clicked in ContentBoard:", index);
    setCurrmode("/option5")
    handleModeChange('/option5'); 

  };

  const handleCredEdit = async (data) => {
    //console.log("Index clicked in ContentBoard:", index);
    //console.log(data)
    try {
      const plotCollectionRef = collection(db, 'USERS', UID, 'PlotCollection');
      const plotDocumentRef = doc(plotCollectionRef, `Plot_No.${index}`); // Reference to the specific document
  
      // Update the Planting_Distance field in the document
      await updateDoc(plotDocumentRef, {
        'data.PlotData.Planting_Distance': data
      });
  
      console.log('Planting Distance updated successfully.');
    } catch (error) {
      console.error('Error updating Planting Distance:', error);
    }
    

  };

  const handlePropAppend = async (data) => {
    //console.log("Index clicked in ContentBoard:", index);
    //console.log(data);
    
    // Create a reference to the "report" collection within the specific document
    const plotCollectionRef = collection(db, 'USERS', UID, 'PlotCollection');
    const plotDocumentRef = doc(plotCollectionRef, `Plot_No.${index}`); // Reference to the specific document
    const reportCollectionRef = collection(plotDocumentRef, 'Reports');
    
    // Add a new document to the "report" collection with your data
    addDoc(reportCollectionRef, data)
      .then((docRef) => {
        console.log('Document added to report collection with ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document to report collection:', error);
      });
      setCurrmode("/option2")
      handleModeChange('/option2'); 

  };

  const fetchReports = async () => {
    const plotCollectionRef = collection(db, 'USERS', UID, 'PlotCollection');
    const plotDocumentRef = doc(plotCollectionRef, `Plot_No.${index}`);
    const reportsCollectionRef = collection(plotDocumentRef, 'Reports'); // Reference to "Reports" collection

    //console.log(`Plot_No.${index}`)


    try {
      const querySnapshot = await getDocs(reportsCollectionRef);
      const fetchedReports = [];
      querySnapshot.forEach((doc) => {
        fetchedReports.push({ id: doc.id, ...doc.data() });
      });
      setReports(fetchedReports);
      console.log("Fetch Report Finish")


    } catch (error) {
      console.error('Error fetching documents from "Reports" collection:', error);
    }
  };

  //console.log("ihave reports")
  //console.log(reports)
  const handleExportPDF = () =>{
    console.log("Im PRINTING")
    const printWindow = window.open('/print', '_blank');
    printWindow.dataToPrint =  { userData, plotDocuments, index, reports }; // Pass the data as a property of the window object
  }
  useEffect(() => {
    setCurrmode(mode); // Update CurrMode when mode changes
  }, [mode],[fetchReports]);

  
  switch (Currmode) {
    case '/option1':
      return <HomeMode DataPackage={{ userData, plotDocuments }} submitHomeClick={onHomeClick} onMapboxClick={handleMapboxClick} />;
    case '/option2':
      if (index === 0) {
        return <HomeMode DataPackage={{ userData, plotDocuments }} submitHomeClick={onHomeClick} onMapboxClick={handleMapboxClick} />;
      }
      return <Active DataPackage={{ userData, plotDocuments, index, reports }} CredClick={handleCredClick} PropClick={handlePropClick} Export={handleExportPDF}/>;
    case '/option3':
      return <Addplot  DataPackage={{userData , plotDocuments}} onSubmit={handleDataSubmit} />;
    case '/option4':
      if (index === 0) {
        return <HomeMode DataPackage={{ userData, plotDocuments }} submitHomeClick={onHomeClick} onMapboxClick={handleMapboxClick} />;
      }
      return <Credential DataPackage={{userData , plotDocuments, index}} editCred={handleCredEdit}/>;
    case '/option5':
      if (index === 0) {
      return <HomeMode DataPackage={{ userData, plotDocuments }} submitHomeClick={onHomeClick} onMapboxClick={handleMapboxClick} />;
      }
      return <Properties DataPackage={{userData , plotDocuments, index}} editProp={handlePropAppend}/>;
    default:
      return <HomeMode DataPackage={{ userData, plotDocuments }} submitHomeClick={onHomeClick} onMapboxClick={handleMapboxClick} />;
  }
}

export default ContentBoard;
