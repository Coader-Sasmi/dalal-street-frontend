// pages/payment-details.tsx
"use client";

import { useState } from "react";

export default function PaymentDetails() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment process
    setTimeout(() => {
      alert("Payment Successful!");
      setIsProcessing(false);
    }, 2000);
  };

  const paymentInfo = {
    bankName: "Bank of Next",
    accountNumber: "1234567890",
    accountHolder: "John Doe",
    ifsc: "NEXT0001234",
    amount: 1500,
    currency: "INR",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Payment Details</h1>

        <div className="mb-6">
          <p className="text-gray-600 mb-2">Bank Name</p>
          <p className="font-medium text-gray-900">{paymentInfo.bankName}</p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-2">Account Number</p>
          <p className="font-medium text-gray-900">{paymentInfo.accountNumber}</p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-2">Account Holder</p>
          <p className="font-medium text-gray-900">{paymentInfo.accountHolder}</p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-2">IFSC Code</p>
          <p className="font-medium text-gray-900">{paymentInfo.ifsc}</p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-2">Amount to Pay</p>
          <p className="text-xl font-bold text-gray-900">
            {paymentInfo.currency} {paymentInfo.amount}
          </p>
        </div>

        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full py-3 rounded-lg text-white font-semibold transition-colors ${
            isProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>

        <p className="text-gray-500 text-sm mt-4 text-center">
          Your payment is secure and encrypted.
        </p>
      </div>
    </div>
  );
}
