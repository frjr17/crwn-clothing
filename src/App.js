import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home';
import Navigation from './routes/navigation';
import Authentication from './routes/authentication';
import Shop from './routes/shop';



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
