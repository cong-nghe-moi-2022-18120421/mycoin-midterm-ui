import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import moment from 'moment';
import getAllTransactionsRepository from '../../services/transactions/getAll';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [searchParams] = useSearchParams();
  const blockIndex = searchParams.get('block');

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const axiosRes = await getAllTransactionsRepository(blockIndex);
        setTransactions(axiosRes.data);
      } catch (error) {}
    };

    fetchBlocks();
  }, [blockIndex]);

  // const transactions1 = [
  //   {
  //     fromAddress: null,
  //     toAddress:
  //       '0443cea4cec4c4e977db14cb43c51c225cc3ecfa6b7ec7059ca16b907905a602485246573b24464605c2aa5230340b008b9d16de629a71403f0a8531493b0924ad',
  //     amount: 10,
  //     timestamp: 1650525726762,
  //     hash: '81b450f27c5bd669e05460fef607c46c2800550f70c9e59101c8df9594af6280',
  //     block: 1,
  //   },
  //   {
  //     fromAddress: null,
  //     toAddress:
  //       '0443cea4cec4c4e977db14cb43c51c225cc3ecfa6b7ec7059ca16b907905a602485246573b24464605c2aa5230340b008b9d16de629a71403f0a8531493b0924ad',
  //     amount: 10,
  //     timestamp: 1650525727268,
  //     hash: '7102f8abd8c0dd6ca2d9a8da359e54e9594d302e33f930932db11bd3223ca7c0',
  //     block: 2,
  //   },
  // ];

  return (
    <div className="container-fluid mt-2">
      <h3>Transactions</h3>
      {blockIndex && <h2 className="text-info">Block: #{blockIndex}</h2>}
      <hr />
      <div className="card">
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
                {transactions.map((txn) => {
                  return (
                    <tr key={txn.hash}>
                      <th className="break-word-all" scope="row">
                        <Link to={`${txn.hash}`}>{txn.hash}</Link>
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
