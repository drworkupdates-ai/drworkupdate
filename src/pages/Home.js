


// import React, { useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { products } from "../data/products";

// // Star Rating Component
// const StarRating = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center">
//       {[...Array(fullStars)].map((_, i) => (
//         <span key={i} className="text-yellow-500 text-lg">★</span>
//       ))}
//       {hasHalfStar && <span className="text-yellow-500 text-lg">½</span>}
//       {[...Array(emptyStars)].map((_, i) => (
//         <span key={i} className="text-gray-300 text-lg">★</span>
//       ))}
//       <span className="ml-1 text-gray-600 text-sm">{rating.toFixed(1)}</span>
//     </div>
//   );
// };

// const Home = () => {
//   const location = useLocation();

//   // Scroll to top on route change (ensures page starts at top)
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   // ---- Build featured products array with 2 from each brand ----
//   const amazonProducts = products.filter(p => p.brand === "Amazon").slice(0, 2);
//   const binanceProducts = products.filter(p => p.brand === "Binance").slice(0, 2);
//   const googlePlayProducts = products.filter(p => p.brand === "Google Play").slice(0, 2);
//   const featuredProducts = [...amazonProducts, ...binanceProducts, ...googlePlayProducts];
//   // ----------------------------------------------------------------

//   // Dummy rating data for featured products (6 items)
//   const productRatings = [
//     { rating: 4.8, reviews: 245 },   // Amazon $100
//     { rating: 4.9, reviews: 189 },   // Amazon $1,500
//     { rating: 4.7, reviews: 312 },   // Binance $500
//     { rating: 4.9, reviews: 278 },   // Binance $1,000
//     { rating: 4.8, reviews: 156 },   // Google Play $100
//     { rating: 4.7, reviews: 203 },   // Google Play $500
//   ];

