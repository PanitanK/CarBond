import React, { useState, useEffect } from 'react';

const Geolocate = ({ latitude, longitude, onAddressUpdate }) => {
  const [address, setAddress] = useState({ subdistrict: '', district: '', province: '' });

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const apiKey = 'AIzaSyCREEB2-SgUZ8ozGu4HEUxv-lQiSqjuevE';
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'OK') {
          const components = data.results[0].address_components;
          const getAddressComponent = (type) => components.find((component) => component.types.includes(type))?.long_name;
          const district = getAddressComponent('administrative_area_level_2');
          const province = getAddressComponent('administrative_area_level_1');
          const subdistrict = components[1].long_name;
          setAddress({ subdistrict, district, province });
          onAddressUpdate({ subdistrict, district, province });
        } else {
          console.error('Error fetching address:', data.status);
        }
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    };

    if (latitude && longitude) {
      fetchAddress();
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <p>: {address.subdistrict} {address.district} {address.province}</p>
    </div>
  );
};

export default Geolocate;
