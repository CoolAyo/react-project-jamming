import React, { useState, useCallback } from "react";

import SearchBar from "../SearchBar/SearchBar";
import PlayList from "../PlayList/PlayList";
import SearchResults from "../SearchResults/SearchResults";

import "./App.css";


const App = () => {
  const [albumFilter, setAlbumFilter] = useState(false);
  
    
    
    return (
      <div id='App'>
        <h1>Jammming</h1> 
        <SearchBar/>
        <div id='AppMain'>
          <SearchResults/>
          <PlayList/>
        </div>
      </div>
    );
};


export default App;