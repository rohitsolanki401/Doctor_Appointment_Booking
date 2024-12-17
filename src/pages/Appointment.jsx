import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'


const Appointment = () => {

const {docId} = useParams()

const {doctors} = useContext(AppContext)

const [docInfo, setDocInfo] = useState(null)

const fetchDocInfo = async () => {
  const docInfo = doctors.find(doc => doc._id === docId);
  console.log("Doctor found:", docInfo);     // Log the doctor details
  setDocInfo(docInfo);
};


useEffect(() => {
  fetchDocInfo()
  },[doctors,docId])                         


  return docInfo && (
    <div>
      {/* ================== Doctor details ====================== */}
      <div>
        <div>
          <img src={docInfo.image} alt=''></img>
        </div>

        <div>
          {/* ============ Doc Info: name,degree,experience =========== */}
          <p>{docInfo.name}</p> <img src={assets.verified_icon} alt=''></img>
          </div>  
      </div>
    </div>
  )
}

export default Appointment
