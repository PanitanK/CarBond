import React, { useState } from 'react';
import './css/Comp.css';

const Credential = () => {
  const [formData, setFormData] = useState({
    plot_number: '',
    plot_document_number: '',
    plot_type: '',
    plot_code: '',
    full_name: '',
    address: '',
    phone_number: '',
    sub_district: '',
    district: '',
    province: '',
    plot_area_rai: '',
    area_according_to_document: '',
    area_according_to_shapefile: '',
    joint_area: '',
    latitude: '',
    longitude: '',
    pruning: '',
    waste_management: '',
    water_source: '',
    water_management: '',
    sample_plot_size: '',
    planting_distance: '',
    note: '',
    plot_description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
    <h1> Credential</h1>
    <form>
      <label>
        หมายเลขแปลงที่:
        <input type="text" name="plot_number" value={formData.plot_number} onChange={handleChange} />
      </label>
      <label>
        เลขโฉนด:
        <input type="text" name="plot_document_number" value={formData.plot_document_number} onChange={handleChange} />
      </label>
      <label>
        ประเภทแปลง:
        <input type="text" name="plot_type" value={formData.plot_type} onChange={handleChange} />
      </label>
      <label>
        รหัสแปลง:
        <input type="text" name="plot_code" value={formData.plot_code} onChange={handleChange} />
      </label>
      <label>
        ชื่อ-นามสกุล:
        <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} />
      </label>
      <label>
        ที่อยู่:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        เบอร์โทรศัพท์:
        <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
      </label>
      <label>
        ตำบล:
        <input type="text" name="sub_district" value={formData.sub_district} onChange={handleChange} />
      </label>
      <label>
        อำเภอ:
        <input type="text" name="district" value={formData.district} onChange={handleChange} />
      </label>
      <label>
        จังหวัด:
        <input type="text" name="province" value={formData.province} onChange={handleChange} />
      </label>
      <label>
        ขนาดพื้นที่ (ไร่):
        <input type="text" name="plot_area_rai" value={formData.plot_area_rai} onChange={handleChange} />
      </label>
      <label>
        พื้นที่ตามเอกสาร (ไร่):
        <input type="text" name="area_according_to_document" value={formData.area_according_to_document} onChange={handleChange} />
      </label>
      <label>
        พื้นที่ตาม shapefile (ไร่):
        <input type="text" name="area_according_to_shapefile" value={formData.area_according_to_shapefile} onChange={handleChange} />
      </label>
      <label>
        พื้นที่เข้าร่วม (ไร่):
        <input type="text" name="joint_area" value={formData.joint_area} onChange={handleChange} />
      </label>
      <label>
        ละติจูด:
        <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} />
      </label>
      <label>
        ลองจิจูด:
        <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} />
      </label>
      <label>
        การจัดการต้นไม้:
        <input type="text" name="pruning" value={formData.pruning} onChange={handleChange} />
      </label>
      <label>
        การจัดการวัสดุเหลือทิ้ง:
        <input type="text" name="waste_management" value={formData.waste_management} onChange={handleChange} />
      </label>
      <label>
        แหล่งน้ำเพื่อการเพาะปลูก:
        <input type="text" name="water_source" value={formData.water_source} onChange={handleChange} />
      </label>
      <label>
        การจัดการน้ำในพื้นที่:
        <input type="text" name="water_management" value={formData.water_management} onChange={handleChange} />
      </label>
      <label>
        ขนาดแปลงตัวอย่าง:
        <input type="text" name="sample_plot_size" value={formData.sample_plot_size} onChange={handleChange} />
      </label>
      <label>
        ระยะปลูก:
        <input type="text" name="planting_distance" value={formData.planting_distance} onChange={handleChange} />
      </label>
      <label>
        หมายเหตุ:
        <input type="text" name="note" value={formData.note} onChange={handleChange} />
      </label>
      <label>
        ลักษณะแปลง:
        <input type="text" name="plot_description" value={formData.plot_description} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default Credential;
