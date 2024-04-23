import React, { useState, useCallback } from "react";

import "./PlayList.css";

import Tracks from "../Tracks/Tracks";


const PlayList = (props) => {
  {/*const [songList, setsongList] = useState();*/}
  const [newName, setnewName] = useState("New Playlist");

  const handleChange = ({ target }) => { 
    setnewName(target.value)};

    
    return(
        <div id='Playlist'> {/*Show what is about to be added to playlist, allowing for removal*/}
          <input value={newName} onChange={handleChange} /> {/*Change the name of the new playlist that will be made*/}
            <div id='PlaylistContainer'>
              {/*Only show tracks that have been selected */}

              <Tracks tracks={props.playlistTracks} isPlaylist={true} onRemove={props.onRemove}/>

            </div>
            <button className="Playlist-save"> {/*Push the added save to Spotify*/}
              SAVE TO SPOTIFY ACCOUNT
            </button>
        </div>
    );
};

export default PlayList;