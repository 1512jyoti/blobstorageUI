import { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { useMsal } from '@azure/msal-react'

function CCpage() {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState(null);
  const [userDisplayName, setUserDisplayName] = useState(null);
  const loginButtonRef = useRef(null);
  console.log("loginButtonRef", loginButtonRef)

  useEffect(() => {
    const clickLoginButton = () => {
      if (loginButtonRef.current) {
        loginButtonRef.current.click();
      }
    };
    clickLoginButton();
    return () => {
      // Clean-up code here (if needed)
    };
  }, []);


  const request = [{
    scope: ['User.Read']
  }]
  const handleSignIn = async () => {
    await instance.loginPopup(request);

  }


  // useEffect(() => {
  //   // Function to acquire access token after login
  //   const getAccessToken = async () => {
  //     try {
  //       const response = await instance.acquireTokenSilent({
  //         scopes: ['User.Read'],
  //         account: accounts[0], 
  //       });

  //       // Set the access token in state
  //       setAccessToken(response.accessToken);
  //     } catch (error) {
  //       console.error('Error acquiring access token:', error);
  //     }
  //   };

  //   // Check if user is logged in and get access token
  //   if (accounts.length > 0) {
  //     getAccessToken();
  //   }
  // }, [instance, accounts]);
  let data;
  const isLoggedIn = accounts.length > 0;
  if (isLoggedIn) {
    data = accounts[0].name
  }

  const handleSignOut = () => {
    instance.logoutPopup();
  };

  const btnStyle = {
    padding: '8px 15px',
    fontSize: '12px',
    backgroundColor: '#dc3545', // Red color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }

  return (
    <div className='p-2 ' style={{ width: '100vw', overflow: 'scroll' }}>
      <h1>Welocme to CC page</h1>
      <main className="p-5 flex-grow ">
        <div>
          {isLoggedIn ? (
            <div>
              <p>You are logged in!</p>
              <br />
              <h1>Welcome {data} </h1>
              <br />
              <button onClick={handleSignOut} style={btnStyle} >Sign Out</button>

            </div>
          ) : (
            <div>
              <p>You are not logged in.</p>
              <button onClick={handleSignIn} style={btnStyle} ref={loginButtonRef}   >Sign In</button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default CCpage
