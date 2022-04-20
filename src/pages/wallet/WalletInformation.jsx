import React, { useState } from 'react';

export default function WalletInformation() {
  const [keys, setKeys] = useState({});

  const handleCreateWallet = () => {
    setKeys({
      key: {},
      privateKey:
        '5df07b721f37408e7492c7f90d0b18815e141512972d7a3bce665304742967c5',
      publicKey:
        '04c0a458f53a032bea76d70027465f300ee16f78a5d9aa6d77ce8c6e8dbc0883f7d9651319f51c7b4a8cf5ac6465d3c872d12c5921ee551bd286efc7d2a198f4ed',
    });
  };

  return (
    <div>
      {Object.keys(keys).length > 0 ? (
        <div>
          <div>
            <h3>Your public key: </h3>
            <p>{keys?.publicKey}</p>
          </div>
          <div>
            <h3>Your private key: </h3>
            <p>{keys?.privateKey}</p>
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
  );
}
