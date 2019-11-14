import React from 'react';
import './App.css';

//Coin Flipper içeriye yüklendi.
//import CoinFlipper from './components/CoinFlipper/CoinFlipper';
import {CoinFlipper} from "./components"

function App() {
  return (
    <div className="App">
      <CoinFlipper />
    </div>
  );
}

export default App;
