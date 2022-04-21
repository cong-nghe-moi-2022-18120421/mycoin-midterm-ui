import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mineBlockRepository from '../../services/blocks/mineBlock';
import getPendingTransactionsRepository from '../../services/transactions/getPendingTransactions';
import sendCoinRepository from '../../services/transactions/sendCoin';
import createWalletRepository from '../../services/wallet/createWallet';
import getBalance from '../../services/wallet/getBalance';

export default function WalletPage({ keys, onKeysChange }) {
  const [walletKeys, setWalletKeys] = useState({});
  const [pendingTransactions, setPendingTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  const [receiverAddress, setReceiverAddress] = useState('');
  const [sendAmount, setSendAmount] = useState(0);
  const [isMining, setIsMining] = useState(false);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const axiosRes = await getBalance(walletKeys?.publicKey);
        setBalance(axiosRes.data.balance);
      } catch (error) {}
    };

    fetchBalance();
  }, [walletKeys?.publicKey]);
  useEffect(() => {
    const fetchPendingTransactions = async () => {
      try {
        const axiosRes = await getPendingTransactionsRepository();
        setPendingTransactions(axiosRes.data);
      } catch (error) {}
    };

    fetchPendingTransactions();
  }, []);

  useEffect(() => {
    setWalletKeys(keys);
  }, [keys]);

  const handleCreateWallet = async () => {
    try {
      const axiosRes = await createWalletRepository();
      const { key, privateKey, publicKey } = axiosRes.data;

      setWalletKeys({
        key,
        privateKey,
        publicKey,
      });

      onKeysChange?.({
        key,
        privateKey,
        publicKey,
      });
    } catch (error) {}
  };

  const handleMineBlock = async () => {
    setIsMining(true);
    try {
      await mineBlockRepository(walletKeys.publicKey);
      setPendingTransactions([]);
      const axiosRes = await getBalance(walletKeys.publicKey);
      setBalance(axiosRes.data.balance);
    } catch (error) {
    } finally {
      setIsMining(false);
    }
  };

  const handleSendCoin = async () => {
    try {
      await sendCoinRepository({
        privateKey: walletKeys.privateKey,
        publicKey: walletKeys.publicKey,
        receiverAddress,
        sendAmount,
      });
      const axiosRes = await getPendingTransactionsRepository();
      setPendingTransactions(axiosRes.data);
      setReceiverAddress('');
      setSendAmount(0);
    } catch (error) {}
  };

  return (
    <div
      className="container-fluid mt-2"
      style={{
        marginBottom: 100,
      }}
    >
      {/* Wallet information */}
      <h3>Wallet</h3>
      <hr />
      <div>
        {Object.keys(walletKeys).length > 0 ? (
          <div>
            <div>
              <h3>Your public key: </h3>
              <p className="break-word-all">
                <Link to={`/address/${walletKeys?.publicKey}`}>
                  {walletKeys?.publicKey}
                </Link>
              </p>
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
            value={receiverAddress}
            onChange={(e) => setReceiverAddress(e.target.value)}
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
            value={sendAmount}
            onChange={(e) => setSendAmount(e.target.value)}
          />
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSendCoin}
          >
            Send
          </button>
        </div>
      </form>
      {/* Peding transactions & mining*/}
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
            {pendingTransactions.map((tx) => (
              <tr key={tx.hash}>
                <th className="break-word-all" scope="row">
                  {tx.hash}
                </th>
                <td className="break-word-all">{tx.fromAddress}</td>
                <td className="break-word-all">{tx.toAddress}</td>
                <td className="break-word-all">{tx.amount}</td>
                <td className="break-word-all">{tx.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleMineBlock}
            disabled={isMining}
          >
            {isMining && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
                style={{ marginRight: 2 }}
              ></span>
            )}
            Mine
          </button>
        </div>
      </div>
    </div>
  );
}
