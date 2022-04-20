import React, { useState } from 'react';

export default function WalletPage() {
  const [walletKeys, setWalletKeys] = useState({});
  const [balance, setBalance] = useState(0);

  const handleCreateWallet = () => {
    const keys = {
      key: {},
      privateKey:
        '5df07b721f37408e7492c7f90d0b18815e141512972d7a3bce665304742967c5',
      publicKey:
        '04c0a458f53a032bea76d70027465f300ee16f78a5d9aa6d77ce8c6e8dbc0883f7d9651319f51c7b4a8cf5ac6465d3c872d12c5921ee551bd286efc7d2a198f4ed',
    };

    setWalletKeys(keys);
  };

  return (
    <div className="container">
      <h1>My Coin</h1>
      {/* Wallet information */}
      <hr />
      <h2>Wallet</h2>
      <div>
        {Object.keys(walletKeys).length > 0 ? (
          <div>
            <div>
              <h3>Your public key: </h3>
              <p>{walletKeys?.publicKey}</p>
            </div>
            <div>
              <h3>Your private key: </h3>
              <p>{walletKeys?.privateKey}</p>
            </div>
            <div>
              <h3>Your balance: </h3>
              <p>{balance}</p>
            </div>
          </div>
        ) : (
          <button
            type="button"
            class="btn btn-primary"
            onClick={handleCreateWallet}
          >
            Create Wallet
          </button>
        )}
      </div>
      {/* Send coin */}
      <hr />
      <h2>Send coin</h2>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="receiver-address" class="form-label">
            Receiver address
          </label>
          <input
            type="text"
            placeholder="04c0a458f53a032bea76d7002746..."
            class="form-control"
            id="receiver-address"
          />
        </div>
        <div class="col-md-2">
          <label for="coin-amount" class="form-label">
            Amount
          </label>
          <input type="number" min={0} class="form-control" id="coin-amount" />
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-2">
          <button type="button" class="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
