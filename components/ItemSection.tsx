'use client';
export type Item = {
  id: number;
  description: string;
  hsn: string;
  quantity: number;
  uom: string;
  rate: number;
  gstType: 'IGST' | 'CGST+SGST';
  gstRate: number;
};

const gstRates = {
  IGST: [0, 5, 12, 18, 28],
  'CGST+SGST': [0, 5, 12, 18, 28],
};

export default function ItemTable({ items, setItems }) {


  const handleChange = (id: number, field: keyof Item, value: string | number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: field === "quantity" || field === "rate" || field === "gstRate"
                ? Number(value)
                : value,
            }
          : item
      )
    );
  };

  const addRow = () => {
    const newId = items.length ? items[items.length - 1].id + 1 : 1;
    setItems([...items, { id: newId, description: "", hsn: "", quantity: 0, uom: "", rate: 0, gstRate: 0, gstType: 'IGST' }]);
  };

  // const deleteRow = (id: number) => {
  //   setItems(items.filter((item) => item.id !== id));
  // };

  return (
    <div className="p-4">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Description</th>
            <th className="border p-2">HSN</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">UOM</th>
            <th className="border p-2">Rate</th>
                        <th className="border p-2">Amount</th>

            <th className="border p-2">GST Type</th>
            <th className="border p-2">GST Rate</th>
            <th className="border p-2">IGST</th>
            <th className="border p-2">CGST</th>
            <th className="border p-2">SGST</th>
            {/* <th className="border p-2">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const amount = item.quantity * item.rate;
            const gstAmount = (amount * item.gstRate) / 100;
            const igst = item.gstType === 'IGST' ? gstAmount : 0;
            const cgst = item.gstType === 'CGST+SGST' ? gstAmount / 2 : 0;
            const sgst = item.gstType === 'CGST+SGST' ? gstAmount / 2 : 0;

            return (
              <tr key={item.id}>
                <td className="border p-2">
                  <input
                    className="w-full border px-2 py-1"
                    value={item.description}
                    onChange={(e) => handleChange(item.id, "description", e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    className="w-full border px-2 py-1"
                    value={item.hsn}
                    onChange={(e) => handleChange(item.id, "hsn", e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full border px-2 py-1"
                    value={item.quantity}
                    onChange={(e) => handleChange(item.id, "quantity", e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    className="w-full border px-2 py-1"
                    value={item.uom}
                    onChange={(e) => handleChange(item.id, "uom", e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full border px-2 py-1"
                    value={item.rate}
                    onChange={(e) => handleChange(item.id, "rate", e.target.value)}
                  />
                </td>
                                <td className="border p-2 text-right">₹ {amount.toFixed(2)}</td>

                <td className="border p-2">
                  <select
                    className="w-full border px-2 py-1"
                    value={item.gstType}
                    onChange={(e) => handleChange(item.id, "gstType", e.target.value)}
                  >
                    <option value="IGST">IGST</option>
                    <option value="CGST+SGST">CGST+SGST</option>
                  </select>
                </td>
                <td className="border p-2">
                  <select
                    className="w-full border px-2 py-1"
                    value={item.gstRate}
                    onChange={(e) => handleChange(item.id, "gstRate", e.target.value)}
                  >
                    {gstRates[item.gstType].map((rate) => (
                      <option key={rate} value={rate}>
                        {item.gstType === 'IGST' ? `${rate}%` : `${rate / 2}% + ${rate / 2}%`}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border p-2 text-right">₹ {igst.toFixed(2)}</td>
                <td className="border p-2 text-right">₹ {cgst.toFixed(2)}</td>
                <td className="border p-2 text-right">₹ {sgst.toFixed(2)}</td>
                {/* <td className="border p-2 text-center">
                  <button onClick={() => deleteRow(item.id)} className="text-red-600">Delete</button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={addRow}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Item
        </button>
      </div>


    </div>
  );
}
