"use client";

export default function PriceMovers() {
  const movers = [
    { name: "LT", change: "65.0 (1.77%)", price: "₹3737.32" },
    { name: "BHARTIARTL", change: "27.4 (1.47%)", price: "₹1891.35" },
    { name: "AXISBANK", change: "25.5 (2.2%)", price: "₹1184.59" },
    { name: "KOTAKBANK", change: "38.2 (1.85%)", price: "₹2103.06" },
    { name: "TATASTEEL", change: "5.77 (3.44%)", price: "₹173.5" },
  ];

  return (
    <div className="bg-white   shadow rounded-xl p-12">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Price Movers
      </h3>
      <div className="overflow-y-auto max-h-64">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-500 font-medium">
              <th className="py-2"> </th>
              <th className="py-2">Change (Price & %)</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {movers.map((mover, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 font-medium text-gray-800">{mover.name}</td>
                <td className="py-3 text-green-600 font-medium">{mover.change}</td>
                <td className="py-3 text-gray-700">{mover.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
