import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">About DR Gifted Team</h1>
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <p>
          DR Gifted Team is your trusted source for discounted Amazon and Binance gift cards. 
          We leverage bulk purchasing and strategic partnerships to offer you gift cards 
          at a flat <strong>25% profit margin</strong> – meaning you pay only $250 for a $1,000 card.
        </p>
        <p>
          Our mission is to provide instant, secure, and affordable digital gift cards to 
          individuals and businesses worldwide. Whether you're looking to save on your 
          everyday Amazon purchases or need Binance gift cards for crypto trading, we've 
          got you covered.
        </p>
        <p>
          All cards are delivered digitally within minutes of purchase. We accept multiple 
          payment methods and ensure your transactions are safe and encrypted.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg mt-4">
          <h3 className="font-bold text-lg">Why choose us?</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>✅ Up to 75% discount on face value (25% profit margin for resellers)</li>
            <li>✅ Instant email delivery</li>
            <li>✅ 24/7 customer support</li>
            <li>✅ Secure checkout</li>
            <li>✅ Trusted by thousands of customers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;