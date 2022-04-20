import React, { useState } from 'react';
import createWalletRepository from '../../services/wallet/createWallet';

export default function WalletPage() {
  const [walletKeys, setWalletKeys] = useState({});
  const [balance, setBalance] = useState(0);

  const handleCreateWallet = async () => {
    try {
      const axiosRes = await createWalletRepository();
      const { key, privateKey, publicKey } = axiosRes.data;

      setWalletKeys({
        key,
        privateKey,
        publicKey,
      });
    } catch (error) {}
  };

  return (
    <div
      className="container"
      style={{
        marginBottom: 100,
      }}
    >
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
            className="btn btn-primary"
            onClick={handleCreateWallet}
          >
            Create Wallet
          </button>
        )}
      </div>
      {/* Send coin */}
      <hr />
      <h2>Send coin</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="receiver-address" className="form-label">
            Receiver address
          </label>
          <input
            type="text"
            placeholder="04c0a458f53a032bea76d7002746..."
            className="form-control"
            id="receiver-address"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="coin-amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            min={0}
            className="form-control"
            id="coin-amount"
          />
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-2">
          <button type="button" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
      {/* Peding transactions */}
      <hr />
      <h2>Pending transactions</h2>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">TxHash</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Amount</th>
              <th scope="col">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>20</td>
              <td>125512320</td>
            </tr>
          </tbody>
        </table>

        <div className="col-md-2">
          <button type="button" className="btn btn-primary">
            Mine block
          </button>
        </div>
      </div>
    </div>
  );
}