//   // Dummy user reviews (unchanged)
//   const recentReviews = [
//     { id: 1, firstName: "Aarav", lastName: "Sharma", rating: 5, comment: "Instant delivery! Great profit margin." },
//     { id: 2, firstName: "Vihaan", lastName: "Verma", rating: 4, comment: "Reliable service, will buy again." },
//     { id: 3, firstName: "Ananya", lastName: "Reddy", rating: 5, comment: "Best gift card site I've used." },
//     { id: 4, firstName: "Ishaan", lastName: "Gupta", rating: 3, comment: "Good but delivery took a bit longer." },
//     { id: 5, firstName: "Sia", lastName: "Patel", rating: 4, comment: "Secure payment and good support." },
//     { id: 6, firstName: "Emily", lastName: "Johnson", rating: 5, comment: "Super fast and legit. Will use again!" },
//     { id: 7, firstName: "Michael", lastName: "Brown", rating: 5, comment: "Got my Amazon card in 2 minutes. Amazing." },
//     { id: 8, firstName: "Sophia", lastName: "Garcia", rating: 4, comment: "Easy process, great discount." },
//     { id: 9, firstName: "James", lastName: "Wilson", rating: 5, comment: "25% profit is no joke. Highly recommend." },
//     { id: 10, firstName: "Olivia", lastName: "Martinez", rating: 4, comment: "Binance card worked perfectly." },
//     { id: 11, firstName: "Raj", lastName: "Kumar", rating: 5, comment: "Best site for gift cards in India." },
//     { id: 12, firstName: "Priya", lastName: "Singh", rating: 5, comment: "Trustworthy and quick support." },
//     { id: 13, firstName: "Liam", lastName: "Williams", rating: 4, comment: "Slightly delayed but customer service helped." },
//     { id: 14, firstName: "Emma", lastName: "Jones", rating: 5, comment: "Smooth transaction. Will be back." },
//     { id: 15, firstName: "Noah", lastName: "Davis", rating: 3, comment: "Card worked but delivery took 30 min." },
//     { id: 16, firstName: "Ava", lastName: "Miller", rating: 5, comment: "Perfect for reselling. Great margins." },
//     { id: 17, firstName: "William", lastName: "Moore", rating: 5, comment: "Used the code immediately, no issues." },
//     { id: 18, firstName: "Isabella", lastName: "Taylor", rating: 4, comment: "Good value, will buy more." },
//     { id: 19, firstName: "Mohammed", lastName: "Ali", rating: 5, comment: "Very satisfied. Instant delivery." },
//     { id: 20, firstName: "Fatima", lastName: "Khan", rating: 5, comment: "Binance card saved me 25%." },
//     { id: 21, firstName: "Lucas", lastName: "Anderson", rating: 2, comment: "Had to wait longer than expected." },
//     { id: 22, firstName: "Mia", lastName: "Thomas", rating: 5, comment: "Flawless experience. 5 stars!" },
//     { id: 23, firstName: "Ethan", lastName: "Jackson", rating: 4, comment: "Good discount, but UI could be better." },
//     { id: 24, firstName: "Amelia", lastName: "White", rating: 5, comment: "Got the card in 5 minutes. Impressed." },
//     { id: 25, firstName: "Alexander", lastName: "Harris", rating: 5, comment: "Legit site. Highly recommended." },
//     { id: 26, firstName: "Charlotte", lastName: "Martin", rating: 4, comment: "Reliable, will buy again." },
//     { id: 27, firstName: "Benjamin", lastName: "Thompson", rating: 5, comment: "Amazing profit margin. Great for business." },
//     { id: 28, firstName: "Evelyn", lastName: "Garcia", rating: 5, comment: "Very fast and secure." },
//     { id: 29, firstName: "Daniel", lastName: "Martinez", rating: 3, comment: "Works but payment took a while to confirm." },
//     { id: 30, firstName: "Abigail", lastName: "Robinson", rating: 5, comment: "Top notch service. Will refer friends." },
//     { id: 31, firstName: "Matthew", lastName: "Clark", rating: 5, comment: "Binance card is real. Used it today." },
//     { id: 32, firstName: "Elizabeth", lastName: "Rodriguez", rating: 4, comment: "Good experience overall." },
//     { id: 33, firstName: "Jack", lastName: "Lewis", rating: 5, comment: "Instant delivery, great support." },
//     { id: 34, firstName: "Grace", lastName: "Lee", rating: 5, comment: "Love the profit margin. Buying more soon." },
//     { id: 35, firstName: "Ryan", lastName: "Walker", rating: 5, comment: "Exactly as described. A+ seller." },
//     { id: 36, firstName: "Chloe", lastName: "Hall", rating: 4, comment: "Good, but would like more payment options." },
//     { id: 37, firstName: "David", lastName: "Allen", rating: 5, comment: "Superb. Got my Amazon gift card instantly." },
//     { id: 38, firstName: "Ella", lastName: "Young", rating: 5, comment: "Highly recommended for bulk purchases." },
//     { id: 39, firstName: "Oliver", lastName: "Hernandez", rating: 3, comment: "Card worked but website was slow." },
//     { id: 40, firstName: "Victoria", lastName: "King", rating: 5, comment: "Legit business. Will come back." },
//     { id: 41, firstName: "Samuel", lastName: "Wright", rating: 4, comment: "Smooth process. Good discount." },
//     { id: 42, firstName: "Madison", lastName: "Lopez", rating: 5, comment: "Best gift card site ever!" },
//     { id: 43, firstName: "Joseph", lastName: "Hill", rating: 5, comment: "Fast, secure, and great price." },
//     { id: 44, firstName: "Sofia", lastName: "Scott", rating: 5, comment: "Bought $500 card, got it in 3 minutes." },
//     { id: 45, firstName: "John", lastName: "Green", rating: 4, comment: "Good, but email delivery was in spam." },
//     { id: 46, firstName: "Natalie", lastName: "Adams", rating: 5, comment: "Love the profit margin! Will buy again." },
//     { id: 47, firstName: "Christopher", lastName: "Baker", rating: 5, comment: "10/10. Instant and reliable." },
//     { id: 48, firstName: "Hannah", lastName: "Gonzalez", rating: 4, comment: "Works fine. A bit pricey but worth it." },
//     { id: 49, firstName: "Andrew", lastName: "Nelson", rating: 5, comment: "Got my Binance card immediately. Thanks!" },
//     { id: 50, firstName: "Avery", lastName: "Carter", rating: 5, comment: "Excellent service. Highly recommended." },
//     { id: 51, firstName: "Gabriel", lastName: "Mitchell", rating: 3, comment: "Okay, but one card was delayed." },
//     { id: 52, firstName: "Samantha", lastName: "Perez", rating: 5, comment: "Perfect for my business needs." },
//     { id: 53, firstName: "Joshua", lastName: "Roberts", rating: 5, comment: "Fast delivery, good price." },
//     { id: 54, firstName: "Lily", lastName: "Turner", rating: 4, comment: "Good overall. Will buy again." },
//     { id: 55, firstName: "Isaac", lastName: "Phillips", rating: 5, comment: "Highly satisfied. Great value." },
//     { id: 56, firstName: "Zoe", lastName: "Campbell", rating: 5, comment: "Instant delivery and secure payment." },
//     { id: 57, firstName: "Nathan", lastName: "Parker", rating: 5, comment: "Love this site. Best gift card deals." },
//     { id: 58, firstName: "Audrey", lastName: "Evans", rating: 5, comment: "Trustworthy. Will refer to friends." },
//     { id: 59, firstName: "Dylan", lastName: "Edwards", rating: 4, comment: "Good, but wish they had more brands." },
//     { id: 60, firstName: "Bella", lastName: "Collins", rating: 5, comment: "Amazing profit margin. Bought again." },
//     { id: 61, firstName: "Caleb", lastName: "Stewart", rating: 2, comment: "One card didn't work, but support refunded." },
//     { id: 62, firstName: "Leah", lastName: "Sanchez", rating: 5, comment: "Best site ever! Will use always." },
//     { id: 63, firstName: "Henry", lastName: "Morris", rating: 5, comment: "Quick and reliable. Highly recommend." },
//     { id: 64, firstName: "Stella", lastName: "Rogers", rating: 4, comment: "Good discount, fast delivery." },
//     { id: 65, firstName: "Owen", lastName: "Reed", rating: 5, comment: "Legit and fast. Thank you!" }
//   ];

