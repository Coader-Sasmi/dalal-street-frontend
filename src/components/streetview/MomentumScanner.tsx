"use client";

export default function MomentumScanner() {
  const stocks = [
    { name: "Kotak Bank", price: "₹2102.4", target: "2301.9", volume: "43,65,978", sentiment: "Neutral" },
    { name: "Sun Pharmaceutical", price: "₹1632.2", target: "1952.25", volume: "37,53,892", sentiment: "Neutral" },
    { name: "HCL Technologies", price: "₹1394", target: "2012.2", volume: "25,11,338", sentiment: "Neutral" },
    { name: "Axis Bank", price: "₹1177.5", target: "1247", volume: "81,04,072", sentiment: "Neutral" },
    { name: "Hindustan Aeronautics", price: "₹4871.5", target: "5165", volume: "8,83,687", sentiment: "Neutral" },
    { name: "Titan", price: "₹3451.9", target: "3782", volume: "15,05,905", sentiment: "Neutral" },
  ];

  return (
    <div className="bg-white  shadow rounded-xl p-12">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Intraday Momentum Scanner: <span className="font-bold">Stocks Breaking Out Right Now</span>
      </h3>
      <div className="overflow-y-auto max-h-72">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-500 font-medium border-b border-gray-200">
              <th className="py-2">Stock</th>
              <th className="py-2">Price</th>
              <th className="py-2">Target</th>
              <th className="py-2">Volume</th>
              <th className="py-2">Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3 font-medium text-gray-800">{stock.name}</td>
                <td className="py-3">{stock.price}</td>
                <td className="py-3">{stock.target}</td>
                <td className="py-3">{stock.volume}</td>
                <td className="py-3 text-gray-600">{stock.sentiment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
