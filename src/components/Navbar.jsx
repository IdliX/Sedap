import { NavLink, useLocation } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `relative pb-1 transition-all duration-300 font-sans ${
    isActive
      ? 'text-green-900 font-semibold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-green-900'
      : "text-gray-600 hover:text-green-500"
  }`;

const Navbar = () => {
  const location = useLocation(); // Mendapatkan lokasi aktif
  const isProdukActive = location.hash === "#produk"; // Cek apakah hash adalah #produk
  const isHomeActive = location.hash === "#home"; // Cek apakah hash adalah #home
  const isUlasanActive = location.hash === "#ulasan"; // Cek apakah hash adalah #ulasan
  const isGuestActive = location.hash === "#guest"; // Cek apakah hash adalah #guest

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white font-sans sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-sans font-extrabold text-gray-800">
          <span className="text-black">Sedap</span>
          <span className="text-green-500">.</span>
        </h1>
      </div>
      <div className="flex items-center gap-6 text-base">
        {/* Home Link */}
        <a
          href="#home"
          className={`${linkClass({ isActive: isHomeActive })} transition-all`}
        >
          Home
        </a>
        {/* Produk Link */}
        <a
          href="#produk"
          className={`${linkClass({ isActive: isProdukActive })} transition-all`}
        >
          Produk
        </a>
        {/* Ulasan Link */}
        <a
          href="#ulasan"
          className={`${linkClass({ isActive: isUlasanActive })} transition-all`}
        >
          Ulasan
        </a>
        {/* Login Link */}
        <NavLink
          to="/login"
          className="mr-2 bg-green-500 text-white px-4 py-1 rounded-lg"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
