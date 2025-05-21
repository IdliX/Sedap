import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../assets/Orders.json";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;
  const [showModal, setShowModal] = useState(false);
  const [newOrder, setNewOrder] = useState({
    order_id: "",
    customer_name: "",
    status: "Pending",
    total_price: "",
    order_date: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({
      ...newOrder,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setOrders([
      ...orders,
      { ...newOrder, order_id: `ORD${orders.length + 1}`, order_date: new Date().toISOString() },
    ]);
    setShowModal(false);
    setNewOrder({ order_id: "", customer_name: "", status: "Pending", total_price: "", order_date: "" }); 
  };

  return (
    <div>
      <PageHeader title="Orders" breadcrumb="Dashboard / Order List">
        <button
          onClick={() => setShowModal(true)} 
          className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 transition duration-300"
        >
          Add New Order
        </button>
      </PageHeader>

      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Order</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                <input
                  type="text"
                  name="customer_name"
                  value={newOrder.customer_name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  value={newOrder.status}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Total Price</label>
                <input
                  type="number"
                  name="total_price"
                  value={newOrder.total_price}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Order Date</label>
                <input
                  type="date"
                  name="order_date"
                  value={newOrder.order_date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Add Order
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">Customer Name</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Total Price</th>
              <th className="py-3 px-4 text-left">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.order_id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{order.order_id}</td>
                <td className="py-3 px-4">{order.customer_name}</td>
                <td className="py-3 px-4">{order.status}</td>
                <td className="py-3 px-4">{order.total_price}</td>
                <td className="py-3 px-4">{new Date(order.order_date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-center">
        <nav>
          <ul className="flex list-none space-x-2">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 border rounded-lg ${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500 hover:bg-blue-100"
                  } transition duration-300`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
