import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home';
import Navigation from './routes/navigation';
import Authentication from './routes/authentication';
import Shop from './routes/shop';
import Checkout from './routes/checkout';
import { useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase';
import { setCurrentUser } from './store/user/actions';
import { useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user)
      }

      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [dispatch])


  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
