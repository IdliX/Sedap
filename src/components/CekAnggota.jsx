import React, { useState } from 'react';
import membersData from '../assets/Members.json';  // Impor data JSON secara langsung

// Fungsi untuk memvalidasi email
const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const CekAnggota = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [memberData, setMemberData] = useState(null);

  // Menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi email
    if (!email) {
      setMessage('❌ Email tidak boleh kosong.');
      return;
    }
    if (!isValidEmail(email)) {
      setMessage('❌ Email tidak valid.');
      return;
    }

    // Mencari member berdasarkan email
    const member = membersData.find((m) => m.email.toLowerCase() === email.toLowerCase());

    if (member) {
      setMemberData(member);
      setMessage(`🧾 Selamat datang, ${member.nama}! Anda adalah member ${member.tipe_member}.`);
    } else {
      setMemberData(null);
      setMessage('❌ Email tidak terdaftar sebagai member.');
    }
  };

  return (
    <div className="container mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">Cek Keanggotaan</h1>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded-lg"
            placeholder="Masukkan Email"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-lg w-full"
          >
            Cek Keanggotaan
          </button>
        </form>

        {message && (
          <div className="mt-6 text-center text-lg font-sans">
            <p className={`${memberData ? 'text-green-700' : 'text-red-500'}`}>
              {message}
            </p>

            {memberData && (
              <div className="mt-4">
                <div
                  className={`border p-4 rounded-lg ${memberData.tipe_member === 'platinum' ? 'bg-yellow-100' : ''}`}
                >
                  <p>💎 Member ID: {memberData.member_id}</p>
                  <p>📝 Nama: {memberData.nama}</p>
                  <p>Email: {memberData.email}</p>
                  <p>Jenis Member: {memberData.tipe_member}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CekAnggota;
