import React from "react";
import ElasticsearchAPIConnector from '@elastic/search-ui-elasticsearch-connector';
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import { ErrorBoundary, Facet, SearchProvider, SearchBox, Results, Paging, ResultsPerPage } from "@elastic/react-search-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import CustomResult from './CustomResultsView';




const connector = new ElasticsearchAPIConnector({
  host: "https://localhost:9200",
  index: "medicine-index",
  connectionOptions: {
    headers: {
      Authorization: 'Basic ZWxhc3RpYzpuX1d5Z3JXVnVqUU1pZTY1emdIdw==',
    },
  }
});

const config = {
  searchQuery: {
    search_fields: {
      "Nom Commercial": { weight: 1 },
      "dci": { weight: 1 }
    },
    result_fields: {
      "Nom Commercial": { snippet: {} }
    },
    disjunctiveFacets: [
      "labo.keyword",
      "Type.keyword",
      "Pays.keyword",
      "cpharmaco.keyword",
      "ctherapeutique.keyword"
    ],
    facets: {
      "labo.keyword": { type: "value" },
      "Type.keyword": { type: "value" },
      "Pays.keyword": { type: "value" },
      "cpharmaco.keyword": { type: "value" },
      "ctherapeutique.keyword": { type: "value" }
    }
  },
  autocompleteQuery: {
    results: {
      resultsPerPage: 5,
      search_fields: {
        "Nom Commercial": { weight: 1 },
        "dci": { weight: 1 }
      },
      result_fields: {
        "Nom Commercial": { snippet: { size: 100, fallback: true } }
      }
    },
    suggestions: {
      types: {
        results: { fields: ["Nom Commercial"] }
      },
      size: 4
    }
  },
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true
};

const Home = () => (
  
  <SearchProvider config={config}>
    <ErrorBoundary>
      <Header />
      <div className="break h-16"></div>
      <div className="hero bg-[#edf0ff]">
        <div className="container mx-auto">
          <div className="cont1 text-center w-4/5 mx-auto pt-5 pb-16">
            <h2 className="text-5xl font-bold w-full text-[#00157c] pb-4 pt-2 " style={{ fontFamily: 'Poppins, sans-serif' }}>Recherchez votre medicament</h2>
            <p className="text-lg font-thin text-[#000625] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Votre source d'information de confiance</p>
          </div> 
        </div>
      </div>
      <div className="herotwo bg-[#F8F9FA] ">
        <div className="container mx-auto">
          <div className="cont2 relative bottom-12 text-center w-3/5 mx-auto pt-7 pb-9 px-10 bg-[#d2d9ff] shadow-md  rounded-lg">
          <SearchBox
  autocompleteMinimumCharacters={3}
  autocompleteResults={{
    linkTarget: "_blank",
    sectionTitle: "Results",
    titleField: "Nom Commercial",
    urlField: "url",
    shouldTrackClickThrough: true,
  }}
  autocompleteSuggestions={true}
  debounceLength={0}
  inputView={({ getInputProps, getButtonProps }) => (
    <div className="relative w-full max-w-xxl text-left  ">
      <input
        {...getInputProps({
          placeholder: "Entrez le nom du médicament à rechercher",
        })}
        className="py-4 px-7 w-full bg-white border border-[#d2d9ff] rounded-md placeholder-gray-500 text-sm focus:outline-none focus:border-[#898989]"
      />
      <button
        {...getButtonProps()}
        className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-4 text-gray-500"
        aria-label="Search"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  )}
/>


            
          </div>
          <h3 className="text-xl font-semibold">Results</h3>
          
        
          <div className="grid grid-cols-12 gap-4 mt-5">
           
            <div className="col-span-3">
              <Facet key={"1"} field={"Type.keyword"} label={"Type"} />
              <Facet key={"2"} field={"Pays.keyword"} label={"Pays"} />
              <Facet key={"3"} field={"labo.keyword"} label={"Laboratoire"} />
              <Facet key={"4"} field={"cpharmaco.keyword"} label={"cpharmaco"} />
              <Facet key={"5"} field={"ctherapeutique.keyword"} label={"ctherapeutique"} />
            </div>

          
            <div className="col-span-9">
              <Results
               resultView={CustomResult}
                shouldTrackClickThrough={true}
                titleField="Nom Commercial"
                className="font-normal text-[#8D8F91] bg-[#fff] border-[#E3E6EA] border w-full px-3 py-1"
               
              />
              <Paging />
              
            </div>
          </div>
        </div>
      </div>
     
      <Footer />
    </ErrorBoundary>
  </SearchProvider>
);

export default Home;
