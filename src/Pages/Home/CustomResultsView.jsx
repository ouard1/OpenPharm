import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomResult = ({ result }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/detail/${result.id.raw}`); 
  };

  console.log(result); 

  return (
    <div 
      className="result-card border border-gray-300 p-4 rounded-md cursor-pointer"
      onClick={handleClick}

    >
        <h3 className="text-lg font-bold">
        {result['Nom Commercial'].raw}
      </h3> 
      
    </div>
  );
};

export default CustomResult;
