import React from "react";
import { createRoot } from "react-dom/client";
//import App from "./components/App/App";
import "./index.css";

import ReactDOM from "react-dom/client";

function MyComponentTest() {
    return (
    <div id='temp'>
      <h1>Jammming</h1>
      <div id='SearchBar'>
        <input id='SearchBox' placeholder="Enter song name or artist" />
        <span>
          <img src={require("./components/media/images/search-icon.png")}/>
        </span>
        <form id='albumFilter'>
          <input type="checkbox" id="filterByAlbum" name="filterByAlbum" value="useAlbumFilter"/>
          <label for="filterByAlbum">Filter by Album?</label>
        </form> 
      </div>
      <div id='Containered'>
      <div id='TrackContainer'>
        <h2>Results</h2> {/*Show: Popular songs (searched up song name) if something has been searched up and "Results" (when nothing has yet been typed)*/}
        <div className='Track'>
          <div className='TrackInfo'>
            <h3>&#40;SongResult1.name&#41; by &#40;SongResult1.artist&#41;</h3>
            <p>&#40;SongResult1.name&#41;, <span style={{color: "green"}}>&#40;SongResult1.album&#41;</span></p>
            <p>When clicking on Album change results to show every song from the Album</p>
            <span>&#40;Resposive add button that changes cursor and color/transparency when hovered/clicked&#41;</span>
          </div>      
        </div>
        <div className='Track'>
          <div className='TrackInfo'>
            <h3>&#40;SongResult2.name&#41; by &#40;SongResult2.artist&#41;</h3>
            <p>&#40;SongResult2.name&#41;, <span style={{color: "green"}}>&#40;SongResult2.album&#41;</span></p>
            <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>
            <span>&#40;Resposive add button that changes cursor and color/transparency when hovered/clicked&#41;</span>
          </div>      
        </div>
        <div className='Track'>
          <div className='TrackInfo'>
            <h3>&#40;SongResult3.name&#41; by &#40;SongResult3.artist&#41;</h3>
            <p>&#40;SongResult3.name&#41;, <span style={{color: "green"}}>&#40;SongResult3.album&#41;</span></p>
            <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>
            <span>&#40;Resposive add button that changes cursor and color/transparency when hovered/clicked&#41;</span>
          </div>      
        </div>
      </div>

      <div id='Playlist'>
        <input defaultValue={"New Playlist"} />
        <div id='PlaylistContainer'>
          {/*Only show tracks that have been selected */}

          <div className='Track'>
            <div className='TrackInfo'>
              <h3>&#40;SongResult1.name&#41; by &#40;SongResult1.artist&#41;</h3>
              <p>&#40;SongResult1.name&#41;, <span style={{color: "green"}}>&#40;SongResult1.album&#41;</span></p>
              <p>When clicking on Album change results to show every song from the Album</p>
              <span>&#40;Resposive minus button that changes cursor and color/transparency when hovered/clicked&#41;</span>
            </div>      
          </div>

          <div className='Track'>
            <div className='TrackInfo'>
              <h3>&#40;SongResult2.name&#41; by &#40;SongResult2.artist&#41;</h3>
              <p>&#40;SongResult2.name&#41;, <span style={{color: "green"}}>&#40;SongResult2.album&#41;</span></p>
              <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>
              <span>&#40;Resposive minus button that changes cursor and color/transparency when hovered/clicked&#41;</span>
              </div>      
            </div>
          
          <div className='Track'>
            <div className='TrackInfo'>
              <h3>&#40;SongResult3.name&#41; by &#40;SongResult3.artist&#41;</h3>
              <p>&#40;SongResult3.name&#41;, <span style={{color: "green"}}>&#40;SongResult3.album&#41;</span></p>
              <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>
              <span>&#40;Resposive minus button that changes cursor and color/transparency when hovered/clicked&#41;</span>
            </div>      
          </div>
          
          </div>
          <button className="Playlist-save">
            SAVE TO SPOTIFY ACCOUNT
          </button>

          </div>
          </div>
        </div>
    );
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyComponentTest />
);