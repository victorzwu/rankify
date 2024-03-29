import React from "react";
import SpotifyWebApi from "spotify-web-api-node";
import "../style/css/login.css";
import "../style/css/appLayout.css"
import logo from "../style/assets/greenspotify.png";

export default function SpotifyLogin() {
  var spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.REACT_APP_REDIRECT_URL,
  });

  var scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "user-top-read",
  ];
  var state = "";

  var SPOTIFY_AUTH_URL = spotifyApi.createAuthorizeURL(scopes, state);

  return (
    <div className="applayout">
      <a className="connect-link" href={SPOTIFY_AUTH_URL}>
        <div className="connect">
          <span className="connectspan">
            <img className="ispan" src={logo} alt="" />
          </span>
          Click to Start Ranking
        </div>
      </a>
    </div>
  );
}
