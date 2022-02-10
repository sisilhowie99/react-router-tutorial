import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main style={{ padding: '1rem' }}>
      <div>
        <h2>Invoice {params.invoiceId}</h2>
        <h3>Total due: {invoice.amount}</h3>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due by: {invoice.due}</p>
        <p>
          <button
            onClick={() => {
              deleteInvoice(invoice.number);
              navigate('/invoices');
            }}
          >
            Delete
          </button>
        </p>
      </div>
    </main>
  );
}
