import React, { useState, useCallback } from "react";

import "./SearchResults.css";

import Tracks from "../Tracks/Tracks";


const SearchResults = (props) => {
  {/*const [resultsList, setresultsList] = useState();*/}
  {/*const [albumsList, setalbumsList] = useState();*/}

    
    return(
    <div id='TrackContainer'> {/*Allow for adding stuff to the playlist*/}
      <h2>Results</h2> {/*Show: Popular songs (searched up song name) if something has been searched up and "Results" (when nothing has yet been typed)*/}
      <Tracks tracks={props.searchResults}/>
    </div>
    );
};

export default SearchResults;