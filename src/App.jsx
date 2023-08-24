import './App.css';
import React from 'react';
import InvoiceTable from './components/InvoiceTable';

function App({data}) {
  return <InvoiceTable initialInvoiceList={data}/>;
}

export default App;
