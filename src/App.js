import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home';
import Navigation from './routes/navigation';
import Authentication from './routes/authentication';

const Shop = () => {
  return (
    <div>
      <div>
        <h1>I am the shop</h1>
      </div>
    </div>
  );
}


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
