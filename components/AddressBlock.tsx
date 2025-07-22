'use client';

import React, { useState } from "react";
import InvoiceTotals from "./InvoiceTotal";


export type Address = {
  company: string;
  address: string;
  phone: string;
  gstin: string;
  shipTo: string;
};



export default function AddressBlock({ address, setAddress }: { address: Address, setAddress: React.Dispatch<React.SetStateAction<Address>> }) {


  const handleChange = (field: keyof Address, value: string) => {
    setAddress({ ...address, [field]: value });
  };

  return (
   <div className="p-6 bg-white rounded-xl shadow-sm space-y-6 max-w-4xl mx-auto border border-gray-100">
  <div>
    <h2 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2 flex items-center gap-2">
      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span> Bill To
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label className="text-xs font-medium text-gray-600 mb-1 block">Company Name</label>
        <input
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-blue-50/40 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ring-inset"
          value={address.company}
          onChange={e => handleChange('company', e.target.value)}
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-600 mb-1 block">Phone</label>
        <input
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-blue-50/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={address.phone}
          onChange={e => handleChange('phone', e.target.value)}
        />
      </div>
      <div className="md:col-span-2">
        <label className="text-xs font-medium text-gray-600 mb-1 block">Address</label>
        <input
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-blue-50/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={address.address}
          onChange={e => handleChange('address', e.target.value)}
        />
      </div>
      <div className="md:col-span-2">
        <label className="text-xs font-medium text-gray-600 mb-1 block">GSTIN</label>
        <input
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-blue-50/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={address.gstin}
          onChange={e => handleChange('gstin', e.target.value)}
        />
      </div>
    </div>
  </div>
  <div className="p-6 bg-white rounded-xl max-w-4xl mx-auto border border-gray-100 mt-6">
  <h2 className="text-lg font-bold text-green-800 mb-4 border-b pb-2 flex items-center gap-2">
    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span> Ship To
  </h2>
  <label className="text-xs font-medium text-gray-600 mb-1 block">Shipping Address</label>
  <input
    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-green-50/40 focus:outline-none focus:ring-2 focus:ring-green-400"
    value={address.shipTo}
    onChange={e => handleChange('shipTo', e.target.value)}
  />
</div>

</div>

  );
}