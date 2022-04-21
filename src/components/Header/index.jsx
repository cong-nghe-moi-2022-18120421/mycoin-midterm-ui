import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <ul className="nav" style={{ border: '1px solid black' }}>
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Wallet
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blocks">
            Blocks
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/transactions">
            Transactions
          </Link>
        </li>
      </ul>
    </div>
  );
}
