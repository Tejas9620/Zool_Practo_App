import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import 'animate.css';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page1/>} />
        <Route path='/home' element={<Page2/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