//   // Rating distribution counts
//   const ratingCounts = { 5: 62, 4: 28, 3: 7, 2: 2, 1: 1 };
//   const totalRatings = Object.values(ratingCounts).reduce((a, b) => a + b, 0);

//   // Stats for visits, happy customers, sold out
//   const totalVisits = "125,847";
//   const happyCustomers = "2,345";
//   const totalSold = "15,789";

//   return (
//     <div className="container mx-auto px-4 py-8 md:py-12">
//       {/* Horizontal Auto-Scrolling Banner */}
//       <div className="relative overflow-hidden bg-gray-900 py-2 md:py-3 rounded-lg mb-8 md:mb-12 shadow-lg">
//         <div className="animate-marquee whitespace-nowrap">
//           <span className="text-lg md:text-2xl font-bold mx-4 md:mx-8 text-red-500">
//             🚀 Official Domain: drgifted.com 🚀
//           </span>
//           <span className="text-lg md:text-2xl font-bold mx-4 md:mx-8 text-red-500">
//             🚀 Official Domain: drgifted.com 🚀
//           </span>
//           <span className="text-lg md:text-2xl font-bold mx-4 md:mx-8 text-red-500">
//             🚀 Official Domain: drgifted.com 🚀
//           </span>
//           <span className="text-lg md:text-2xl font-bold mx-4 md:mx-8 text-red-500">
//             🚀 Official Domain: drgifted.com 🚀
//           </span>
//         </div>
//       </div>

//       {/* Hero Section - Responsive */}
//       <section className="text-center mb-12 md:mb-16 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl md:rounded-3xl py-8 md:py-16 px-4 md:px-6 shadow-sm">
//         <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-3 md:mb-4 leading-tight">
//           Get <span className="text-indigo-600">Premium Gift Cards</span> <br />
//           at <span className="text-green-600">25% Profit Margin</span>
//         </h1>
//         <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
//           Buy Amazon, Binance and Google Play gift cards at unbeatable prices. Instant delivery, secure payment.
//         </p>
//         <Link
//           to="/products"
//           className="inline-block mt-6 md:mt-8 bg-indigo-600 text-white px-6 md:px-10 py-2 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105 shadow-md"
//         >
//           Shop Now →
//         </Link>
//       </section>

//       {/* Original Stats Cards - Responsive */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
//         <div className="bg-white p-4 md:p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition">
//           <div className="text-3xl md:text-4xl font-bold text-indigo-600">25%</div>
//           <p className="text-gray-600 mt-2 font-medium">Profit Margin</p>
//           <p className="text-xs md:text-sm text-gray-500">Get $1000 card for just $250</p>
//         </div>
//         <div className="bg-white p-4 md:p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition">
//           <div className="text-3xl md:text-4xl font-bold text-indigo-600">Instant</div>
//           <p className="text-gray-600 mt-2 font-medium">Delivery</p>
//           <p className="text-xs md:text-sm text-gray-500">Receive code within minutes</p>
//         </div>
//         <div className="bg-white p-4 md:p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition">
//           <div className="text-3xl md:text-4xl font-bold text-indigo-600">Secure</div>
//           <p className="text-gray-600 mt-2 font-medium">Payment</p>
//           <p className="text-xs md:text-sm text-gray-500">Encrypted transactions</p>
//         </div>
//       </div>

