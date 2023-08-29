import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataManagement = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    // Add other properties as needed based on your data structure
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the server
    axios.get('http://localhost:3000/contact')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // POST request to add data
    axios.post('http://localhost:3000/contact', formData)
      .then((response) => {
        console.log('Data added successfully:', response.data);
        // Fetch the updated data from the server
        axios.get('http://localhost:3000/contact')
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      })
      .catch((error) => {
        console.error('Error adding data:', error);
      });

    // Clear form data after submission
    setFormData({
      title: '',
      description: '',
      // Add other properties as needed based on your data structure
    });
  };

  return (
    <div>
      <h1>Data Management</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <button type="submit">Add Data</button>
      </form>
      <h2>Data from JSON Server:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Title:</strong> {item.title}
            <br />
            <strong>Description:</strong> {item.description}
            {/* Add other properties here based on your data structure */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataManagement;
