import React, { useState } from 'react';
import './css/Comp.css';

const Credential = ({DataPackage}) => {
  const [formData, setFormData] = useState({
    plot_number: '',
    Name: '',
    address: '',
    sub_district: '',
    district: '',
    province: '',
    Area: '',
    latitude: '',
    longitude: '',
    planting_distance: '',
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
    // Perform form submission logic here
    console.log('Form submitted:', formData);
  };
  return (
    <div className='CredFill'> 
    <h3>Plot Credential</h3>
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

export default Credential;
