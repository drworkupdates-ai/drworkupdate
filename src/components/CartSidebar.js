import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  const [step, setStep] = useState("cart");
  const [email, setEmail] = useState("");
  const [timerSeconds, setTimerSeconds] = useState(15 * 60);
  const [copied, setCopied] = useState(false); // new state for copy feedback
  const timerRef = useRef(null);

  useEffect(() => {
    if (step !== "payment") {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [step]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleCheckoutClick = () => {
    setStep("email");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    setStep("payment");
    setTimerSeconds(15 * 60);
  };

  const handleBackToCart = () => {
    setStep("cart");
    setEmail("");
    setTimerSeconds(15 * 60);
    setCopied(false);
  };

  const handleBackToEmail = () => {
    setStep("email");
    setTimerSeconds(15 * 60);
    setCopied(false);
  };

  const handleCancelPayment = () => {
    setStep("cart");
    setEmail("");
    setTimerSeconds(15 * 60);
    setCopied(false);
  };

  // Copy address to clipboard
  const copyAddress = async () => {
    const usdtAddress = "TKhGQLYMHzg9oC5GCDEu5xq8tuDirP2bYt";
    try {
      await navigator.clipboard.writeText(usdtAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Could not copy address. Please copy manually.");
    }
  };

  if (!isOpen) return null;

  const renderContent = () => {
    if (step === "cart") {
      return (
        <>
          <div className="flex-grow overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex gap-4 border-b pb-4">
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        {item.brand} · ${item.price.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1 border rounded"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 border rounded"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="border-t p-4">
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total:</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            <button
              onClick={handleCheckoutClick}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
          </div>
        </>
      );
    }

    if (step === "email") {
      return (
        <>
          <div className="flex-grow overflow-y-auto p-4">
            <h3 className="text-lg font-semibold mb-4">Enter your email</h3>
            <p className="text-sm text-gray-600 mb-4">
              We'll send a coupon to this email after successful payment.
            </p>
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBackToCart}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </>
      );
    }

    if (step === "payment") {
      const isExpired = timerSeconds === 0;
      const usdtAddress = "TKhGQLYMHzg9oC5GCDEu5xq8tuDirP2bYt";
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(usdtAddress)}`;

      return (
        <>
          <div className="flex-grow overflow-y-auto p-4">
            <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
            <p className="text-sm text-gray-600 mb-4">
              A coupon will be sent to <strong>{email}</strong> after we confirm
              your payment.
            </p>

            {/* Timer */}
            <div className="bg-gray-100 p-3 rounded-lg text-center mb-4">
              <span className="text-sm font-medium">Time remaining:</span>
              <span
                className={`ml-2 font-mono text-lg ${
                  isExpired ? "text-red-600" : "text-indigo-600"
                }`}
              >
                {formatTime(timerSeconds)}
              </span>
              {isExpired && (
                <p className="text-red-500 text-sm mt-1">
                  Payment session expired. Please go back and try again.
                </p>
              )}
            </div>

            {/* Payment details (USDT / TRC20) */}
            <div className="bg-gray-50 p-4 rounded-lg border space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Coin:</span>
                <span>USDT</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Deposit network:</span>
                <span>Tron (TRC20)</span>
              </div>
              <div>
                <span className="font-medium block mb-1">Address:</span>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white p-2 rounded border text-sm font-mono break-all">
                    {usdtAddress}
                  </div>
                  <button
                    onClick={copyAddress}
                    className="px-3 py-2 bg-indigo-50 text-indigo-600 rounded border border-indigo-200 hover:bg-indigo-100 transition"
                    title="Copy address"
                  >
                    {copied ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
              </div>
              <div className="text-xs text-red-600 mt-2">
                ⚠️ Please do not deposit to the above address through a contract
                address.
              </div>
              {/* QR Code Image */}
              <div className="mt-4 flex justify-center">
                <img
                  src={qrCodeUrl}
                  alt="USDT TRC20 QR Code"
                  className="w-32 h-32 border rounded-lg shadow-sm"
                />
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">
                Scan this QR code with your wallet to send USDT (TRC20)
              </p>
            </div>

            {/* Cart total for reference */}
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between font-semibold">
                <span>Cart total:</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="border-t p-4 flex gap-3">
            <button
              onClick={handleCancelPayment}
              className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            {!isExpired ? (
              <button
                onClick={handleBackToEmail}
                className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50"
              >
                Back
              </button>
            ) : (
              <button
                onClick={handleBackToCart}
                className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
              >
                Back to Cart
              </button>
            )}
          </div>
        </>
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        {/* Header with dynamic title and close button */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {step === "cart" && "Your Cart"}
            {step === "email" && "Email for Coupon"}
            {step === "payment" && "Complete Payment"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default CartSidebar;