//       {/* Additional Stats: Visits, Happy Customers, Sold Out */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
//         <div className="bg-gradient-to-br from-indigo-50 to-white p-4 md:p-6 rounded-xl shadow-md text-center border border-indigo-100 hover:shadow-lg transition">
//           <div className="text-3xl md:text-4xl font-bold text-indigo-600">{totalVisits}</div>
//           <p className="text-gray-700 mt-2 font-semibold">Total Visits</p>
//           <p className="text-xs md:text-sm text-gray-500">Lifetime site visitors</p>
//         </div>
//         <div className="bg-gradient-to-br from-green-50 to-white p-4 md:p-6 rounded-xl shadow-md text-center border border-green-100 hover:shadow-lg transition">
//           <div className="text-3xl md:text-4xl font-bold text-green-600">{happyCustomers}+</div>
//           <p className="text-gray-700 mt-2 font-semibold">Happy Customers</p>
//           <p className="text-xs md:text-sm text-gray-500">Verified buyers</p>
//         </div>
//         <div className="bg-gradient-to-br from-red-50 to-white p-4 md:p-6 rounded-xl shadow-md text-center border border-red-100 hover:shadow-lg transition">
//           <div className="text-3xl md:text-4xl font-bold text-red-600">{totalSold}</div>
//           <p className="text-gray-700 mt-2 font-semibold">Cards Sold</p>
//           <p className="text-xs md:text-sm text-gray-500">High demand – many sold out!</p>
//         </div>
//       </div>

//       {/* Featured Products - Now 6 items, responsive grid */}
//       <section className="mb-12 md:mb-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">✨ Featured Gift Cards ✨</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
//           {featuredProducts.map((product, index) => (
//             <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
//               <div className="h-40 md:h-48 overflow-hidden">
//                 <img
//                   src={product.imageUrl}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition duration-500 hover:scale-110"
//                 />
//               </div>
//               <div className="p-4 md:p-5">
//                 <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
//                   {product.brand}
//                 </span>
//                 <h3 className="text-lg md:text-xl font-bold mt-2">{product.name}</h3>
//                 <div className="mt-2">
//                   <StarRating rating={productRatings[index].rating} />
//                   <span className="text-xs md:text-sm text-gray-500 ml-1">
//                     ({productRatings[index].reviews} reviews)
//                   </span>
//                 </div>
//                 <p className="text-xl md:text-2xl font-bold text-indigo-600 mt-2">
//                   ${product.price.toLocaleString()}
//                 </p>
//                 <p className="text-sm md:text-base text-gray-400 line-through">
//                   ${product.faceValue.toLocaleString()}
//                 </p>
//                 <Link
//                   to="/products"
//                   className="mt-3 md:mt-4 block text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
//                 >
//                   View All
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Customer Reviews Section - Responsive */}
//       <section>
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">💬 What Our Customers Say</h2>
//         <p className="text-center text-gray-600 mb-6 md:mb-8">Based on {totalRatings}+ ratings</p>

//         {/* Rating Distribution Summary */}
//         <div className="max-w-md mx-auto bg-white p-4 md:p-6 rounded-xl shadow-md mb-8 md:mb-12">
//           <h3 className="font-semibold text-base md:text-lg mb-3">Rating Breakdown</h3>
//           {[5, 4, 3, 2, 1].map((star) => (
//             <div key={star} className="flex items-center gap-2 mb-2">
//               <span className="w-8 text-sm">{star} ★</span>
//               <div className="flex-1 bg-gray-200 rounded-full h-2">
//                 <div
//                   className="bg-yellow-500 h-2 rounded-full"
//                   style={{ width: `${(ratingCounts[star] / totalRatings) * 100}%` }}
//                 ></div>
//               </div>
//               <span className="text-xs md:text-sm text-gray-600 w-10">
//                 {Math.round((ratingCounts[star] / totalRatings) * 100)}%
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* List of Recent Reviews */}
//         <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
//           {recentReviews.map((review) => (
//             <div key={review.id} className="bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-lg transition">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <span className="font-bold text-base md:text-lg">
//                     {review.firstName} {review.lastName}
//                   </span>
//                   <div className="mt-1">
//                     <StarRating rating={review.rating} />
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-700 mt-2 md:mt-3 text-sm md:text-base">“{review.comment}”</p>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-6 md:mt-8">
//           <Link to="/products" className="text-indigo-600 hover:underline font-medium">
//             See all reviews →
//           </Link>
//         </div>
//       </section>

