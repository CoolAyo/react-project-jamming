import React, { useState, useCallback } from "react";

import SearchBar from "../SearchBar/SearchBar";
import PlayList from "../PlayList/PlayList";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../utilities/Spotify";

import "./App.css";


const App = () => {
{  /*const [albumQuery, setAlbumQuery] = useState('');*/}
  const [searchResults, setSearchResults] = useState({});
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]); 

  const search = useCallback((searchQuery, albumQuery) => {
    Spotify.search(searchQuery, albumQuery).then(setSearchResults)

  }, []);

  //console.log(searchResults); //Finaly

  /*const addTrack = useCallback((track) =>{

  },[])*/

    
    return (
      <div id='App'>
        <h1>Jammming</h1> 
        <SearchBar onSearch={search} />
        <div id='AppMain'>
          <SearchResults searchResults={searchResults} /*onAdd={addTrack}*//>
          <PlayList/>
        </div>
      </div>
    );
};


export default App;