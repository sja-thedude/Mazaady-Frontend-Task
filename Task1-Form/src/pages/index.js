import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';

const IndexPage = () => {
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});

  useEffect(() => {
    fetchMainCategories();
  }, []);

  const fetchMainCategories = async () => {
    try {
      const response = await axios.get('https://staging.mazaady.com/api/v1/get_all_cats');
      setMainCategories(response.data);
    } catch (error) {
      console.error('Error fetching main categories:', error);
    }
  };

  const handleSubmit = (values) => {
    setSelectedValues(values);
  };

  return (
    <div>
      <h1 className="pt-6 md:p-8 text-center md:text-left space-y-4">Mazaady Portal</h1>
      <Form mainCategories={mainCategories} onSubmit={handleSubmit} />
      {Object.keys(selectedValues).length > 0 && (
        <div>
          <h2>Selected Values</h2>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(selectedValues).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
