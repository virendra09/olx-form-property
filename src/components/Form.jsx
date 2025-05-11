import { useState, useRef, useEffect} from "react";
import PropertyDetailsForm from "./PropertyDetailsForm";

export default function Form() {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const fileInputRef = useRef();
const [dragIndex, setDragIndex] = useState(null);
const [photos, setPhotos] = useState([]);
const [imageRatioError, setImageRatioError] = useState(false);
const [imageErrors, setImageErrors] = useState([]);
const [brand, setBrand] = useState('');





 const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + photos.length > 12) {
      alert('You can only upload up to 12 photos.');
      return;
    }
  
    const newFiles = files.slice(0, 12 - photos.length);
    const newErrors = [];
    let hasInvalidRatio = false;
    let loadedCount = 0;
  
    newFiles.forEach((file, i) => {
      const img = new Image();
      img.onload = () => {
        const ratio = img.width / img.height;
        const isInvalid = ratio > 21 / 9;
        newErrors[i] = { error: isInvalid };
        if (isInvalid) {
          hasInvalidRatio = true;
        }
        loadedCount++;
        if (loadedCount === newFiles.length) {
          setPhotos((prev) => [...prev, ...newFiles]);
          setImageErrors((prev) => [...prev, ...newErrors]);
          setImageRatioError(hasInvalidRatio);
        }
      };
      img.src = URL.createObjectURL(file);
    });
  };


  
  const handleBoxClick = () => {
    if (photos.length < 12) {
      fileInputRef.current.click();
    }
  };


  const handleDeletePhoto = (index) => {
    setPhotos((prevPhotos) => {
      const updatedPhotos = prevPhotos.filter((_, i) => i !== index);
  
      setImageErrors((prevErrors) => {
        const updatedErrors = prevErrors.filter((_, i) => i !== index);
  
        // Recalculate if any remaining error has invalid ratio
        const stillHasError = updatedErrors.some(err => err?.error);
        setImageRatioError(stillHasError);
  
        return updatedErrors;
      });
  
      return updatedPhotos;
    });
  };

   const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };


   const handleDrop = (dropIndex) => {
    if (dragIndex === null || dragIndex === dropIndex) return;

    setPhotos((prev) => {
      const newPhotos = [...prev];
      const [draggedItem] = newPhotos.splice(dragIndex, 1);
      newPhotos.splice(dropIndex, 0, draggedItem);
      return newPhotos;
    });

    setDragIndex(null);
  };


  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState('');

  const stateCityData = {
    Goa: {
      Calapor: ['Santa Cruz', 'Miramar'],
      Panaji: ['Altinho', 'Campal'],
    },
    Maharashtra: {
      Mumbai: ['Andheri', 'Bandra'],
      Pune: ['Kothrud', 'Baner'],
    },
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity('');
    setSelectedNeighbourhood('');
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedNeighbourhood('');
  };

  const handleCurrentLocationClick = () => {
    setSelectedState('');
    setSelectedCity('');
    setSelectedNeighbourhood('');
  };
  
// Review and button part

 const [name, setName] = useState('Virendra Yadav');
  const [profileImage, setProfileImage] = useState(null);

  const handleNameChange = (e) => {
    if (e.target.value.length <= 30) {
      setName(e.target.value);
    }
  };

 
const [countryCode, setCountryCode] = useState('+91');
const [mobileNumber, setMobileNumber] = useState('');

const handleMobileNumberChange = (e) => {
  const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
  if (value.length <= 10) {
    setMobileNumber(value);
  }
};

const isFormValid =
  name.trim() !== '' &&
  mobileNumber.length === 10 &&
  profileImage;


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
  return () => {
    photos.forEach((photo) => URL.revokeObjectURL(photo));
  };
}, [photos]);


