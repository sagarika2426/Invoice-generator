'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Invoice {
  invoiceId: string;
  createdAt: string;
 
}

export default function InvoicesList() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/invoices')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setInvoices(data.data);
        }
      })
      .catch(err => console.error('Error fetching invoices:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading invoices...</div>;
  if (invoices.length === 0) return <div>No invoices found.</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>All Invoices</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={thStyle}>Invoice ID</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.slice(0, 4).map((invoice) => (
            <tr key={invoice.invoiceId}>
              <td style={tdStyle}>{invoice.invoiceId}</td>
              <td style={tdStyle}>{new Date(invoice.createdAt).toLocaleDateString()}</td>
              <td style={tdStyle}>
                <Link href={`/preview/${invoice.invoiceId}`} style={{ color: 'blue', textDecoration: 'underline' }}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
  background: '#f2f2f2',
  textAlign: 'left',
};

const tdStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
};
