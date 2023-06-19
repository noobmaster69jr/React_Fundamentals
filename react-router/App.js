import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './react-router/Home'
import Product from './react-router/Product'
import Login from './react-router/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