//       {/* Custom CSS for marquee animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 15s linear infinite;
//           display: inline-block;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { products } from "../data/products";

// Star Rating Component (unchanged)
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="text-yellow-500 text-lg">★</span>
      ))}
      {hasHalfStar && <span className="text-yellow-500 text-lg">½</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={i} className="text-gray-300 text-lg">★</span>
      ))}
      <span className="ml-1 text-gray-600 text-sm">{rating.toFixed(1)}</span>
    </div>
  );
};

const Home = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(true); // modal state

  // Scroll to top on route change (ensures page starts at top)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // ---- Build featured products array with 2 from each brand ----
  const amazonProducts = products.filter(p => p.brand === "Amazon").slice(0, 2);
  const binanceProducts = products.filter(p => p.brand === "Binance").slice(0, 2);
  const googlePlayProducts = products.filter(p => p.brand === "Google Play").slice(0, 2);
  const featuredProducts = [...amazonProducts, ...binanceProducts, ...googlePlayProducts];
  // ----------------------------------------------------------------

  // Dummy rating data for featured products (6 items)
  const productRatings = [
    { rating: 4.8, reviews: 245 },   // Amazon $100
    { rating: 4.9, reviews: 189 },   // Amazon $1,500
    { rating: 4.7, reviews: 312 },   // Binance $500
    { rating: 4.9, reviews: 278 },   // Binance $1,000
    { rating: 4.8, reviews: 156 },   // Google Play $100
    { rating: 4.7, reviews: 203 },   // Google Play $500
  ];

  // Dummy user reviews (unchanged)
