import moment from 'moment';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function TransactionPage() {
  const params = useParams();
  // const [block, setBlock] = useState({});

  const attributes = [
    'Transaction Hash:',
    'Status:',
    'Block:',
    'Timestamp:',
    'From:',
    'To:',
    'Value:',
  ];

  // useEffect(() => {
  //   const fetchBlock = async () => {
  //     try {
  //       const axiosRes = await getOneBlockByIndexRepository(params.index);
  //       setBlock(axiosRes.data);
  //     } catch (error) {}
  //   };
  //   fetchBlock();
  // }, [params.index]);

  const transaction = {
    fromAddress: null,
    toAddress:
      '048f686074a5c23c2800cd26da820a8cb3acd34ca5156f0fb8003c2e6d6150552aaaa63ea7907f4783eae4c49b9d4d7c6d5d548f365ea2d12d36b01dc56d3a2134',
    amount: 10,
    timestamp: 1650529699050,
    hash: 'df5bede53ce2b8a5a769abb4eeaaff54709c63343f7482b6d6fcbf548fc7cae3',
    status: 'success',
    block: 1,
  };

  return (
    <div>
      <h3>Transaction Details</h3>
      <hr />
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            {/* Transaction Hash */}
            <div className="row">
              <div className="col-3">{attributes[0]}</div>
              <div className="col">
                <strong>{transaction?.hash}</strong>
              </div>
            </div>
            {/* Status */}
            <div className="row">
              <div className="col-3">{attributes[1]}</div>
              <div className="col">
                {transaction?.status === 'success' ? (
                  <span className="badge bg-success">Success</span>
                ) : (
                  <span className="badge bg-warning text-dark">Pending</span>
                )}
              </div>
            </div>
            {/* Block */}
            <div className="row">
              <div className="col-3">{attributes[2]}</div>
              <div className="col">
                {transaction?.block && (
                  <Link to={`/blocks/${transaction?.block}`}>
                    {transaction?.block}
                  </Link>
                )}
              </div>
            </div>
            {/* Timestamp */}
            <div className="row">
              <div className="col-3">{attributes[3]}</div>
              <div className="col">
                {moment(transaction?.timestamp).fromNow()} (
                {moment(transaction?.timestamp).format()})
              </div>
            </div>
            <hr />
            {/* From */}
            <div className="row">
              <div className="col-3">{attributes[4]}</div>
              <div className="col break-word-all">
                {transaction?.fromAddress ? (
                  <Link to={`/address/${transaction?.fromAddress}`}>
                    {transaction?.fromAddress}
                  </Link>
                ) : (
                  'System'
                )}
              </div>
            </div>
            {/* To */}
            <div className="row">
              <div className="col-3">{attributes[5]}</div>
              <div className="col break-word-all">
                <Link to={`/address/${transaction?.toAddress}`}>
                  {transaction?.toAddress}
                </Link>
              </div>
            </div>
            <hr />
            {/* Value */}
            <div className="row">
              <div className="col-3">{attributes[6]}</div>
              <div className="col">{transaction?.amount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
