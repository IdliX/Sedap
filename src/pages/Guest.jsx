import React from 'react';
import Banner from "../components/Banner";
import About from '../components/About';
import Ulasan from '../components/Ulasan';
// import Ulasan from './Ulasan';
import Produk2 from './Produk2';
import CekAnggota from '../components/CekAnggota'

export default function Guest(){
  return (
    <>
    <Banner/>
    <About/>
     <h2 className="text-2xl font-bold flex flex-wrap justify-center">Berikut Produk Ungulan Kami</h2>
      <Produk2/>
    <Ulasan/>
    <CekAnggota/>
    </>
  );
};

