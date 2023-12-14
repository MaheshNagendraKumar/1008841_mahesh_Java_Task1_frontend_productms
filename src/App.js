import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from "./components/Home"
import AddProduct from './components/AddProduct';
import TopProducts from './components/TopProducts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addproduct' element={<AddProduct  />} />
          <Route path='/topproduct' element={<TopProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
