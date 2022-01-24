import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <div>
      <h2>Invoice {params.invoiceId}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due by: {invoice.due}</p>
    </div>
  );
}
