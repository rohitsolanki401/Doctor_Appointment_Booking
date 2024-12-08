import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();              // Getting speciality from the URL
  const { doctors } = useContext(AppContext);      // Getting doctors from context
  const [filterDoc, setFilterDoc] = useState([]);  // State for filtered doctors
  const navigate = useNavigate();                  // Navigation function
  const [showFilter, setShowFilter] = useState(false)

  // Function to filter doctors based on speciality
const applyFilter = () => {
  if (speciality) {
    // Filter doctors based on speciality from URL (case-insensitive)
    setFilterDoc(
      doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase())
    );
  } else {
    // If no speciality, show all doctors
    setFilterDoc(doctors);
  }
};


  // useEffect to re-run the filter when speciality changes
  useEffect(() => {
    if (doctors.length > 0) {
      applyFilter();
    }
  }, [speciality, doctors]); // Apply filter only when doctors data is available
  

  return (
    <div className='px-12'>
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}  onClick={()=> setShowFilter(prev => !prev)}>Filters</button>
        
        {/* ------------ Specialities List --------------- */}
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p
            onClick={() => navigate('/doctors/General physician')}
            className="w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
          >
            General physician
          </p>
          <p
            onClick={() => navigate('/doctors/Gynecologist')}
            className="w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
          >
            Gynecologist
          </p>
          <p
            onClick={() => navigate('/doctors/Dermatologist')}
            className="w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
          >
            Dermatologist
          </p>
          <p
            onClick={() => navigate('/doctors/Pediatricians')}
            className="w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
          >
            Pediatricians
          </p>
          <p
            onClick={() => navigate('/doctors/Neurologist')}
            className="w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
          >
            Neurologist
          </p>
          <p
            onClick={() => navigate('/doctors/Gastroenterologist')}
            className="w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
          >
            Gastroenterologist
          </p>
        </div>

        {/*------------------- Doctors Data ---------------------------- */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/Appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-grey-900 text-lg font-medium">{item.name}</p>
                <p className="text-grey-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
