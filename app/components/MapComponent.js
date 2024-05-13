// MapComponent.jsx
'use client'

// MapComponent.jsx
import { useEffect, useRef } from 'react';

const MapComponent = () => {
  const mapRef = useRef(null); // Gunakan useRef untuk menyimpan referensi ke elemen peta

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !mapRef.current._leaflet_id) { // Periksa apakah peta belum diinisialisasi
      import('leaflet').then((L) => {
        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        mapRef.current = map; // Simpan referensi ke elemen peta
      });
    }
  }, [mapRef.current]); // Gunakan dependensi mapRef.current agar useEffect dijalankan saat elemen "map" berubah

  return <div id="map" ref={mapRef} style={{ height: '400px' }}></div>;
};

export default MapComponent;
