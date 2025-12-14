import React from 'react';
import AllRoute from '../router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  React.useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        // ⚠️ REMPLACEZ '1111111111' PAR VOTREv VRAI PIXEL ID FACEBOOK
        // ⚠️ REPLACE '1111111111' WITH YOUR REAL FACEBOOK PIXEL ID
        const options = {
          autoConfig: true,
          debug: true,
        };
        ReactPixel.init('1111111111', null, options);
        ReactPixel.pageView();
      });
  }, []);

  return (
    <div className="App" id='scrool'>
      <AllRoute />
      <ToastContainer />
    </div>
  );
}

export default App;