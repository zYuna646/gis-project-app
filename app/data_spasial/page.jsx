// DataSpasialPage.jsx
import React from 'react';
import MapComponent from '../components/MapComponent';

const DataSpasialPage = () => {
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
                            <h1>Map</h1>
                            <MapComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataSpasialPage;
