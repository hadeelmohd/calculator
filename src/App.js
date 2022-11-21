import './App.css';
import { Numbox } from './Numbox.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        enter numbers in the first two boxes then press on the operation button:
        <Numbox />
      </header>
    </div>
  );
}

export default App;
