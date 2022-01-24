import * as React from "react";
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav style={{ borderBottom: '1px solid', paddingBottom: '1rem' }}>
        <Link to='/invoices'>Invoices</Link> | {' '}
        <Link to='/expenses'>Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
