import dataWilayah from "./dataWilayah";

const Tabular = () => {
  const { features } = dataWilayah; // Destructure the features array from dataWilayah
  return (
    <tbody>
      {features.map((feature, index) => ( // Map over the features array
        <tr key={index} className="bg-gray-700"> {/* Use index as key */}
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
  );
};

export default Tabular;
