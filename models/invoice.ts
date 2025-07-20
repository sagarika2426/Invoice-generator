import mongoose, { Schema, model, models } from "mongoose";

const InvoiceSchema = new Schema(
  {
    invoiceId: { type: String, required: true,unique: true },
    address: {
      company: { type: String, required: true },
      address: { type: String, required: true },
      phone: { type: String, required: true },
      gstin: { type: String, required: true },
      shipTo: { type: String, required: true },
    },
    items: [
      {
        id: { type: Number, required: true },
        description: { type: String, required: true },
        hsn: { type: String, required: true },
        quantity: { type: Number, required: true },
        uom: { type: String, required: true },
        rate: { type: Number, required: true },
        gstType: {
          type: String,
          enum: ["IGST", "CGST+SGST"],
          required: true,
        },
        gstRate: { type: Number, required: true },
        amount: { type: Number, required: true }, 
        igst: { type: Number, required: true },
        cgst: { type: Number, required: true },
        sgst: { type: Number, required: true },
        totalItemgst: { type: Number, required: true },
      },
    ],
    totals: {
      basicAmount: { type: Number, required: true },
      totalIGST: { type: Number, required: true },
      totalCGST: { type: Number, required: true },
      totalSGST: { type: Number, required: true },
      subtotal: { type: Number, required: true },
      roundedTotal: { type: Number, required: true },
      roundOff: { type: Number, required: true },
      

    },
  },
  {
    collection: "invoices",
    timestamps: true, 
  }
);

const Invoice = models.Invoice || model("Invoice", InvoiceSchema);
export default Invoice;
