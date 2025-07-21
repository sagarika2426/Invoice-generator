'use client';

import React, { useState } from "react";


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
    <div className=" p-6 rounded-xl shadow-sm space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-base font-semibold text-gray-700 mb-4 border-b pb-2">Bill To</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Company Name</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={address.company}
              onChange={(e) => handleChange('company', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Phone</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={address.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600 mb-1 block">Address</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={address.address}
              onChange={(e) => handleChange('address', e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600 mb-1 block">GSTIN</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={address.gstin}
              onChange={(e) => handleChange('gstin', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold text-gray-700 mb-4 border-b pb-2">Ship To</h2>
        <label className="text-sm text-gray-600 mb-1 block">Shipping Address</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={address.shipTo}
          onChange={(e) => handleChange('shipTo', e.target.value)}
        />
      </div>
    </div>
  );
}