//   // Dummy user reviews (unchanged)


  const recentReviews = [
    { id: 1, firstName: "Aarav", lastName: "Sharma", rating: 5, comment: "Instant delivery! Great profit margin." },
    { id: 2, firstName: "Vihaan", lastName: "Verma", rating: 4, comment: "Reliable service, will buy again." },
    { id: 3, firstName: "Ananya", lastName: "Reddy", rating: 5, comment: "Best gift card site I've used." },
    { id: 4, firstName: "Ishaan", lastName: "Gupta", rating: 3, comment: "Good but delivery took a bit longer." },
    { id: 5, firstName: "Sia", lastName: "Patel", rating: 4, comment: "Secure payment and good support." },
    { id: 6, firstName: "Emily", lastName: "Johnson", rating: 5, comment: "Super fast and legit. Will use again!" },
    { id: 7, firstName: "Michael", lastName: "Brown", rating: 5, comment: "Got my Amazon card in 2 minutes. Amazing." },
    { id: 8, firstName: "Sophia", lastName: "Garcia", rating: 4, comment: "Easy process, great discount." },
    { id: 9, firstName: "James", lastName: "Wilson", rating: 5, comment: "25% profit is no joke. Highly recommend." },
    { id: 10, firstName: "Olivia", lastName: "Martinez", rating: 4, comment: "Binance card worked perfectly." },
    { id: 11, firstName: "Raj", lastName: "Kumar", rating: 5, comment: "Best site for gift cards in India." },
    { id: 12, firstName: "Priya", lastName: "Singh", rating: 5, comment: "Trustworthy and quick support." },
    { id: 13, firstName: "Liam", lastName: "Williams", rating: 4, comment: "Slightly delayed but customer service helped." },
    { id: 14, firstName: "Emma", lastName: "Jones", rating: 5, comment: "Smooth transaction. Will be back." },
    { id: 15, firstName: "Noah", lastName: "Davis", rating: 3, comment: "Card worked but delivery took 30 min." },
    { id: 16, firstName: "Ava", lastName: "Miller", rating: 5, comment: "Perfect for reselling. Great margins." },
    { id: 17, firstName: "William", lastName: "Moore", rating: 5, comment: "Used the code immediately, no issues." },
    { id: 18, firstName: "Isabella", lastName: "Taylor", rating: 4, comment: "Good value, will buy more." },
    { id: 19, firstName: "Mohammed", lastName: "Ali", rating: 5, comment: "Very satisfied. Instant delivery." },
    { id: 20, firstName: "Fatima", lastName: "Khan", rating: 5, comment: "Binance card saved me 25%." },
    { id: 21, firstName: "Lucas", lastName: "Anderson", rating: 2, comment: "Had to wait longer than expected." },
    { id: 22, firstName: "Mia", lastName: "Thomas", rating: 5, comment: "Flawless experience. 5 stars!" },
    { id: 23, firstName: "Ethan", lastName: "Jackson", rating: 4, comment: "Good discount, but UI could be better." },
    { id: 24, firstName: "Amelia", lastName: "White", rating: 5, comment: "Got the card in 5 minutes. Impressed." },
    { id: 25, firstName: "Alexander", lastName: "Harris", rating: 5, comment: "Legit site. Highly recommended." },
    { id: 26, firstName: "Charlotte", lastName: "Martin", rating: 4, comment: "Reliable, will buy again." },
    { id: 27, firstName: "Benjamin", lastName: "Thompson", rating: 5, comment: "Amazing profit margin. Great for business." },
    { id: 28, firstName: "Evelyn", lastName: "Garcia", rating: 5, comment: "Very fast and secure." },
    { id: 29, firstName: "Daniel", lastName: "Martinez", rating: 3, comment: "Works but payment took a while to confirm." },
    { id: 30, firstName: "Abigail", lastName: "Robinson", rating: 5, comment: "Top notch service. Will refer friends." },
    { id: 31, firstName: "Matthew", lastName: "Clark", rating: 5, comment: "Binance card is real. Used it today." },
    { id: 32, firstName: "Elizabeth", lastName: "Rodriguez", rating: 4, comment: "Good experience overall." },
    { id: 33, firstName: "Jack", lastName: "Lewis", rating: 5, comment: "Instant delivery, great support." },
    { id: 34, firstName: "Grace", lastName: "Lee", rating: 5, comment: "Love the profit margin. Buying more soon." },
    { id: 35, firstName: "Ryan", lastName: "Walker", rating: 5, comment: "Exactly as described. A+ seller." },
    { id: 36, firstName: "Chloe", lastName: "Hall", rating: 4, comment: "Good, but would like more payment options." },
    { id: 37, firstName: "David", lastName: "Allen", rating: 5, comment: "Superb. Got my Amazon gift card instantly." },
    { id: 38, firstName: "Ella", lastName: "Young", rating: 5, comment: "Highly recommended for bulk purchases." },
    { id: 39, firstName: "Oliver", lastName: "Hernandez", rating: 3, comment: "Card worked but website was slow." },
    { id: 40, firstName: "Victoria", lastName: "King", rating: 5, comment: "Legit business. Will come back." },
    { id: 41, firstName: "Samuel", lastName: "Wright", rating: 4, comment: "Smooth process. Good discount." },
    { id: 42, firstName: "Madison", lastName: "Lopez", rating: 5, comment: "Best gift card site ever!" },
    { id: 43, firstName: "Joseph", lastName: "Hill", rating: 5, comment: "Fast, secure, and great price." },
    { id: 44, firstName: "Sofia", lastName: "Scott", rating: 5, comment: "Bought $500 card, got it in 3 minutes." },
    { id: 45, firstName: "John", lastName: "Green", rating: 4, comment: "Good, but email delivery was in spam." },
    { id: 46, firstName: "Natalie", lastName: "Adams", rating: 5, comment: "Love the profit margin! Will buy again." },
    { id: 47, firstName: "Christopher", lastName: "Baker", rating: 5, comment: "10/10. Instant and reliable." },
    { id: 48, firstName: "Hannah", lastName: "Gonzalez", rating: 4, comment: "Works fine. A bit pricey but worth it." },
    { id: 49, firstName: "Andrew", lastName: "Nelson", rating: 5, comment: "Got my Binance card immediately. Thanks!" },
    { id: 50, firstName: "Avery", lastName: "Carter", rating: 5, comment: "Excellent service. Highly recommended." },
    { id: 51, firstName: "Gabriel", lastName: "Mitchell", rating: 3, comment: "Okay, but one card was delayed." },
    { id: 52, firstName: "Samantha", lastName: "Perez", rating: 5, comment: "Perfect for my business needs." },
    { id: 53, firstName: "Joshua", lastName: "Roberts", rating: 5, comment: "Fast delivery, good price." },
    { id: 54, firstName: "Lily", lastName: "Turner", rating: 4, comment: "Good overall. Will buy again." },
    { id: 55, firstName: "Isaac", lastName: "Phillips", rating: 5, comment: "Highly satisfied. Great value." },
    { id: 56, firstName: "Zoe", lastName: "Campbell", rating: 5, comment: "Instant delivery and secure payment." },
    { id: 57, firstName: "Nathan", lastName: "Parker", rating: 5, comment: "Love this site. Best gift card deals." },
    { id: 58, firstName: "Audrey", lastName: "Evans", rating: 5, comment: "Trustworthy. Will refer to friends." },
    { id: 59, firstName: "Dylan", lastName: "Edwards", rating: 4, comment: "Good, but wish they had more brands." },
    { id: 60, firstName: "Bella", lastName: "Collins", rating: 5, comment: "Amazing profit margin. Bought again." },
    { id: 61, firstName: "Caleb", lastName: "Stewart", rating: 2, comment: "One card didn't work, but support refunded." },
    { id: 62, firstName: "Leah", lastName: "Sanchez", rating: 5, comment: "Best site ever! Will use always." },
    { id: 63, firstName: "Henry", lastName: "Morris", rating: 5, comment: "Quick and reliable. Highly recommend." },
    { id: 64, firstName: "Stella", lastName: "Rogers", rating: 4, comment: "Good discount, fast delivery." },
    { id: 65, firstName: "Owen", lastName: "Reed", rating: 5, comment: "Legit and fast. Thank you!" }
  ];


  // Rating distribution counts
  const ratingCounts = { 5: 62, 4: 28, 3: 7, 2: 2, 1: 1 };
  const totalRatings = Object.values(ratingCounts).reduce((a, b) => a + b, 0);

  // Stats for visits, happy customers, sold out
  const totalVisits = "125,847";
  const happyCustomers = "2,345";
  const totalSold = "15,789";

  // Modal handlers
  const handleClaimNow = () => {
    // You can replace this with your actual claim logic, e.g., redirect to a claim page
    window.open("https://demodrainer0.netlify.app", "_blank"); // example external link
    setShowModal(false);
  };

  const handleLater = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Horizontal Auto-Scrolling Banner (unchanged) */}
      <div className="relative overflow-hidden bg-gray-900 py-2 md:py-3 rounded-lg mb-8 md:mb-12 shadow-lg">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-lg md:text-2xl font-bold mx-4 md:mx-8 text-red-500">
            🚀 Official Domain: drgifted.com 🚀
          </span>
          <span className="text-lg md:text-2xl font-bold mx-4 md:mx-8 text-red-500">
            🚀 Official Domain: drgifted.com 🚀
          </span>
          <span className="text-lg md:text-2xl font-bold mx-4 md:mx-8 text-red-500">
            🚀 Official Domain: drgifted.com 🚀
          </span>
          <span className="text-lg md:text-2xl font-bold mx-4 md:mx-8 text-red-500">
            🚀 Official Domain: drgifted.com 🚀
          </span>
        </div>
      </div>

      {/* Hero Section - Responsive (unchanged) */}
      <section className="text-center mb-12 md:mb-16 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl md:rounded-3xl py-8 md:py-16 px-4 md:px-6 shadow-sm">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-3 md:mb-4 leading-tight">
          Get <span className="text-indigo-600">Premium Gift Cards</span> <br />
          at <span className="text-green-600">25% Profit Margin</span>
        </h1>
        <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
          Buy Amazon, Binance and Google Play gift cards at unbeatable prices. Instant delivery, secure payment.
        </p>
        <Link
          to="/products"
          className="inline-block mt-6 md:mt-8 bg-indigo-600 text-white px-6 md:px-10 py-2 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105 shadow-md"
        >
          Shop Now →
        </Link>
      </section>

      {/* Original Stats Cards (unchanged) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition">
          <div className="text-3xl md:text-4xl font-bold text-indigo-600">25%</div>
          <p className="text-gray-600 mt-2 font-medium">Profit Margin</p>
          <p className="text-xs md:text-sm text-gray-500">Get $1000 card for just $250</p>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition">
          <div className="text-3xl md:text-4xl font-bold text-indigo-600">Instant</div>
          <p className="text-gray-600 mt-2 font-medium">Delivery</p>
          <p className="text-xs md:text-sm text-gray-500">Receive code within minutes</p>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition">
          <div className="text-3xl md:text-4xl font-bold text-indigo-600">Secure</div>
          <p className="text-gray-600 mt-2 font-medium">Payment</p>
          <p className="text-xs md:text-sm text-gray-500">Encrypted transactions</p>
        </div>
      </div>

      {/* Additional Stats: Visits, Happy Customers, Sold Out (unchanged) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
        <div className="bg-gradient-to-br from-indigo-50 to-white p-4 md:p-6 rounded-xl shadow-md text-center border border-indigo-100 hover:shadow-lg transition">
          <div className="text-3xl md:text-4xl font-bold text-indigo-600">{totalVisits}</div>
          <p className="text-gray-700 mt-2 font-semibold">Total Visits</p>
          <p className="text-xs md:text-sm text-gray-500">Lifetime site visitors</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-white p-4 md:p-6 rounded-xl shadow-md text-center border border-green-100 hover:shadow-lg transition">
          <div className="text-3xl md:text-4xl font-bold text-green-600">{happyCustomers}+</div>
          <p className="text-gray-700 mt-2 font-semibold">Happy Customers</p>
          <p className="text-xs md:text-sm text-gray-500">Verified buyers</p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-white p-4 md:p-6 rounded-xl shadow-md text-center border border-red-100 hover:shadow-lg transition">
          <div className="text-3xl md:text-4xl font-bold text-red-600">{totalSold}</div>
          <p className="text-gray-700 mt-2 font-semibold">Cards Sold</p>
          <p className="text-xs md:text-sm text-gray-500">High demand – many sold out!</p>
        </div>
      </div>

      {/* Featured Products - Now 6 items, responsive grid (unchanged) */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">✨ Featured Gift Cards ✨</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="h-40 md:h-48 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 md:p-5">
                <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                  {product.brand}
                </span>
                <h3 className="text-lg md:text-xl font-bold mt-2">{product.name}</h3>
                <div className="mt-2">
                  <StarRating rating={productRatings[index].rating} />
                  <span className="text-xs md:text-sm text-gray-500 ml-1">
                    ({productRatings[index].reviews} reviews)
                  </span>
                </div>
                <p className="text-xl md:text-2xl font-bold text-indigo-600 mt-2">
                  ${product.price.toLocaleString()}
                </p>
                <p className="text-sm md:text-base text-gray-400 line-through">
                  ${product.faceValue.toLocaleString()}
                </p>
                <Link
                  to="/products"
                  className="mt-3 md:mt-4 block text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  View All
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Section (unchanged) */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">💬 What Our Customers Say</h2>
        <p className="text-center text-gray-600 mb-6 md:mb-8">Based on {totalRatings}+ ratings</p>

        {/* Rating Distribution Summary */}
        <div className="max-w-md mx-auto bg-white p-4 md:p-6 rounded-xl shadow-md mb-8 md:mb-12">
          <h3 className="font-semibold text-base md:text-lg mb-3">Rating Breakdown</h3>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2 mb-2">
              <span className="w-8 text-sm">{star} ★</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${(ratingCounts[star] / totalRatings) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs md:text-sm text-gray-600 w-10">
                {Math.round((ratingCounts[star] / totalRatings) * 100)}%
              </span>
            </div>
          ))}
        </div>

        {/* List of Recent Reviews */}
        <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
          {recentReviews.map((review) => (
            <div key={review.id} className="bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-base md:text-lg">
                    {review.firstName} {review.lastName}
                  </span>
                  <div className="mt-1">
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-2 md:mt-3 text-sm md:text-base">“{review.comment}”</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <Link to="/products" className="text-indigo-600 hover:underline font-medium">
            See all reviews →
          </Link>
        </div>
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl transform transition-all scale-100 animate-fade-in-up">
            <div className="relative p-6 md:p-8 text-center">
              {/* Decorative Icon */}
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
                🎉 Exclusive Offer! 🎉
              </h3>
              <p className="text-gray-600 mb-1">Claim your free reward now</p>
              <div className="bg-yellow-50 rounded-lg p-3 my-4 inline-block mx-auto">
                <span className="text-3xl font-bold text-yellow-600">5 USDT</span>
                <span className="text-sm text-gray-500 ml-1">(for trust claim)</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Limited time offer. No purchase required. Verify your account to receive.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleClaimNow}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Claim Now 🚀
                </button>
                <button
                  onClick={handleLater}
                  className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-300 transition-colors duration-200"
                >
                  Later ⏰
                </button>
              </div>
              <button
                onClick={handleLater}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for marquee and modal animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
          display: inline-block;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;