import React from 'react';
import './css/Comp.css';
import { useState } from 'react';

const AddPlot = () => {
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
    <form onSubmit={handleSubmit} className="AddplotContainer">
    <div className="label-input-container">
      <label htmlFor="plotId">Plot ID:</label>
      <input
        type="text"
        id="plotId"
        name="plotId"
        value={formData.plotId}
        onChange={handleChange}
        required
      />
    </div>
    <div className="label-input-container">
      <label htmlFor="plotName">Plot Name:</label>
      <input
        type="text"
        id="plotName"
        name="plotName"
        value={formData.plotName}
        onChange={handleChange}
        required
      />
    </div>
    {/* Add other input fields similarly */}
    <button type="submit">Submit</button>
  </form>
  );
};

export default AddPlot;