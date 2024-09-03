import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import labIcon from './lab.svg';
import mapIcon from './map.svg';

const Detail = () => {
  const { id } = useParams();
  const [medicament, setMedicament] = useState(null);

  useEffect(() => {
    const fetchMedicament = async () => {
      try {
        const response = await axios.get(`https://localhost:9200/medicine-index-w-autocomplete/_doc/${id}`, {
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
      <div className="hero bg-[#edf0ff]">
        <div className="container mx-auto">
          <div className="cont1 text-center w-4/5 mx-auto pt-5 pb-14">
            <h2 className="text-4xl font-bold w-full text-[#00157c] pb-4 pt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {medicament['Nom Commercial']}
            </h2>
            <p className="text-lg font-thin text-[#000625] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              COMMERCIALISÉ
            </p>
          </div>


        </div>
      </div>
      <div className="herotwo bg-transparent relative">
        <div className="container mx-auto text-center mt-3">
          <ul className="flex justify-center gap-2 cont2 text-center w-3/5 mx-auto text-white bg-transparent -mt-9 font-poppins  text-sm">
            <li className="bg-[#d2d9ff] py-3 px-4 flex items-center rounded-md shadow">
              <img src={labIcon} alt="Laboratory" className="w-5 h-5 mr-2" />
              {medicament['labo']}
            </li>
            <li className="bg-[#d2d9ff] py-3 px-4 flex items-center rounded-md shadow ">
              <img src={mapIcon} alt="Country" className="w-5 h-5 mr-2" />
              {medicament['Pays']}
            </li>
          </ul>
          <div className="cont3 moredetails text-left w-3/5 mx-auto pt-5 pb-8">
            <div className="box my-10">
            <h3 className="relative text-3xl font-bold text-[#4a4a4a] inline-block mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
  
  <span className="bg-gradient-to-r from-[#D1D7FF] to-[#D1D7FF] bg-no-repeat bg-[length:100%_40%] bg-bottom mb-2 ">
   Fiche médicament
 </span>
</h3>
<div className="font-normal text-[#171A1F] overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
    <tbody>
      {[
        { label: 'Classe pharmaceutique', value: medicament['cpharmaco'] },
        { label: 'Classe thérapeutique', value: medicament['ctherapeutique'] },
        { label: 'DCI', value: medicament['dci'] },
        { label: 'Code DCI', value: medicament['Code DCI'] },
        { label: 'Forme', value: medicament['Forme'] },
        { label: 'Dosage', value: medicament['Dosage'] },
        { label: 'Packaging', value: medicament['Conditionnement'] },
        { label: 'Type', value: medicament['Type'] },
        { label: 'Tarif de référence', value: medicament['Tarif de référence'] },
      ].map((item) => (
        <tr key={item.label} className="border-b border-gray-200">
          <td className="px-4 py-2 font-bold text-gray-700">{item.label}</td>
          <td className="px-4 py-2">{item.value || 'N/A'}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>








              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
