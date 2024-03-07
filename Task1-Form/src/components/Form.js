import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = ({ mainCategories, onSubmit }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [processTypes, setProcessTypes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [transmissionTypes, setTransmissionTypes] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});

  useEffect(() => {
    // Fetch process types
    axios.get('https://staging.mazaady.com/api/v1/get-options-child/53')
      .then(response => setProcessTypes(response.data))
      .catch(error => console.error('Error fetching process types:', error));

    // Fetch brands
    axios.get('https://staging.mazaady.com/api/v1/get-options-child/54')
      .then(response => setBrands(response.data))
      .catch(error => console.error('Error fetching brands:', error));

    // Fetch transmission types
    axios.get('https://staging.mazaady.com/api/v1/get-options-child/55')
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label class="m-3">Main Category:</label>
        <select onChange={(e) => handleMainCategoryChange(e.target.value)}>
          <option value="">Select Main Category</option>
          {mainCategories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label class="m-3">Sub Category:</label>
        <select onChange={(e) => handlePropertyChange('Sub Category', e.target.value)}>
          <option value="">Select Sub Category</option>
          {subCategories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label class="m-3">Process Type:</label>
        <select onChange={(e) => handlePropertyChange('Process Type', e.target.value)}>
          <option value="">Select Process Type</option>
          {processTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div>
        <label class="m-3">Brand:</label>
        <select onChange={(e) => handlePropertyChange('Brand', e.target.value)}>
          <option value="">Select Brand</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>
      <div>
        <label class="m-3" >Transmission Type:</label>
        <select onChange={(e) => handlePropertyChange('Transmission Type', e.target.value)}>
          <option value="">Select Transmission Type</option>
          {transmissionTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <button class="m-8 pl-4" type="submit">Submit</button>
    </form>
  );
};

export { Form };
