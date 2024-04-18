import React, { useState, useCallback } from "react";

import "./SearchBar.css";


const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [albumQuery, setAlbumQuery] = useState(false);


    const handleSearchChange = useCallback((event) => { 
    setSearchQuery(event.target.value)
  },[]);

  const handleAlbumChange = useCallback((event) => { 
    setAlbumQuery(event.target.checked)
  },[]);
  

    const search = useCallback(() => {
      props.onSearch(searchQuery, albumQuery);
    }, [ props.onSearch, searchQuery, albumQuery]);


    return(
      <div id='SearchBar'> {/*Search for stuff*/}
        <input id='SearchBox' placeholder="Enter song name or artist" onChange={handleSearchChange}/>
          <span onClick={search}>
            <img src={require("../media/images/search-icon.png")} alt="Search button"/>
          </span>
          <form id='albumFilter'> {/*Cant remember where I was going with this*/}
            <input type="checkbox" id="filterByAlbum" name="filterByAlbum" onChange={handleAlbumChange} />
            <label htmlFor="filterByAlbum">Filter by Album?</label>
          </form> 
      </div>
    );
};

export default SearchBar;