const handleSubmit = (e) => {
  e.preventDefault();
  if (!isFormValid) {
    alert("Please complete all required fields.");
    return;
  }
  // Proceed with form data submission
};


  return (
    <div style={{ borderColor: 'rgba(14, 4, 5, 0.2)' }} className="w-150  p-2   border max-w-md md:max-w-xl lg:max-w-2xl px-2 md:px-8 lg:px-2">
      {/* Outer div */}
        {/* Inner div with 7 child divs  */}
  <div className="w-3/5    space-y-2 max-w-md md:max-w-xl lg:max-w-2xl px-2 md:px-8 lg:px-2">
        {/* div 1 */}
    <div className=" w-full  p-2  ">
                <div className="mb-6">
          <label className="block text-[20px] md:text-xl font-bold leading-[27.6px] uppercase text-[rgb(2,8,18)] mb-4">SELECTED CATEGORY</label>
         <a> <span className="text-[rgb(141,144,148)] text-[11px] font-normal leading-[13.8px] cursor-pointer  bg-[rgba(0,0,0,0)]">
                 Properties

          </span></a>

          <span className="text-[rgb(141,144,148)] text-[11px] font-normal leading-[13.8px] cursor-pointer  bg-[rgba(0,0,0,0)]"> / </span>
          <a><span className="text-[rgb(141,144,148)] text-[11px] font-normal leading-[13.8px] cursor-pointer  bg-[rgba(0,0,0,0)]">
For Sale: Houses & Apartments</span></a>
          <a className="text-[rgb(141,144,148)] text-[11px] font-bold leading-[13.8px] underline underline-offset-2 decoration-[rgb(141,144,148)] cursor-pointer bg-[rgba(0,0,0,0)]">
           {" "}Change</a>
        </div>

    </div>
    </div>
       <hr className="-mx-2 border border-gray-200" />

       {/* extra div */}

















{/* div 2 */}
  <div className="w-3/5    space-y-0 max-w-md md:max-w-xl lg:max-w-2xl px-2 md:px-8 lg:px-2">

        <div className="w-full p-2  ">
                 <h3 className="text-lg md:text-xl font-semibold mb-3">INCLUDE SOME DETAILS</h3>

        <div className="mb-4">
        <PropertyDetailsForm/>
          
        </div>

        <div className="mb-1">
  <label className="block text-sm font-medium mb-1 text-left">Ad title *</label>

 <input
  type="text"
  maxLength={70}
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  className="w-full p-2 border border-black-300  text-sm mb-0"
/>

</div>
  <div className="flex justify-between mb-3 text-[9px] text-gray-500 ">
    <p>Mention the key features of your item (e.g. brand, model, age, type)</p>
    <span>{title.length}/70</span>
  </div>

          <div className="mb-4 relative">
  <label className="block font-medium mb-1">Description *</label>
  
  <textarea
    maxLength={4096}
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="w-full border p-2  h-24 resize-y mb-0"
  />

  <div className="flex justify-between text-[9px] text-gray-500 mt-0">
    <p>Include condition, features and reason for selling</p>
    <p>{description.length}/4096</p>
  </div>
</div>
        </div>
</div>
   <hr className="-mx-2 border border-gray-300" />

        
     {/* div 3    */}
       <div className="w-3/5    space-y-2 max-w-md md:max-w-xl lg:max-w-2xl px-2 md:px-8 lg:px-2">

        <div className="w-full p-2 ">
                    <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">SET A PRICE</h3>
          <label className="block font-medium mb-1">Price *</label>
          <div className="relative">
            <span className="absolute left-2 top-2">₹ |</span> {" "}
            <input
              type="number"
              value={price}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                setPrice(value);
              }}
              className="w-full border p-2  pl-6"
            />
          </div>
        </div>
        </div>
</div>

           <hr className="-mx-2 border border-gray-300" />

        {/* div 4 */}
          <div className="w-3/5   space-y-2 max-w-md md:max-w-xl lg:max-w-2xl px-2 md:px-8 lg:px-2">

        <div className="w-full p-2  ">
             <div className="mb-6">
          <label className="block font-semibold mb-2">UPLOAD UP TO 20 PHOTOS</label>
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            onChange={handlePhotoChange}
            className="hidden"
          />
<div className="grid grid-cols-3 md:grid-cols-4 gap-1">
  {[...Array(20)].map((_, index) => (
    <div
      key={index}
      className={`relative aspect-square border flex items-center justify-center  ${
        index === photos.length ? 'border-black cursor-pointer' : 'cursor-default'
      } ${dragIndex === index ? 'opacity-50' : ''}`}
      onClick={index === photos.length ? handleBoxClick : undefined}
      onDragOver={handleDragOver}
      onDrop={() => handleDrop(index)}
      draggable={index < photos.length}
      onDragStart={() => handleDragStart(index)}
              >
               {photos[index] ? (
  <>
    <img
      src={URL.createObjectURL(photos[index])}
      alt={`uploaded-${index}`}
      className="w-full h-full object-cover "
    />
    {/* COVER tag for first image */}
    {imageErrors[index] && imageErrors[index].error ? (
  <span className="absolute top-0 right-0 text-white bg-red-500 text-xs px-2 py-1">
    ERROR
  </span>
) : index === 0 ? (
  <span className="absolute top-0 left-0 text-white bg-blue-500 text-xs px-2 py-1">
    COVER
  </span>
) : null}

<button
  type="button"
  className="bg-gray-400 text-black absolute top-1 right-1  w-5 h-5 flex items-center justify-center text-xs z-10"
  onClick={(e) => {
    e.stopPropagation();
    handleDeletePhoto(index);
  }
  

  }
>
  ×
</button>

  </>
) : index === photos.length ? (
                  <div className="text-left text-xs">
                    📸
                    <div>Add</div>
                  </div>
                ) : (
                  '📸+'
                )}
              </div>
            ))}
          </div>
          {imageRatioError && (
  <div className="text-red-600 text-sm mt-2">
  Invalid image ratio. Max allowed: 21:9.  </div>
)}

        </div>
                       <div className="flex justify-between text-[10px] text-red-500 mt-0 mb-3">
                          <p>This is field is mandatory</p>
                        </div>
        </div>

