import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import getAllBlocksRepository from '../../services/blocks/getAll';

export default function BlocksPage() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const axiosRes = await getAllBlocksRepository();
        setBlocks(axiosRes.data.reverse());
      } catch (error) {}
    };

    fetchBlocks();
  }, []);

  const blocks1 = [
    {
      index: 0,
      timestamp: 1650208118,
      transactions: [],
      previousHash: 'Genesis block',
      difficulty: 1,
      nonce: 0,
      hash: '000225b8711d0645c36e81053e2c5474e89346f3d284eaae18634f780d47664b',
    },
    {
      index: 1,
      timestamp: 1650465531.343,
      transactions: [
        {
          fromAddress: null,
          toAddress:
            '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
          amount: 10,
          timestamp: 1650465531342,
          hash: 'fef8daa150e86ed570aaf332f12997af00b4365fb69ff0833e2e76558f288003',
        },
      ],
      previousHash:
        '000225b8711d0645c36e81053e2c5474e89346f3d284eaae18634f780d47664b',
      difficulty: 1,
      nonce: 34,
      hash: '05effcca85eb804b643e536f4a93d019549bab4b74bd06e6a302f5862c4bfe32',
      miner:
        '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
    },
    {
      index: 2,
      timestamp: 1650465531.938,
      transactions: [
        {
          fromAddress: null,
          toAddress:
            '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
          amount: 10,
          timestamp: 1650465531937,
          hash: 'e4cf8a61e00c016719122ac9eeedcd30cb141e20d05cc6427b095a9bfa8ae4b8',
        },
      ],
      previousHash:
        '05effcca85eb804b643e536f4a93d019549bab4b74bd06e6a302f5862c4bfe32',
      difficulty: 1,
      nonce: 8,
      hash: '0cb7e07e84fdecbaf3e68cdd2c33b46e5051e00d5515da3dcc31c8a6f7923241',
      miner:
        '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
    },
    {
      index: 3,
      timestamp: 1650465532.573,
      transactions: [
        {
          fromAddress: null,
          toAddress:
            '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
          amount: 10,
          timestamp: 1650465532573,
          hash: '5a8a1700ac59fc13e21d31e6cf803e0aff57345393caa15c45edec9631f537ad',
        },
      ],
      previousHash:
        '0cb7e07e84fdecbaf3e68cdd2c33b46e5051e00d5515da3dcc31c8a6f7923241',
      difficulty: 1,
      nonce: 59,
      hash: '0758a17df4d89ff733cc054b8e6cb7176ab33851787aca31dced73b3707dfa73',
      miner:
        '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
    },
    {
      index: 4,
      timestamp: 1650465533.147,
      transactions: [
        {
          fromAddress: null,
          toAddress:
            '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
          amount: 10,
          timestamp: 1650465533147,
          hash: '69d15dc8bc0489f40101967bad6e6ebe3cafb50cec8d9997a86a734503216300',
        },
      ],
      previousHash:
        '0758a17df4d89ff733cc054b8e6cb7176ab33851787aca31dced73b3707dfa73',
      difficulty: 1,
      nonce: 17,
      hash: '0885738775c234d406e6e4e562366a1bde3e1265319536870b80a270c9e14286',
      miner:
        '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
    },
    {
      index: 5,
      timestamp: 1650465534.14,
      transactions: [
        {
          fromAddress: null,
          toAddress:
            '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
          amount: 10,
          timestamp: 1650465534139,
          hash: '186416489229c3992345575356957d0ab0b3b499b0c917cf7bc839cc514ff3fe',
        },
      ],
      previousHash:
        '0885738775c234d406e6e4e562366a1bde3e1265319536870b80a270c9e14286',
      difficulty: 1,
      nonce: 42,
      hash: '0352d34732af87a6c8415eae21a89c882667c4e032451036d6aa6e0428ccbe10',
      miner:
        '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
    },
    {
      index: 6,
      timestamp: 1650465535.326,
      transactions: [
        {
          fromAddress: null,
          toAddress:
            '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
          amount: 10,
          timestamp: 1650465535326,
          hash: 'f99a2fe3dabffcf8eb266957ab6aa53d088d4dbc70b5e8a3eb17c4941c479f08',
        },
      ],
      previousHash:
        '0352d34732af87a6c8415eae21a89c882667c4e032451036d6aa6e0428ccbe10',
      difficulty: 1,
      nonce: 14,
      hash: '0cfc5ff3d7ef2225fdbc40ce720f8636fa5ed41cb58fbc7fdcddd66ffe8f55b4',
      miner:
        '048d01080d1f1565005a3db6544ad73a0e140b5175badad6ee1e5fadaac083496bfda63fe0a302758dbce1f9f8044d0bf0844a591d149ccf6fc64ef556f115dd4e',
    },
  ];

  return (
    <div className="container-fluid mt-2">
      <h3>Blocks</h3>
      <hr />
      <div className="card">
        <div className="card-body">
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Block</th>
                  <th scope="col">Age</th>
                  <th scope="col">Txn</th>
                  <th scope="col">Miner</th>
                </tr>
              </thead>
              <tbody>
                {blocks.map((block) => (
                  <tr key={block.hash}>
                    <th className="break-word-all" scope="row">
                      <Link to={`/blocks/${block.index}`}>{block.index}</Link>
                    </th>
                    <td className="break-word-all">
                      {moment(block.timestamp * 1000).fromNow()}
                    </td>
                    <td className="break-word-all">
                      <Link to={`/blocks/${block.index}/transactions`}>
                        {block.transactions.length}
                      </Link>
                    </td>
                    <td className="break-word-all">
                      <Link to={`/address/${block.miner}`}>{block.miner}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
