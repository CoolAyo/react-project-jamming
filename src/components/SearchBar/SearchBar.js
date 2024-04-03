import React, { useState, useCallback } from "react";

import "./SearchBar.css";


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [albumQuery, setAlbumQuery] = useState(false);

    const handleChange = ({ target }) => { 
    setSearchQuery(target.value)};

    const albumSearcher = ({ target }) => { 
      setAlbumQuery(target.checked)};
    
    return(
      <div id='SearchBar'> {/*Search for stuff*/}
        <input id='SearchBox' placeholder="Enter song name or artist" value={searchQuery} onChange={handleChange}/>
          <span>
            <img src={require("../media/images/search-icon.png")}/>
          </span>
          <form id='albumFilter'> {/*Cant remember where I was going with this*/}
            <input type="checkbox" id="filterByAlbum" name="filterByAlbum" />
            <label for="filterByAlbum">Filter by Album?</label>
          </form> 
      </div>
    );
};

export default SearchBar;