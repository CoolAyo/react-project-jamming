const clientId = "";
let accessToken;
const redirectUri = 'http://localhost:3001/';

const Spotify = {
    getAccessToken(){
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
          accessToken = accessTokenMatch[1];
          const expiresIn = Number(expiresInMatch[1]);
          window.setTimeout(() => accessToken = '', expiresIn * 1000); // Set the amount of time in a session before kicking user
          window.history.pushState('Access Token', null, '/'); // When coming back to the website using the browsers history feature, it will bring the user back to the default page before the token was added.
          return accessToken;
        } else {
            const authoriseToken = `https://accounts.spotify.com/authorize?client_id=${clientId}&responsetype=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location.href = authoriseToken;
        }
    },

    async search(searchTerm,isAlbum){
        const token = Spotify.getAccessToken();
        let searchType = 'track'
        try{
            let reponse;
            if (isAlbum == true){
                searchType = 'album'
                response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album&limit=20`, {headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 
            }
            else{
                response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=20`, {headers: {
                    Authorization: `Bearer ${token}`
                }
            });                
            }

            if (response.ok){
                let jsonResponse = await response.json(); 
                if (!jsonResponse[searchType + 's']) {
                    return [];
                }
                else{
                    return jsonResponse[searchType + 's'].items.map(track => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                  }));                
            }
        }
        }
        catch (e)
        {
            console.log(e);  
        }

    },

    async playListExport(name, trackUris){
        let user_id;
        let playlist_id;
        const token = Spotify.getAccessToken();
        try{
            let response = await fetch(`https://api.spotify.com/v1/me`, {headers: {
                Authorization: `Bearer ${token}`
            }
        }); //Grab the user id
        if (response.ok){
            let jsonResponse = await response.json();
            if (!jsonResponse.id){
                return [];
            }
            else{
                user_id = jsonResponse.id
            }
        }

        response = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {method: 'POST', body: JSON.stringify({name:name}), headers: {
            'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }); 
        if (response.ok){
            let jsonResponse = await response.json();
            if (!jsonResponse.id){
                return [];
            }
            else{
                playlist_id = jsonResponse.id;
                response = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {method: 'POST', body: JSON.stringify({uris:trackUris}), headers: {
                    'Content-type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });
                return response; 
                
            }
        }

        }
        catch(e){
            console.log(e)
        }
    }

};

export default Spotify;