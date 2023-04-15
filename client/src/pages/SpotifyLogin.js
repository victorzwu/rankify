import React from "react";
import SpotifyWebApi from "spotify-web-api-node";

export default function SpotifyLogin() {
  var spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.REACT_APP_REDIRECT_URL,
  });
  console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);

  var scopes = ["user-read-private", "user-read-email"];
  var state = "";

  var SPOTIFY_AUTH_URL = spotifyApi.createAuthorizeURL(scopes, state);

  return (
    <div>
      <h1>Spotify Login</h1>
      <a href={SPOTIFY_AUTH_URL}>Connect to Spotify</a>
    </div>
  );
}
