import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomResult = ({ result }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/detail/${result.id.raw}`); // Adjust based on your document ID field
  };

  console.log(result); // For debugging

  return (
    <div 
      className="result-card border border-gray-300 p-4 rounded-md cursor-pointer"
      onClick={handleClick}
    >
      
    </div>
  );
};

export default CustomResult;
