import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Detail = () => {
  const { id } = useParams();
  const [medicament, setMedicament] = useState(null);

  useEffect(() => {
    const fetchMedicament = async () => {
      try {
        const response = await axios.get(`https://localhost:9200/medicine-index/_doc/${id}`, {
          headers: {
            'Authorization': 'Basic ZWxhc3RpYzpuX1d5Z3JXVnVqUU1pZTY1emdIdw==', 
            'Content-Type': 'application/json' 
          }
        });
        setMedicament(response.data._source); 
      } catch (error) {
        console.error('Error fetching medicament details:', error);
      }
    };

    fetchMedicament();
  }, [id]);

  if (!medicament) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="break h-16"></div>
      <div className="hero bg-[#F3F4F6]">
        <div className="container mx-auto">
          <div className="cont1 text-center w-4/5 mx-auto pt-5 pb-14">
            <h2 className="text-5xl font-bold w-full">{medicament['Nom Commercial']}</h2>
            <p className="text-lg font-semibold mt-2">COMMERCIALISÉ</p>
          </div>
        </div>
      </div>
      <div className="herotwo bg-[#F8F9FA]">
        <div className="container mx-auto text-center">
          <ul className="flex flex-wrap gap-1 cont2 relative bottom-6 text-center w-3/5 mx-auto text-white bg-[#fff]">
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">{medicament['labo']}</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">{medicament['cpharmaco']}</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">{medicament['ctherapeutique']}</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">{medicament['dci']}</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">{medicament['Code DCI']}</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">{medicament['Forme']}</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">{medicament['Dosage']}</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">{medicament['Conditionnement']}</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">{medicament['Type']}</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">{medicament['Pays']}</li>
            <li className="bg-[#565E6D] py-3 text-nowrap px-2">{medicament['Tarif de référence']}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
