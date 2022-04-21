import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import getInfoByAddressRepository from '../../../services/wallet/getInfoByAddress';

export default function WalletInfoPage() {
  const params = useParams();
  const [walletInformation, setWalletInfomation] = useState({});

  const { address } = params;

  useEffect(() => {
    const fetchWalletInfo = async () => {
      try {
        const axiosRes = await getInfoByAddressRepository(address);
        setWalletInfomation({
          ...axiosRes.data,
        });
      } catch (error) {}
    };
    fetchWalletInfo();
  }, [address]);

  const walletInformation1 = {
    balance: 25,
    transactions: [
      {
        fromAddress: null,
        toAddress:
          '048f686074a5c23c2800cd26da820a8cb3acd34ca5156f0fb8003c2e6d6150552aaaa63ea7907f4783eae4c49b9d4d7c6d5d548f365ea2d12d36b01dc56d3a2134',
        amount: 10,
        timestamp: 1650529699050,
        hash: 'df5bede53ce2b8a5a769abb4eeaaff54709c63343f7482b6d6fcbf548fc7cae3',
        status: 'success',
        block: 1,
      },
      {
        fromAddress: null,
        toAddress:
          '048f686074a5c23c2800cd26da820a8cb3acd34ca5156f0fb8003c2e6d6150552aaaa63ea7907f4783eae4c49b9d4d7c6d5d548f365ea2d12d36b01dc56d3a2134',
        amount: 10,
        timestamp: 1650529699050,
        hash: 'df6bede53ce2b8a5a769abb4eeaaff54709c63343f7482b6d6fcbf548fc7cae3',
        status: 'success',
        block: 1,
      },
    ],
  };

  return (
    <div>
      <div className="card m-2" style={{ width: '20rem' }}>
        <div className="card-header">
          <strong>Overview</strong>
        </div>
        {/* Balance */}
        <div className="row m-2">
          <div className="col">Balance:</div>
          <div className="col">
            <strong>{walletInformation?.balance}</strong>
          </div>
        </div>
      </div>

      <div className="card m-2">
        <div className="card-header">
          <strong>Transactions</strong>
        </div>
        <div className="card-body">
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">TxnHash</th>
                  <th scope="col">Block</th>
                  <th scope="col">Age</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                {walletInformation?.transactions?.map((txn) => {
                  return (
                    <tr key={txn.hash}>
                      <th className="break-word-all" scope="row">
                        <Link to={`/transactions/${txn.hash}`}>{txn.hash}</Link>
                      </th>
                      <th className="break-word-all">
                        <Link to={`/blocks/${txn.block}`}>{txn.block}</Link>
                      </th>
                      <td>{moment(txn.timestamp).fromNow()}</td>
                      <td
                        className="break-word-all"
                        style={{
                          minWidth: 150,
                        }}
                      >
                        {txn.fromAddress ? (
                          <Link to={`/address/${txn.fromAddress}`}>
                            {txn.fromAddress}
                          </Link>
                        ) : (
                          'System'
                        )}
                      </td>
                      <td className="break-word-all">
                        &rarr;
                        <Link to={`/address/${txn.toAddress}`}>
                          {txn.toAddress}
                        </Link>
                      </td>
                      <td className="break-word-all">{txn.amount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
