import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BlockPage from './pages/block';
import BlocksPage from './pages/blocks';
import TransactionsPage from './pages/transactions';
import TransactionPage from './pages/transactions/hash';
import WalletPage from './pages/wallet';
import WalletInfoPage from './pages/wallet/info';

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
        <Route path="blocks" element={<BlocksPage />} />
        <Route path="blocks/:index" element={<BlockPage />} />
        <Route path="transactions" element={<TransactionsPage />} />
        <Route path="transactions/:hash" element={<TransactionPage />} />
        <Route path="address/:address" element={<WalletInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
