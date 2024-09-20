// import { Routes,Route } from 'react-router-dom';
// import './App.css';
// import Containers from './components/Containers'
// import StoragePage from './components/StoragePage'
// import NavBar from './components/NavBar';
// import NoPage from './components/NoPage';
// import Header from './components/Header';

// function App() {
//   return (
  
//  <Routes>
//   {/* <Route path='/' element=<StoragePage/> />
//   <Route path='/container' element=<Containers/> /> */}
//   <Route  path="/" Component={Header} />
//   <Route  path='/nav' Component={NavBar} />
//   <Route path='*'Component={NoPage} />

//  </Routes>
    
//   );
// }

// export default App;
import { Routes, Route } from 'react-router-dom';
import './App.css';

// import StoragePage from './components/StoragePage';
import NoPage from './components/NoPage';
import Header from './components/Header';
import NavBar from './components/SideBar';
import CCpage from './components/CCpage';
import HRpage from './components/HRpage'
import { MsalProvider, useMsal } from '@azure/msal-react';

function App({ msalInstance }) {
  return (
    <MsalProvider instance={msalInstance}>
    <div>
    <Routes>
      <Route
        path="/"
        element={
          <div className='fixed inset-0'>
            <Header />
            <NavBar />
          </div>
        }
      >
        <Route path="/" Component={CCpage} />
        <Route path="/HR" Component={HRpage} />
        {/* <Route path="/storage" element={<StoragePage />} /> */}
      <Route path="*" element={<NoPage />} />

      </Route>
    </Routes>
    </div>
    </MsalProvider>
  );
}

export default App;
