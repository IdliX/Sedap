import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="p-6 bg-gray-50 min-h-screen overflow-auto">
      <PageHeader title="User List" breadcrumb="Dashboard / Users" />

      <div className="mt-6 overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full text-sm text-gray-800 bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left border-b">ID</th>
              <th className="p-4 text-left border-b">Name</th>
              <th className="p-4 text-left border-b">Email</th>
              <th className="p-4 text-left border-b">Phone</th>
              <th className="p-4 text-left border-b">Username</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-4 border-b">{user.id}</td>
                <td className="p-4 border-b">
                  {user.firstName} {user.lastName}
                </td>
                <td className="p-4 border-b">{user.email}</td>
                <td className="p-4 border-b">{user.phone}</td>
                <td className="p-4 border-b">{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center space-x-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${
              i + 1 === currentPage
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 hover:bg-blue-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
