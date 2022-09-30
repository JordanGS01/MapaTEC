
import './App.css';
import { Capas } from './components/Capas';
import { MapaSVG } from './components/MapaSVG';

import { CapasProvider } from './context/CapasProvider'

function App() {
  
  return (
    <CapasProvider>
      <div className='AppContainer'>
        <MapaSVG />
        <Capas />
      </div>
    </CapasProvider>
  );
}

export default App;
