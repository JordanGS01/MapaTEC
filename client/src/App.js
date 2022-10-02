
import './App.css';

import { MapaSVG } from './components/MapaSVG';

import { CapasProvider } from './context/CapasProvider'

function App() {
  
  return (
    <CapasProvider>
      <div className='AppContainer'>
        <MapaSVG />
      </div>
    </CapasProvider>
  );
}

export default App;
