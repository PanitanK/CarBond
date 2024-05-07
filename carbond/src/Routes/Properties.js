import React from 'react';
import './css/Comp.css';
import { useState } from 'react';

const Properties = ({DataPackage,editProp}) => {
  const [formData, setFormData] = useState({
    Weight:0,
    Percentage:'',
    Age:'',
    InputDate:''

    
  });

  const getCurrentMonthYear = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const currentDate = new Date();
    const monthIndex = currentDate.getMonth(); // Get the month index (0-11)
    const month = months[monthIndex]; // Get the month abbreviation from the array

    const year = currentDate.getFullYear(); // Get the full year (e.g., 2024)
  
    const formattedDate = `${month} ${year}`; // Combine month and year with a space in between
  
    const [Createddday, Createdmonth, Createdyear] = DataPackage.userData[0].Created_Date.split('/');
    console.log([parseInt(Createddday), parseInt(Createdmonth), parseInt(Createdyear)])
    console.log(monthIndex+1)
    console.log(year)
    const age = (((year - Createdyear) + ((Createdmonth - monthIndex+1)/12) ) + 8).toFixed(2)
    console.log(age)
    const CM = months[Createdmonth-1]
    const Created = CM +" "+Createdyear
    return {formattedDate , age , Created }; // Return the formatted date string (e.g., "Mar 2024")
  };


  const currentMonthYearAge = getCurrentMonthYear();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    formData.Age = parseFloat(currentMonthYearAge.age)
    formData.Percentage = parseFloat(formData.Percentage)
    formData.Weight = parseFloat(formData.Weight)
    formData.InputDate = currentMonthYearAge.formattedDate
    editProp(formData)
  };
  
  return (
    <div className='CredFill'> 
    <h2 style={{marginBottom: "-4vh"}}>Plot Properties</h2>
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
        <label>Created Date</label>
        <div className="apple-form-group">
          <input
            type="text"
            id="Date"
            name="Date"
            value={currentMonthYearAge.Created}
            readOnly
          />
        </div>
        <label style={{ color: 'green',  fontWeight: 'bold'}} >Fertilizer Nitrogen Percentage</label>
        <div className="apple-form-group">
          
        <select
          id="Percentage"
          name="Percentage"
          value={formData.Percentage}
          onChange={handleChange}
        >
          <option> </option>
          <option value="13">13 percent</option>
          <option value="15">15 percent</option>
          <option value="21">21 percent</option>
          <option value="27">27 percent</option>
          <option value="46">46 percent</option>
          required
        </select>
        </div>
       
        
       
        
        <button className='Applebutton'>ENTER</button>
        </div>

        <div className='Applefilling'>  
      <label>Month/Year</label>
        <div className="apple-form-group">
          <input
            type="text"
            id="Name"
            name="Name"
            value={currentMonthYearAge.formattedDate}
            readOnly
          />
        </div>
        <label>Age</label>
        <div className="apple-form-group">
          <input
            type="text"
            id="Age"
            name="Age"
            value={currentMonthYearAge.age}
            readOnly
          />
          <span> Years</span>
        </div>
        <label style={{ color: 'green',  fontWeight: 'bold'}} >Amount</label>
        <div className="apple-form-group">
          
        <input
          type="number"
          id="Weight"
          name="Weight"
          value={formData.Weight} // Set the input value to the numeric value only
          onChange={handleChange}
          min="0"
          required
        />
        <span> Kilograms</span>
        </div>
       

        
       
    
        </div>

      </form>
    </div>
    </div>
  );
};

export default Properties;