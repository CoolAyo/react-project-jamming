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

  const addTrack = useCallback((track) =>{

    if (playlistTracks.some((isTrack) => isTrack.id === track.id))
    return;

    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  },[playlistTracks])

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, [])

  const create = useCallback(() =>{
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.playListExport(playlistName,trackUris).then(() => {
      setPlaylistName("New Playlist"); //Reset everything back to default once playlist is uploaded
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

 

    
    return (
      <div id='App'>
        <h1>Jammming</h1> 
        <SearchBar onSearch={search} />
        <div id='AppMain'>
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <PlayList playlistTracks={playlistTracks} onRemove={removeTrack} playlistSave={create}/>
        </div>
      </div>
    );
};


export default App;