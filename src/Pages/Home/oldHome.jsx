import React from "react";

import ElasticsearchAPIConnector from '@elastic/search-ui-elasticsearch-connector';
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import {
    ErrorBoundary,
    Facet,
    SearchProvider,
    SearchBox,
    Results,
    PagingInfo,
    ResultsPerPage,
    Paging,
    Sorting,
    WithSearch
  } from "@elastic/react-search-ui";
  import {
    BooleanFacet,
    Layout,
    SingleLinksFacet,
    SingleSelectFacet
  } from "@elastic/react-search-ui-views";
  

// Elasticsearch connector configuration
const connector = new ElasticsearchAPIConnector({
  host: "https://localhost:9200",
  index: "medicine-index-v4",
  connectionOptions: {
    headers: {
      Authorization: 'Basic ZWxhc3RpYzpQaTkqbk11UjQqPVVYNTcwT0NRNg==',
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

const App = () => (
  <SearchProvider config={config}>
    <ErrorBoundary>
      <Layout
        header={
          <header style={{ padding: "10px", backgroundColor: "#f1f1f1" }}>
            <SearchBox
              autocompleteMinimumCharacters={3}
              autocompleteResults={{
                linkTarget: "_blank",
                sectionTitle: "Results",
                titleField: "Nom Commercial",
                urlField: "url",
                shouldTrackClickThrough: true
              }}
              autocompleteSuggestions={true}
              debounceLength={0}
            />
          </header>
        }
        sideContent={
          <div style={{ padding: "10px" }}>
            <Facet key={"1"} field={"Type.keyword"} label={"Type"} />
            <Facet key={"2"} field={"Pays.keyword"} label={"Pays"} />
            <Facet key={"3"} field={"labo.keyword"} label={"Laboratoire"} />
            <Facet key={"4"} field={"cpharmaco.keyword"} label={"cpharmaco"} />
            <Facet key={"5"} field={"ctherapeutique.keyword"} label={"ctherapeutique"} />
          </div>
        }
        bodyContent={
          <main style={{ padding: "10px" }}>
            <Results
              shouldTrackClickThrough={true}
              titleField="Nom Commercial"
            />
            <Paging />
            <ResultsPerPage />
          </main>
        }
      />
    </ErrorBoundary>
  </SearchProvider>
);

export default App;
