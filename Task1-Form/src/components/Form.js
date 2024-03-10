import React, { useState, useEffect } from 'react';
import axios from 'axios';
import privateKey from './../privateKey'; // Importing the private key

const Form = ({ mainCategories, onSubmit }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [processTypes, setProcessTypes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [transmissionTypes, setTransmissionTypes] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});
  const [additionalProcessValue, setAdditionalProcessValue] = useState('');

   useEffect(() => {
    // Fetch process types
    axios.get('https://staging.mazaady.com/api/v1/get-options-child/53', {
      headers: {
        'Private-Key': privateKey // Include private key in headers
      }
    })
      .then(response => setProcessTypes(response.data))
      .catch(error => console.error('Error fetching process types:', error));

    // Fetch brands
    axios.get('https://staging.mazaady.com/api/v1/get-options-child/54', {
      headers: {
        'Private-Key': privateKey // Include private key in headers
      }
    })
.then(response => {
      // Check if response data is an array
      if (Array.isArray(response.data)) {
        setBrands(response.data);
      } else {
        // If response data is not an array, handle the error gracefully
        console.error('Error fetching brands: Response data is not an array');
        // You can set brands to an empty array or handle the error in another way
        setBrands([]);
      }
    })
    .catch(error => console.error('Error fetching brands:', error));

    // Fetch transmission types
    axios.get('https://staging.mazaady.com/api/v1/get-options-child/55', {
      headers: {
        'Private-Key': privateKey // Include private key in headers
      }
    })
      .then(response => setTransmissionTypes(response.data))
      .catch(error => console.error('Error fetching transmission types:', error));
  }, []);

  const handleMainCategoryChange = async (categoryId) => {
    try {
      const response = await axios.get(`https://staging.mazaady.com/api/v1/properties?cat=${categoryId}`);
      setSubCategories(response.data);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  const handlePropertyChange = (propertyName, propertyValue) => {
    setSelectedValues(prevState => ({
      ...prevState,
      [propertyName]: propertyValue
    }));

    // Clear additional process value when process type changes
    if (propertyName === 'Process Type') {
      setAdditionalProcessValue('');
    }
  };

  const handleAdditionalProcessChange = (event) => {
    setAdditionalProcessValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if both main category and sub category are selected
    if (!selectedValues['Main Category'] || !selectedValues['Sub Category']) {
    alert('Please select both Main Category and Sub Category.');
    return;
  }
  
  // If validation passes, proceed with form submission
    onSubmit({
      ...selectedValues,
      ...(additionalProcessValue && { 'Additional Process': additionalProcessValue })
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='main'>
        <label className="m-3">Main Category:</label>
        <select onChange={(e) => handleMainCategoryChange(e.target.value)}>
          <option value="">Select Main Category</option>
          {mainCategories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className='sub'>
        <label className="m-3">Sub Category:</label>
        <select onChange={(e) => handlePropertyChange('Sub Category', e.target.value)}>
          <option value="">Select Sub Category</option>
          {subCategories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className='process'>
        <label className="m-3">Process Type:</label>
        <select onChange={(e) => handlePropertyChange('Process Type', e.target.value)}>
          <option value="">Select Process Type</option>
          {processTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      {/* Render input field only if the selected process type is 'Custom' */}
      {selectedValues['Process Type'] === 'Custom' && (
        <div className='custom'>
          <label className="m-3">Custom Process:</label>
          <input
            type="text"
            value={additionalProcessValue}
            onChange={handleAdditionalProcessChange}
          />
        </div>
      )}
      <div className='brand'>
        <label className="m-3">Brand:</label>
        <select onChange={(e) => handlePropertyChange('Brand', e.target.value)}>
          <option value="">Select Brand</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>
      <div className='transmission'>
        <label className="m-3">Transmission Type:</label>
        <select onChange={(e) => handlePropertyChange('Transmission Type', e.target.value)}>
          <option value="">Select Transmission Type</option>
          {transmissionTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <button className="m-8 pl-4" type="submit">Submit</button>
    </form>
  );
};

export default Form;