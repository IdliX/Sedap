import { useState, useEffect } from "react";
import ordersData from "../assets/Product.json";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(orders.length / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Cards */}
      <div id="produk" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentOrders.map((order) => (
          <div key={order.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={order.gambar} alt={order.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{order.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{order.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-gray-900">Rp. {order.price}</span>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                  Pesan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
