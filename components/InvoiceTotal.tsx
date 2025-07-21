'use client';

import React from "react";

type Item = {
  quantity: number;
  rate: number;
  gstType: "IGST" | "CGST+SGST";
  gstRate: number;
};

type TotalsProps = {
  items: Item[];
};

export default function InvoiceTotals({ items }: TotalsProps) {
  let basicAmount = 0;
  let totalIGST = 0;
  let totalCGST = 0;
  let totalSGST = 0;

  items.forEach((item) => {
    const amount = item.quantity * item.rate;
    const gstAmount = (amount * item.gstRate) / 100;
    basicAmount += amount;
    if (item.gstType === "IGST") {
      totalIGST += gstAmount;
    } else {
      totalCGST += gstAmount / 2;
      totalSGST += gstAmount / 2;
    }
  });

  const subtotal = basicAmount + totalIGST + totalCGST + totalSGST;
  const roundedTotal = Math.round(subtotal);
  const roundOff = +(roundedTotal - subtotal).toFixed(2);

  return (
    <div className=" p-6 rounded-xl shadow-sm max-w-2xl mx-auto mt-8 space-y-2 text-sm text-gray-800">
      <div className="flex justify-between">
        <span className="text-gray-600">Basic Amount</span>
        <span>₹{basicAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">IGST</span>
        <span>₹{totalIGST.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">CGST</span>
        <span>₹{totalCGST.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">SGST</span>
        <span>₹{totalSGST.toFixed(2)}</span>
      </div>
      <div className="flex justify-between pt-2 border-t">
        <span className="font-medium">Subtotal</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Round Off</span>
        <span>
          ₹{roundOff >= 0 ? "+" : ""}
          {roundOff}
        </span>
      </div>
      <div className="flex justify-between pt-2 border-t text-base font-semibold">
        <span>Grand Total</span>
        <span>₹{roundedTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
