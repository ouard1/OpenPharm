import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="break h-16"></div>
      <div className="hero bg-[#F3F4F6]">
        <div className="container mx-auto">
          <div className="cont1 text-center w-4/5 mx-auto pt-5 pb-16">
            <h2 className="text-5xl font-bold w-full">Recherchez votre medicament </h2>
            <p className="text-lg font-semibold">
              -Possibility of adding a slogan -
            </p>
          </div>
        </div>
      </div>
      <div className="herotwo bg-[#F8F9FA]">
        <div className="container mx-auto text-center">
          <div className="cont2 relative bottom-10 text-center w-3/5 mx-auto pt-5 pb-8 px-10 bg-[#fff]">
            <input type="text" className="border-[#C1B9ED] border w-full px-3 py-3 focus:border-[#565E6D] outline-none" placeholder="Entrez le nom du médicament à rechercher "/>
            <p className="text-left mt-3 text-sm text-[#727477]">Rechercher par lettre</p>
          </div>
          <h3 className="text-xl font-semibold">334 results found on aspirin</h3>
          <div className="cont3 moredetails text-left w-3/5 mx-auto pt-5 pb-8">
            <div className="box">
              <div className="block ml-2 mb-1 text-sm font-semibold ">EXACT MATCHES</div>
              <div className="font-normal text-[#8D8F91] bg-[#fff] border-[#E3E6EA] border w-full px-3 py-1">
                <p>Aspirin (RX/OTC)</p>
              </div>
            </div>
            <div className="box mt-5">
              <div className="block ml-2 mb-1 text-sm font-semibold ">MATCHES CONTAINING ASPIRIN</div>
              <div className="font-normal text-[#8D8F91] bg-[#fff] border-[#E3E6EA] border w-full px-3 py-1">
                <p>Acetaminophen Non Aspirin Tablet (OTC)</p>
              </div>
            </div>
            <div className="box mt-5">
              <div className="block ml-2 mb-1 text-sm font-semibold ">Adult Aspirin Ec Low Strength Tablet, Delayed Release (Enteric Coated) (OTC)</div>
              <div className="font-normal text-[#8D8F91] bg-[#fff] border-[#E3E6EA] border w-full px-3 py-1">
                <p>Adult Aspirin Regimen (OTC)</p>
              </div>
            </div>
            <div className="box mt-5">
              <div className="block ml-2 mb-1 text-sm font-semibold ">Adult Aspirin Tablet (OTC)</div>
              <div className="font-normal text-[#8D8F91] bg-[#fff] border-[#E3E6EA] border w-full px-3 py-1">
                <p>Adult Aspirin Tablet, Chewable (OTC)</p>
              </div>
            </div>
            <div className="box mt-5">
              <div className="block ml-2 mb-1 text-sm font-semibold ">Adult Low Dose Aspirin Ec (OTC)</div>
              <div className="font-normal text-[#8D8F91] bg-[#fff] border-[#E3E6EA] border w-full px-3 py-1">
                <p>Albertsons Aspirin Tablet (RX/OTC)</p>
              </div>
            </div>
            <div className="box mt-5">
              <div className="block ml-2 mb-1 text-sm font-semibold ">Albertsons Childrens Aspirin Tablet, Chewable (RX/OTC)</div>
              <div className="font-normal text-[#8D8F91] bg-[#fff] border-[#E3E6EA] border w-full px-3 py-1">
                <p>Albertsons Ec Aspirin Tablet, Delayed Release (Enteric Coated) (RX/OTC)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="changepages text-center">
        <div className="box p-24 flex gap-2 justify-center items-center">
          <button><FontAwesomeIcon icon={faChevronLeft} className="text-[#565E6D] mr-4" /></button>
          <Button text="1" clicked padding={"px-2 py-1"} />
          <Button text="2" padding={"px-2 py-1"} />
          <Button text="3" padding={"px-2 py-1"} />
          <Button text="..." padding={"px-2 py-1"} />
          <Button text="10" padding={"px-2 py-1"} />
          <Button text="11" padding={"px-2 py-1"} />
          <button><FontAwesomeIcon icon={faChevronRight} className="text-[#565E6D] ml-4" /></button>
    
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
