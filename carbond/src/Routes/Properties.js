import React from 'react';
import './css/Comp.css';
import { useState } from 'react';

const Properties = () => {
  const [formData, setFormData] = useState({
    plotId: '',
    plotName: '',
    plotSize: '',
    plantingDistance: '',
    latitude: '',
    longitude: '',
    sequenceNumber: '',
    treeSpecies: '',
    ageYears: '',
    dbhCm: '',
    heightMeters: '',
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
    // Handle form submission here, you can access form data via formData
    console.log(formData);
    // Example: You can send formData to an API or perform other actions
  };

  return (
    <div className='CredFill'> 
    <h3>Plot Properties</h3>
    <div className="apple-form-container">
      
      <form onSubmit={handleSubmit} className='Appleform'>
        
        <div className='Applefilling'> 
         
      <label>Plot No.</label>
        <div className="apple-form-group">
          <input
            type="text"
            id="plot_number"
            name="plot_number"
            value={formData.plot_number}
            onChange={handleChange}

          />
        </div>
        <label >Sub district</label>
        <div className="apple-form-group">
          
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
    
          />
        </div>
        <label>District</label>
        <div className="apple-form-group">
          
          <input
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
    
          />
        </div>
        <label>Province</label>
        <div className="apple-form-group">
          
          <input
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
    
          />
        </div>
        
       
        
        <button className='Applebutton'>Edit</button>
        </div>

        <div className='Applefilling'>  
      <label>Name</label>
        <div className="apple-form-group">
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}

          />
        </div>
        <label >Location</label>
        <div className="apple-form-group">
          
          <input
            type="text"
            id="Location"
            name="Location"
            value={formData.Location}
            onChange={handleChange}
    
          />
        </div>
        <label>Area</label>
        <div className="apple-form-group">
          
          <input
            id="Area"
            name="Area"
            value={formData.Area}
            onChange={handleChange}
    
          />
        </div>

        <label>Planting Distance</label>
        <div className="apple-form-group">
          
          <input
            id="Area"
            name="Area"
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

export default Properties;