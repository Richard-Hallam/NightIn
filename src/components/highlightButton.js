import React, { useState } from 'react';
import '../styles/highlightButton.css';

const HighlightButton = ({ categoryId }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  
    const toggleSelectionAndHandleClick = () => {
      const categoryIndex = selectedCategories.indexOf(categoryId);
      if (categoryIndex !== -1) {
        const updatedCategories = [...selectedCategories];
        updatedCategories.splice(categoryIndex, 1);
        setSelectedCategories(updatedCategories);
      } else {
        setSelectedCategories([...selectedCategories, categoryId]);
      }
  
      handleButtonClick(categoryId);
    };
  
    const handleButtonClick = () => {
      console.log(`Handling click for category ID: ${categoryId}`);
    
    };
  
   
  };
  
  export default HighlightButton;