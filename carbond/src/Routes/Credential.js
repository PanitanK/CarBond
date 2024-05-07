import React, { useState } from 'react';
import './css/Comp.css';

const Credential = ({DataPackage,editCred}) => {
  const [formData, setFormData] = useState({
    /*plot_number: '' ,
    Name: '',
    address: '',
    sub_district: '',
    district: '',
    province: '',
    Area: '',
    latitude: '',
    longitude: '',*/
    planting_distance: '2.5x8'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData.planting_distance);
    editCred(formData.planting_distance)

  };


  //console.log(DataPackage.plotDocuments[DataPackage.index].address.subdistrict)
  return (
    <div className='CredFill'> 
    <h2 style={{marginBottom: "-4vh"}}>Plot Credential</h2>
    <div className="apple-form-container">
      
      <form onSubmit={handleSubmit} className='Appleform'>
        
        <div className='Applefilling'> 
         
      <label>Plot No.</label>
        <div className="apple-form-group">
          <input
            type="text"
            id="plot_number"
            name="plot_number"
            value={DataPackage.index}
            readOnly
          />
        </div>
        <label >Sub district</label>
        <div className="apple-form-group">
          
          <input
            type="text"
            id="Sub_district"
            name="Sub_district"
            value={DataPackage.plotDocuments[DataPackage.index].address.subdistrict}
         
            readOnly
          />
        </div>
        <label>District</label>
        <div className="apple-form-group">
          
          <input
            id="District"
            name="District"
            value={DataPackage.plotDocuments[DataPackage.index].address.district}
          
            readOnly
          />
        </div>
        <label>Province</label>
        <div className="apple-form-group">
          
          <input
            id="Province"
            name="Province"
            value={DataPackage.plotDocuments[DataPackage.index].address.province}
            readOnly
    
          />
        </div>
        
       
        
        <button className='Applebutton'>EDIT</button>
        </div>

        <div className='Applefilling'>  
      <label>Name</label>
        <div className="apple-form-group">
          <input
            type="text"
            id="Name"
            name="Name"
            value={DataPackage.plotDocuments[DataPackage.index].address.subdistrict}
            readOnly

          />
        </div>
        <label >Location</label>
        <div className="apple-form-group">
          
          <input
            type="text"
            id="Location"
            name="Location"
            value={"lat " + DataPackage.plotDocuments[DataPackage.index].data.PlotData.PlotCenter[0].toFixed(4) + ", lng " +
             DataPackage.plotDocuments[DataPackage.index].data.PlotData.PlotCenter[1].toFixed(4) }
            readOnly
    
          />
        </div>
        <label>Area</label>
        <div className="apple-form-group">
          
          <input
            id="Area"
            name="Area"
            value={DataPackage.plotDocuments[DataPackage.index].data.PlotData.Area.toFixed(2) + " Rai"} 
            readOnly
    
          />
        </div>

        <label style={{ color: 'green',  fontWeight: 'bold'}}>Planting Distance</label>
        <div className="apple-form-group">
          
          <input
            type='text'
            id="planting_distance"
            name="planting_distance"
            value={formData.planting_distance}
            onChange={handleChange}

          />
        </div>
       
    
        </div>

      </form>
    </div>
    </div>
  );
};

export default Credential;
