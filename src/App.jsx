import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Shop/Main';
import Cart from '../src/components/Cart/Cart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
