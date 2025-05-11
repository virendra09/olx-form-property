import { useState } from "react";

const PropertyDetailsForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    projectStatus: "",
    listedBy: "",
    superBuiltupArea: "",
    carpetArea: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    carParking: "",
    facing: "",
    projectName:"",
  });

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">

      {/* Type */}
<div>
  <label className="text-sm font-medium">Type *</label>
  <div className="flex flex-wrap gap-2 mt-2">
    {["Flats / Apartments", "Independent / Builder Floors", "Farm House", "House & Villa"].map((type) => (
      <button
        key={type}
        type="button"
        onClick={() => handleSelect("type", type)}
        className={` px-2 py-1 text-[12px] border rounded transition 
          ${formData.type === type 
            ? "bg-blue-200 text-black border border-black" 
            : "bg-white text-black border border-gray-300"} 
          border `}
      >
        {type}
      </button>
    ))}
  </div>
</div>



      {/* BHK */}
      <div>
        <label className="text-sm font-medium">BHK</label>
        <div className="flex gap-2 mt-2">
          {["1", "2", "3", "4", "4+"].map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => handleSelect("bhk", b)}
              className={` px-5 py-1 text-[12px] border rounded ${formData.bhk === b ? "bg-blue-200 text-black border border-black" : "bg-white border border-gray-300"}`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
      
      {/* Bathrooms */}
      <div>
        <label className="text-sm font-medium">Bathrooms</label>
        <div className="flex gap-2 mt-2">
          {["1", "2", "3", "4", "4+"].map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => handleSelect("bathrooms", b)}
              className={`px-5 py-1 text-[12px]  border rounded ${formData.bathrooms === b ? "bg-blue-200 text-black border border-black" : "bg-white border border-gray-300"}`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Furnishing */}
      <div>
        <label className="text-sm font-medium">Furnishing</label>
        <div className="flex gap-2 mt-2">
          {["Furnished", "Semi-Furnished", "Unfurnished"].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => handleSelect("furnishing", f)}
              className={`px-2 py-1 text-[12px] border rounded ${formData.furnishing === f ? "bg-blue-200 text-black border border-black" : "bg-white border border-gray-300"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Project Status */}
      <div>
        <label className="text-sm font-medium">Project Status</label>
        <div className="flex gap-2 mt-2">
          {["New Launch", "Ready to Move", "Under Construction"].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSelect("projectStatus", s)}
              className={`px-1 py-1 text-[12px] border rounded ${formData.projectStatus === s ? "bg-blue-200 text-black border border-black" : "bg-white border-gray-300"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Listed By */}
      <div>
        <label className="text-sm font-medium">Listed by</label>
        <div className="flex gap-2 mt-2">
          {["Builder", "Dealer", "Owner"].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => handleSelect("listedBy", p)}
              className={`px-2 py-1 text-[12px] border rounded ${formData.listedBy === p ? "bg-blue-200 text-black border border-black" : "bg-white border border-gray-300"}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Text Fields */}
     <div className="space-y-4">
  {/* Super Builtup Area */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Super Builtup area sqft *</label>
    <input
      type="text"
      placeholder=""
      className="border border-gray-500 rounded p-2"
      value={formData.superBuiltupArea}
      onChange={(e) => handleSelect("superBuiltupArea", e.target.value)}
    />
  </div>

  {/* Carpet Area */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Carpet Area sqft *</label>
    <input
      type="text"
      placeholder=""
      className="border border-gray-500 rounded p-2"
      value={formData.carpetArea}
      onChange={(e) => handleSelect("carpetArea", e.target.value)}
    />
  </div>

  {/* Maintenance */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Maintenance (Monthly)</label>
    <input
      type="text"
      placeholder=""
      className="border border-gray-500 rounded p-2"
      value={formData.maintenance}
      onChange={(e) => handleSelect("maintenance", e.target.value)}
    />
  </div>

  {/* Total Floors */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Total Floors</label>
    <input
      type="text"
      placeholder=""
      className="border border-gray-500 rounded p-2"
      value={formData.totalFloors}
      onChange={(e) => handleSelect("totalFloors", e.target.value)}
    />
  </div>

  {/* Floor No */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Floor No</label>
    <input
      type="text"
      placeholder=""
      className="border border-gray-500 rounded p-2"
      value={formData.floorNo}
      onChange={(e) => handleSelect("floorNo", e.target.value)}
    />
  </div>
</div>


      {/* Car Parking */}
      <div>
        <label className="text-sm font-medium">Car Parking</label>
        <div className="flex gap-2 mt-2">
          {["0", "1", "2", "3", "3+"].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => handleSelect("carParking", p)}
              className={`px-5 py-1 text-[12px] border rounded ${formData.carParking === p ? "bg-blue-200 text-black border border-black" : "bg-white border border-gray-300"}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Facing Dropdown */}
      <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">Facing</label>
    <select
          value={formData.facing}
          onChange={(e) => handleSelect("facing", e.target.value)}
          className="select select-bordered w-full border border-gary-500 rounded p-2"
        >
          <option value="">Select</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="South">South East</option>
          <option value="South">South West</option>
          <option value="South">North East</option>
          <option value="South">North West</option>
        </select>
  </div>




      <div className="flex flex-col space-y-1">
  <label className="text-sm font-medium">Project Name</label>
  <div className="relative">
    <input
      type="text"
      maxLength={70}
      placeholder=""
      className="w-full border border-gray-500 rounded p-2 pr-16"
      value={formData.projectName}
      onChange={(e) => handleSelect("projectName", e.target.value)}
    />
  
  </div>
   <div className="flex justify-end mb-3 text-[9px] text-gray-500 ">
    <span>{formData.projectName.length}/70</span>
  </div>
</div>

    </div>
  );
};

export default PropertyDetailsForm;
