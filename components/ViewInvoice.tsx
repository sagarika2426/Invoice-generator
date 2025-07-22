"use client";
import React, { useRef } from "react";
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
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center">
      {" "}
      <div
        className=" shadow-2xl rounded-lg max-w-5xl w-full px-10 py-8 text-sm"
        style={{
          backgroundImage: `url('/image.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          minHeight: "100vh",
          height: "1500px",
        }}
      >
        {/* Header */}
        <div className="flex justify-between mb-6 border-b pb-4 border-gray-200 mt-32">
          <div className="text-blue-900 font-semibold space-y-1">
            <p>
              Invoice No: <span className="font-bold">{invoice.invoiceId}</span>
            </p>
            <p>
              Invoice Date:{" "}
              <span className="font-bold">{invoice.invoiceId}</span>
            </p>
          </div>
          <div className="text-right text-gray-700">
            <p>Po No: 1231</p>
            <p>Po Date: 01-01-2023</p>
          </div>
        </div>

        {/* Bill To & Ship To */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <div className="text-gray-600 font-semibold mb-1">Bill To</div>
            <div className="border-l-4 border-blue-700 bg-blue-50 p-4 rounded-lg shadow-inner">
              <p className="font-medium text-blue-900">
                {invoice.address.company}
              </p>
              <p>{invoice.address.address}</p>
              <p>Phone: {invoice.address.phone}</p>
              <p>GSTIN: {invoice.address.gstin}</p>
            </div>
          </div>
          <div>
            <div className="text-gray-600 font-semibold mb-1">Ship To</div>
            <div className="border-l-4 border-green-600 bg-green-50 p-4 rounded-lg shadow-inner">
              <p className="font-medium text-green-900">
                {invoice.address.shipTo}
              </p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="overflow-x-auto text-sm mb-10">
          <table className="min-w-full table-auto border border-gray-300 bg-white rounded-xl shadow">
            <thead className="bg-blue-200 text-blue-900 text-xs uppercase border-b border-blue-300">
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
                <tr
                  key={item.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
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
                  <td className="py-2 px-3 border text-right">
                    ₹{item.totalItemgst}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold bg-blue-100">
                <td colSpan={6} className="py-2 px-3 border text-right">
                  Totals
                </td>
                <td className="py-2 px-3 border text-right">
                  ₹{invoice.totals.basicAmount}
                </td>
                <td className="py-2 px-3 border text-center">—</td>
                <td className="py-2 px-3 border text-right">
                  ₹{invoice.totals.totalCGST}
                </td>
                <td className="py-2 px-3 border text-right">
                  ₹{invoice.totals.totalSGST}
                </td>
                <td className="py-2 px-3 border text-right">
                  ₹{invoice.totals.totalIGST}
                </td>
                <td className="py-2 px-3 border text-center">—</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-between mb-10">
          <div className="mb-12 w-1/2">
            <div className="text-gray-600 font-semibold mb-1">Bank Details</div>
            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg shadow-inner text-sm space-y-2">
              <div className="flex justify-between text-yellow-900 font-medium">
                <span>Beneficiary Name::</span>{" "}
                <span>SAPTARISHI INNOVATION LLP</span>
              </div>

              <div className="flex justify-between text-yellow-900 font-medium">
                <span>Account Number:</span> <span>251882580702</span>
              </div>
              <div className="flex justify-between text-yellow-900 font-medium">
                <span>IFSC:</span> <span>INDB0001536</span>
              </div>
              <div className="flex justify-between text-yellow-900 font-medium">
                <span>Bank Name:</span> <span>INDUSIND BANK</span>
              </div>
              <div className="flex justify-between text-yellow-900 font-medium">
                <span>Branch:</span> <span>BHANDUP WEST</span>
              </div>
            </div>
          </div>
          <div className="w-full max-w-xs space-y-2 text-sm bg-blue-50 rounded-lg p-4 border border-blue-200 shadow">
            <div className="flex justify-between">
              <span className="font-semibold">Basic Amount</span>
              <span className="font-semibold text-blue-900">
                ₹{invoice.totals.basicAmount}
              </span>
            </div>
            <div className="flex justify-between">
              <span>CGST Total</span>
              <span>₹{invoice.totals.totalCGST}</span>
            </div>
            <div className="flex justify-between">
              <span>SGST Total</span>
              <span>₹{invoice.totals.totalSGST}</span>
            </div>
            <div className="flex justify-between">
              <span>IGST Total</span>
              <span>₹{invoice.totals.totalIGST}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span className="text-blue-900 font-semibold">
                ₹{invoice.totals.subtotal}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Round Off</span>
              <span>₹{invoice.totals.roundOff}</span>
            </div>
            <div className="flex justify-between border-t border-blue-300 pt-2 font-bold text-lg text-blue-900">
              <span>Total</span>
              <span>₹{invoice.totals.roundedTotal}</span>
            </div>
          </div>
        </div>

        {/* Bank Details After Totals */}

        {/* Declaration and Terms */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200 mb-2">
          <h3 className="font-semibold text-gray-700 mb-3 uppercase">
            Declaration
          </h3>
          <p className="text-gray-700 text-xs mb-4">
            We declare that this invoice shows the actual price of the goods &
            services described.
          </p>
          <h3 className="font-semibold text-gray-700 mb-3 uppercase">Terms</h3>
          <ul className="list-disc list-inside text-gray-700 text-xs">
            <li>Payment: 100% ADVANCE</li>
            <li>
              Guarantee doesn’t cover mishandling of components after delivery
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvoiceView;
