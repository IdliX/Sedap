import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../assets/Customers.json"; 

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 10;
  const [showModal, setShowModal] = useState(false); 
  const [newCustomer, setNewCustomer] = useState({
    customer_name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  useEffect(() => {
    setCustomers(customersData);
  }, []);

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(customers.length / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, { ...newCustomer, customer_id: `CUST${customers.length + 1}` }]);
    setShowModal(false);
    setNewCustomer({ customer_name: "", email: "", phone: "", loyalty: "Bronze" });
  };

  return (
    <div>
      <PageHeader title="Customers" breadcrumb="Dashboard / Customer List">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 transition duration-300"
        >
          Add New Customers
        </button>
      </PageHeader>

      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Customer</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                <input
                  type="text"
                  name="customer_name"
                  value={newCustomer.customer_name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newCustomer.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={newCustomer.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Loyalty</label>
                <select
                  name="loyalty"
                  value={newCustomer.loyalty}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
                >
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Add Customer
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
              <th className="py-3 px-4 text-left">Customer ID</th>
              <th className="py-3 px-4 text-left">Customer Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.customer_id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{customer.customer_id}</td>
                <td className="py-3 px-4">{customer.customer_name}</td>
                <td className="py-3 px-4">{customer.email}</td>
                <td className="py-3 px-4">{customer.phone}</td>
                <td className="py-3 px-4">{customer.loyalty}</td>
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
