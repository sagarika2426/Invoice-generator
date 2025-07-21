import React from "react";
import image from "../public/image.png";

const dummyInvoice = {
  invoiceId: "INV-39099",
  address: {
    company: "Acme Corp",
    address: "123 Business Rd, Mumbai",
    phone: "9876543210",
    gstin: "27AAAAA1234A1Z5",
    shipTo: "Warehouse 5, Navi Mumbai",
  },
  items: [
    {
      id: 1,
      description: "Steel Rods",
      hsn: "7207",
      quantity: 100,
      uom: "kg",
      rate: 75,
      gstType: "CGST+SGST",
      gstRate: 18,
      amount: 7500,
      igst: 0,
      cgst: 675,
      sgst: 675,
      totalItemgst: 1350,
    },
    {
      id: 2,
      description: "Aluminium Sheets",
      hsn: "7606",
      quantity: 50,
      uom: "kg",
      rate: 120,
      gstType: "CGST+SGST",
      gstRate: 18,
      amount: 6000,
      igst: 0,
      cgst: 540,
      sgst: 540,
      totalItemgst: 1080,
    },
    {
      id: 3,
      description: "Nuts & Bolts Pack",
      hsn: "7318",
      quantity: 200,
      uom: "pcs",
      rate: 10,
      gstType: "CGST+SGST",
      gstRate: 12,
      amount: 2000,
      igst: 0,
      cgst: 120,
      sgst: 120,
      totalItemgst: 240,
    },
    {
      id: 4,
      description: "Paint Coating Service",
      hsn: "9988",
      quantity: 1,
      uom: "job",
      rate: 2500,
      gstType: "IGST",
      gstRate: 18,
      amount: 2500,
      igst: 450,
      cgst: 0,
      sgst: 0,
      totalItemgst: 450,
    },
  ],
  totals: {
    basicAmount: 18000,
    totalIGST: 450,
    totalCGST: 1335,
    totalSGST: 1335,
    subtotal: 21000,
    roundedTotal: 21000,
    roundOff: 0,
  },
};

const InvoiceView = () => {
  const invoice = dummyInvoice;

  return (
    <div
      className="min-h-screen bg-gray-100 py-10 flex justify-center"
   style={{
    backgroundImage: `url('/image.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'top',
    // minHeight: '100vh',
  }}
    >
      {" "}
      <div className=" shadow-2xl rounded-lg max-w-5xl w-full px-10 py-8 text-sm font-sans">
        {/* Header */}

        {/* Address Section */}
        <div className="grid grid-cols-2 mb-8 gap-8">
          <div>
            <p className="text-gray-500 font-semibold mb-1">Bill To</p>
            <div className="border p-3 rounded-md">
              <p className="font-medium text-gray-800">
                {invoice.address.company}
              </p>
              <p className="text-gray-600">{invoice.address.address}</p>
              <p className="text-gray-600">Phone: {invoice.address.phone}</p>
              <p className="text-gray-600">GSTIN: {invoice.address.gstin}</p>
            </div>
          </div>
          <div>
            <p className="text-gray-500 font-semibold mb-1">Ship To</p>
            <div className="border p-3 rounded-md">
              <p className="text-gray-800">{invoice.address.shipTo}</p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="overflow-x-auto text-sm">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-blue-50 border-b border-gray-300 text-blue-800 text-xs uppercase">
              <tr>
                <th className="py-2 px-2 border">#</th>
                <th className="py-2 px-3 border text-left">Description</th>
                <th className="py-2 px-3 border">HSN</th>
                <th className="py-2 px-3 border">Qty</th>
                <th className="py-2 px-3 border">UOM</th>
                <th className="py-2 px-3 border">Rate</th>
                <th className="py-2 px-3 border">Amount</th>
                <th className="py-2 px-3 border">GST %</th>
                <th className="py-2 px-3 border">CGST</th>
                <th className="py-2 px-3 border">SGST</th>
                <th className="py-2 px-3 border">IGST</th>
                <th className="py-2 px-3 border">Total GST</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, idx) => (
                <tr key={item.id} className="text-gray-700 border-b">
                  <td className="py-2 px-2 border text-center">{idx + 1}</td>
                  <td className="py-2 px-3 border">{item.description}</td>
                  <td className="py-2 px-3 border text-center">{item.hsn}</td>
                  <td className="py-2 px-3 border text-center">
                    {item.quantity}
                  </td>
                  <td className="py-2 px-3 border text-center">{item.uom}</td>
                  <td className="py-2 px-3 border text-right">₹{item.rate}</td>
                  <td className="py-2 px-3 border text-right">
                    ₹{item.amount}
                  </td>
                  <td className="py-2 px-3 border text-center">
                    {item.gstRate}%
                  </td>
                  <td className="py-2 px-3 border text-right">₹{item.cgst}</td>
                  <td className="py-2 px-3 border text-right">₹{item.sgst}</td>
                  <td className="py-2 px-3 border text-right">₹{item.igst}</td>
                  <td className="py-2 px-3 border text-right font-medium">
                    ₹{item.totalItemgst}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="mt-10 flex justify-end">
          <div className="w-full max-w-md text-sm">
            <div className="flex justify-between py-1 border-t border-gray-300">
              <span>Basic Amount</span>
              <span>₹{invoice.totals.basicAmount}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>CGST Total</span>
              <span>₹{invoice.totals.totalCGST}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>SGST Total</span>
              <span>₹{invoice.totals.totalSGST}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>IGST Total</span>
              <span>₹{invoice.totals.totalIGST}</span>
            </div>
            <div className="flex justify-between py-1 font-semibold">
              <span>Subtotal</span>
              <span>₹{invoice.totals.subtotal}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Round Off</span>
              <span>₹{invoice.totals.roundOff}</span>
            </div>
            <div className="flex justify-between py-2 border-t mt-2 font-bold text-lg text-blue-800">
              <span>Total</span>
              <span>₹{invoice.totals.roundedTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceView;
