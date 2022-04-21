import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            MyCoin
          </Link>
          <ul className="nav d-flex">
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
      </nav>
    </div>
  );
}