</div>
          <hr className="-mx-2 border border-gray-300" />
 
        {/* div 5 */}
          <div className="w-3/5   space-y-2 max-w-md md:max-w-xl lg:max-w-2xl px-2 md:px-8 lg:px-2">

        <div className="w-full p-2  ">
             <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">CONFIRM YOUR LOCATION</h3>
          <div className="w-full  flex gap-6 text-sm font-semibold mb-2 border-b border-gray-400">
            <span className="w-1/2 border-b-2 border-blue-800  flex items-center justify-center">LIST</span>
            <span  onClick={handleCurrentLocationClick} className="text-gray-500 cursor-pointer flex items-center justify-center">CURRENT LOCATION</span>
          </div>

          <label className="block font-medium mb-1">State *</label>
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="w-full border p-2 "
          >
            <option value="">Select State</option>
            {Object.keys(stateCityData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          {selectedState && (
            <>
              <label className="block font-medium mt-4 mb-1">City *</label>
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className="w-full border p-2 "
              >
                <option value="">Select City</option>
                {Object.keys(stateCityData[selectedState]).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </>
          )}

          {selectedCity && (
            <>
              <label className="block font-medium mt-4 mb-1">Neighbourhood *</label>
              <select
                value={selectedNeighbourhood}
                onChange={(e) => setSelectedNeighbourhood(e.target.value)}
                className="w-full border p-2"
              >
                <option value="">Select Neighbourhood</option>
                {stateCityData[selectedState][selectedCity].map((neigh) => (
                  <option key={neigh} value={neigh}>
                    {neigh}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
               <div className="flex justify-between text-[10px] text-red-500 mt-0 mb-3">
                    <p>This is field is mandatory</p>
               </div>
        
        </div>
</div>
   <hr className="-mx-2 border border-gray-300" />
        {/* div 6 */}

          <div className="w-3/5  space-y-2 max-w-md md:max-w-xl lg:max-w-2xl px-2 md:px-8 lg:px-2">

   <div className="w-full p-2">
  {/* Heading */}
  <div className="mb-4">
    <h3 className="text-lg font-semibold">REVIEW YOUR DETAILS</h3>
  </div>

  {/* Profile and Name Input */}
  <div className="flex items-start gap-4 mb-4">
    {/* Profile Image */}
    <div className="relative w-16 h-16 bg-green-700 text-white rounded-full  flex items-center justify-center text-2xl font-semibold overflow-hidden">
  {profileImage ? (
    <img
      src={profileImage}
      alt="Profile"
      className="w-full h-full object-cover rounded-full"
    />
  ) : (
    <span>{name.charAt(0).toUpperCase() || 'V'}</span>
  )}
  {/* Bottom overlay with camera icon */}
  <label className="absolute bottom-0 w-full bg-green-900/80 text-white text-xs h-5 flex items-center justify-center cursor-pointer">
    📸
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      className="hidden"
    />
  </label>
</div>


    {/* Name Input */}
    <div className="flex-1">
      <label className="block text-sm font-medium mb-1">Name</label>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        maxLength={30}
        className="w-full border border-gray-300  p-2 text-sm"
      />
      <div className="text-xs text-right text-gray-500 mt-1">{name.length}/30</div>
    </div>
  </div>

  {/* Verification Info */}
  <div className="mb-4">
    <h3 className="text-sm font-semibold mb-1">Let's verify your account</h3>
    <p className="text-sm text-gray-600">
      We will send you a confirmation code by SMS on the next step.
    </p>
  </div>

  {/* Mobile Input */}
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">Mobile Phone Number *</label>
    <div className="flex border border-gray-300 overflow-hidden">
      <span className="px-3 py-2  text-sm font-bold text-gray-400" >{countryCode}</span>
    <input
  type="tel"
  value={mobileNumber}
  onChange={handleMobileNumberChange}
  placeholder=""
  maxLength={10}
  className="w-full p-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
/>

    </div>
  </div>


</div>
</div>
    <hr className="-mx-2 border border-gray-300" />

        {/* div 7  */}
          <div className="w-3/5    space-y-2 max-w-md md:max-w-xl lg:max-w-2xl px-2 md:px-8 lg:px-2">

        <div className="w-full p-2  ">
          
  {/* Button */}
  <div>
    <button
      style={{
        backgroundColor: isFormValid ? '#0963e1' : '#D9DADB',
        color: 'white',
        padding: '10px',
        borderRadius: '0px',
        width: '7rem',
        cursor: isFormValid ? 'pointer' : 'not-allowed',
        textAlign: 'left',
      }}
      disabled={!isFormValid}
       onClick={handleSubmit}
    >
      Post now
    </button>
  </div>
        </div>

    
    </div>
    </div>
  );
}
