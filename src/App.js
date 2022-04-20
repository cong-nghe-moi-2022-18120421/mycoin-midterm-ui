import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import WalletPage from './pages/wallet';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WalletPage />} />
        <Route path="/explorer" element={<p>Hi</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
