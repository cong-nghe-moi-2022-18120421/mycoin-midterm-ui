import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import getOneBlockByIndexRepository from '../../services/blocks/getOneByIndex';

export default function BlockPage() {
  const params = useParams();
  const [block, setBlock] = useState({});

  const attributes = [
    'Block height:',
    'Timestamp:',
    'Transactions:',
    'Previous Hash:',
    'Difficulty:',
    'Nonce:',
    'Hash:',
    'Mined by:',
  ];

  // const block1 = {
  //   index: 2,
  //   timestamp: 1650468856.064,
  //   transactions: [
  //     {
  //       fromAddress: null,
  //       toAddress:
  //         '04428c678c8ba3e498d117f0fdd2484b1672e009ea11785da2ef6742fb53df8b3b733b4a6341c7997fb72fee1dfab593311a85b2fc26b65f2150e69c19d64ead6b',
  //       amount: 10,
  //       timestamp: 1650468856064,
  //       hash: '5f30087acf3bd6d8ec85a1b4c4cc94e1c2a75a9d36c9fd4e05b8c36fcefcdb80',
  //     },
  //   ],
  //   previousHash:
  //     '000225b8711d0645c36e81053e2c5474e89346f3d284eaae18634f780d47664b',
  //   difficulty: 1,
  //   nonce: 26,
  //   hash: '008e57ca2af63d5a0e696a7a0dfb402557ac59ee2d3dd13cb46a3f3c406f2da5',
  //   miner:
  //     '04428c678c8ba3e498d117f0fdd2484b1672e009ea11785da2ef6742fb53df8b3b733b4a6341c7997fb72fee1dfab593311a85b2fc26b65f2150e69c19d64ead6b',
  // };

  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const axiosRes = await getOneBlockByIndexRepository(params.index);
        setBlock(axiosRes.data);
      } catch (error) {}
    };
    fetchBlock();
  }, [params.index]);

  return (
    <div>
      <h3>Block #{params.index}</h3>
      <hr />
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            {/* Block height */}
            <div className="row">
              <div className="col-3">{attributes[0]}</div>
              <div className="col">
                <strong>{block?.index}</strong>
              </div>
              <hr />
            </div>
            {/* Timestamp */}
            <div className="row">
              <div className="col-3">{attributes[1]}</div>
              <div className="col">
                {moment(block?.timestamp * 1000).fromNow()} (
                {moment(block?.timestamp * 1000).format()})
              </div>
              <hr />
            </div>
            {/* Transactions */}
            <div className="row">
              <div className="col-3">{attributes[2]}</div>
              <div className="col">
                <span>
                  <Link to={`/transactions?block=${block?.index}`}>
                    <button type="button" className="btn btn-primary btn-sm">
                      {block?.transactions?.length} transactions
                    </button>
                  </Link>
                </span>
                <span> in this blocks</span>
              </div>
              <hr />
            </div>
            {/* Previous hash */}
            <div className="row">
              <div className="col-3">{attributes[3]}</div>
              <div className="col">{block?.previousHash}</div>
              <hr />
            </div>
            {/* Difficulty */}
            <div className="row">
              <div className="col-3">{attributes[4]}</div>
              <div className="col">{block?.difficulty}</div>
              <hr />
            </div>
            {/* Nonce */}
            <div className="row">
              <div className="col-3">{attributes[5]}</div>
              <div className="col">{block?.nonce}</div>
              <hr />
            </div>
            {/* Hash */}
            <div className="row">
              <div className="col-3">{attributes[6]}</div>
              <div className="col">{block?.hash}</div>
              <hr />
            </div>
            {/* Miner */}
            <div className="row">
              <div className="col-3">{attributes[7]}</div>
              <div className="col break-word-all">
                <Link to={`/address/${block?.miner}`}>{block?.miner}</Link>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
