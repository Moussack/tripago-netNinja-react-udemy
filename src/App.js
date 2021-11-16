import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';

function App() {
   const [show, setShow] = useState(true);
   return (
      <div className="App">
         <button onClick={() => setShow(false)}>Click</button>
         {show && <TripList />}
      </div>
   );
}

export default App;
