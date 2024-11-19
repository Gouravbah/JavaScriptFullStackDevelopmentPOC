import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/home';
import JestTest from './component/jestTest';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jestTest' element={<JestTest />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
