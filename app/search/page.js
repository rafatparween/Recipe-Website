'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MealCategories = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        console.log('Fetched categories:', response.data.categories); // Debugging
        setCategories(response.data.categories);
        setFilteredCategories(response.data.categories);
      })
      .catch(error => {
        console.error('Error fetching the categories:', error);
      });
  }, []);

  useEffect(() => {
    if (searchClicked) {
      if (searchTerm) {
        console.log('Filtering categories with searchTerm:', searchTerm); // Debugging
        setFilteredCategories(
          categories.filter(category =>
            category.strCategory && category.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } else {
        setFilteredCategories(categories);
      }
      setSearchClicked(false); // Reset searchClicked
    }
  }, [searchClicked, searchTerm, categories]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  return (
    <div className="container mx-auto p-24">
      <div className="mb-4 flex">
        <input 
          type="text" 
          placeholder="Search here" 
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border rounded flex-grow"
        />
        <button 
          onClick={handleSearchClick}
          className="p-2 ml-2 bg-blue-500 text-white rounded"
        >
          Go
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map(category => (
          <div key={category.idCategory} className="border p-4 rounded shadow-sm">
            <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-48 object-cover mb-2 rounded" />
            <h2 className="text-xl font-bold">{category.strCategory}</h2>
            <p>{category.strCategoryDescription.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealCategories;
