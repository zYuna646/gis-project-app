'use client'


import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import dataWilayah from '../components/dataWilayah';

const DataTabularPage = () => {
    const allData = dataWilayah.features;
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState(allData.slice(0, itemsPerPage));

    const handlePageClick = ({ selected }) => {
        const startIndex = selected * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setData(allData.slice(startIndex, endIndex));
        setCurrentPage(selected);
    };

    return (
        <>
            <div className="flex bg-cover bg-center bg-[url('/assets/sawah.jpg')] h-screen">
                <div className="bg-black bg-opacity-50 w-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold">SIG-PBB</h1>
                        <h3 className="text-2xl font-bold mt-2">Sistem Informasi Geografis</h3>
                        <h3 className="text-2xl font-bold mb-4">Pertanian Kabupaten Bone Bolango</h3>
                        <div className="border-b-2 border-lime-400 w-16 mx-auto mb-6"></div>
                        <div className="max-w-4xl mx-auto px-4 py-8">
                            <h1 className="text-3xl font-bold mb-4">Data Spasial</h1>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr className="bg-gray-800 text-white">
                                            <th className="px-4 py-2">NAMOBJ</th>
                                            <th className="px-4 py-2">DESA</th>
                                            <th className="px-4 py-2">KECAMATAN</th>
                                            <th className="px-4 py-2">KABUPATEN</th>
                                            <th className="px-4 py-2">PROVINSI</th>
                                            <th className="px-4 py-2">KETERANGAN</th>
                                            <th className="px-4 py-2">LUAS_HA</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((feature, index) => (
                                            <tr key={index} className="bg-gray-700">
                                                <td className="px-4 py-2">{feature.properties.NAMOBJ}</td>
                                                <td className="px-4 py-2">{feature.properties.DESA}</td>
                                                <td className="px-4 py-2">{feature.properties.KECAMATAN}</td>
                                                <td className="px-4 py-2">{feature.properties.KABUPATEN_}</td>
                                                <td className="px-4 py-2">{feature.properties.PROVINSI}</td>
                                                <td className="px-4 py-2">{feature.properties.KETERANGAN}</td>
                                                <td className="px-4 py-2">{feature.properties.LUAS_HA}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={Math.ceil(allData.length / itemsPerPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick} // Changed to handlePageClick
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataTabularPage;
