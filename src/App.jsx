import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Shop/Main';
import Cart from '../src/components/Cart/Cart';
import History from 'components/History/History';

function App() {
  return (
    <div style={{ padding: '15px 30px' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>
    </div>
  );
}

export default App;
