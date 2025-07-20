'use client';
import { useState } from "react";
import ItemTable, { Item } from "../../components/ItemSection";
import AddressBlock, { Address } from "../../components/AddressBlock";
import axios from "axios";
import InvoiceTotals from "../../components/InvoiceTotal";

export default function CreatePage() {

  const [address, setAddress] = useState<Address>({
    company: '',
    address: '',
    phone: '',
    gstin: '',
    shipTo: '',
  });

  const [items, setItems] = useState<Item[]>([
    { id: 1, description: "", hsn: "", quantity: 0, uom: "", rate: 0, gstRate: 0, gstType: 'IGST' },
  ]);

  const handleSubmit = async () => {
    const totalItems = items.map(item => {
      const amount = item.quantity * item.rate;
      const gstAmount = (amount * item.gstRate) / 100;
      const igst = item.gstType === 'IGST' ? gstAmount : 0;
      const cgst = item.gstType === 'CGST+SGST' ? gstAmount / 2 : 0;
      const sgst = item.gstType === 'CGST+SGST' ? gstAmount / 2 : 0;
      const totalItemgst = igst + cgst + sgst;

      return {
        ...item,
        amount,
        igst,
        cgst,
        sgst,
        totalItemgst
      };
    });

    let basicAmount = 0;
    let totalIGST = 0;
    let totalCGST = 0;
    let totalSGST = 0;

    totalItems.forEach(item => {
      basicAmount += item.amount;
      totalIGST += item.igst;
      totalCGST += item.cgst;
      totalSGST += item.sgst;
    });

    const subtotal = basicAmount + totalIGST + totalCGST + totalSGST;
    const roundedTotal = Math.round(subtotal);
    const roundOff = +(roundedTotal - subtotal).toFixed(2);

    const totals = {
      basicAmount,
      totalIGST,
      totalCGST,
      totalSGST,
      subtotal,
      roundOff,
      roundedTotal,
    };
const invoiceId = `INV-${Date.now().toString().slice(-5)}`; 


    const payload = { address, items: totalItems, totals, invoiceId };

    console.log("payload", payload);
    try {
      const res = await axios.post('/api/invoice', payload);
      if (res.status === 201) {
        alert('Invoice saved successfully!');
      } else {
        alert('Error: ' + res.data.message);
      }
    } catch (error: any) {
      console.error(error);
      alert('Something went wrong.');
    }
  };


  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Create Invoice</h1>
      <AddressBlock address={address} setAddress={setAddress} />
      <ItemTable items={items} setItems={setItems} />
      <InvoiceTotals items={items} />

      <div className="flex justify-center mt-6">
        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>

  )
}
