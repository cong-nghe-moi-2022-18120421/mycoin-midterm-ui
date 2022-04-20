import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import BlocksPage from './pages/blocks';
import WalletPage from './pages/wallet';

function App() {
  const [walletKeys, setWalletKeys] = useState({});

  const handleWalletKeysChange = (keys) => setWalletKeys(keys);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <WalletPage
              keys={walletKeys}
              onKeysChange={handleWalletKeysChange}
            />
          }
        />
        <Route path="/blocks" element={<BlocksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
