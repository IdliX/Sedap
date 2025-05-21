export default function Banner() {
  return (
    <section className="flex items-center justify-center w-full h-auto bg-gray-100 px-6 py-10">
      {/* Teks Kiri */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-4xl font-bold text-gray-800">Selamat Datang di Toko Makanan Kami!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Nikmati menu lezat yang telah diwariskan turun-temurun, setiap hidangan membawa cita rasa autentik dan kenangan masa lalu.
        </p>
        <a 
          href="#produk" 
          className="mt-6 inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Lihat Menu Kami
        </a>
      </div>

      {/* Gambar Kanan */}
      <div className="w-full md:w-[500px] h-[300px] relative overflow-hidden rounded-lg shadow-lg">
        <img 
          src="./img/sate.jpg" 
          alt="Toko Makanan" 
          className="object-cover w-full h-full" 
        />
      </div>
    </section>
  );
}
