import React, { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0Context = React.createContext();

function Auth0TokenProvider() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
            scope: requestedScopes.join(" "),
          },
        });
        setAccessToken(token);
      } catch (err) {
        console.log(err);
      }
    };

    if (isAuthenticated) {
      getAccessToken();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  const value = { accessToken, setAccessToken };
  return (
    <Auth0Context.Provider value={value}>
      {children}
    </Auth0Context.Provider>
  );
}

const useAuthToken = () => useContext(Auth0Context);

export { useAuthToken, Auth0TokenProvider };
