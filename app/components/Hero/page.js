import React from "react";
const Hero = () => {
  return (
    <>
      <div className="flex bg-cover bg-center bg-[url('/assets/sawah.jpg')] h-[100vh]">
        <div className="bg-black w-full bg-opacity-50 flex items-center justify-center">
          <div className="text-center w-1/2 text-white">
            <h1 className="text-4xl font-bold">SIG-PBB</h1>
            <h3 className="text-2xl font-bold ">Sistem Informasi Geografis</h3>
            <h3 className="text-2xl font-bold">
              Pertanian Kabupaten Bone Bolango
            </h3>
            <div class="border-b-2 border-lime-400"></div>
            <p className="text-lg text-center">
              Selamat datang di SIG Pertanian Bone Bolango, sebuah platform yang
              menyajikan informasi terbaru mengenai data spasial dan data
              tabular dalam sektor pertanian di wilayah Bone Bolango. Dengan
              teknologi canggih dan akses mudah, kami memberikan pemahaman
              mendalam tentang kondisi geografis, tanah, dan cuaca, serta data
              tabular terkait hasil produksi dan efisiensi pengelolaan
              pertanian.
            </p>
            <button className="outline outline-2 outline-offset-2 hover:bg-lime-700  transition-colors duration-300 ease-in-out text-white font-bold py-2 px-4 rounded mt-4">
              Data Spasial
            </button>
            <button className="outline outline-2 outline-offset-2 ml-4 hover:bg-lime-700  transition-colors duration-300 ease-in-out text-white font-bold py-2 px-4 rounded mt-4">
              Data Tabular
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
