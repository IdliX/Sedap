export default function Footer() {
    return (
      <footer className=" bg-green-100 text-black-700 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
          <h1 className="text-4xl font-sans font-extrabold text-gray-800">
          <span className="text-black">Sedap</span>
          <span className="text-green-500">.</span>
        </h1>
          </div>
  
          <div>
            <h3 className="text-sm font-semibold uppercase mb-2">Navigasi</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-green-500 transition">Beranda</a></li>
              <li><a href="#" className="hover:text-green-500 transition">About</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Produk</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Ulasan</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-sm font-semibold uppercase mb-2">Kontak</h3>
            <p className="text-sm">Jl. Umban Sari, Rumbai</p>
            <p className="text-sm">Nomor HP: 08 1212 1212</p>
            <p className="text-sm">Email: sedap@sedap.com</p>
          </div>
        </div>
      </footer>
    );
  }
