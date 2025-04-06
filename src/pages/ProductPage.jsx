import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
  const navigate = useNavigate();

 

  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 to-zinc-950 px-10 py-10">
      <div className="max-w-2xl w-full p-6 bg-gray-800 rounded-2xl shadow-lg space-y-6">
        <div className="text-center text-white ">
          <h1 className="text-2xl font-bold text-cyan-400 ">🚀 DataSprint – AI & Data Science Bootcamp</h1>
          <p className="text-gray-400 mt-2">
            Duration: <span className="font-semibold">6 Months</span> | Mode: <span className="font-semibold">Online + Mentorship</span>
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-100">💡 Why Choose DataSprint?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-100">
            <li>
              <span className="font-medium text-gray-100">Project-Based Learning:</span> Hands-on projects for real-world skills.
            </li>
            <li>
              <span className="font-medium text-gray-100">Live Mentorship:</span> Guidance from AI professionals.
            </li>
            <li>
              <span className="font-medium text-gray-100">Industry-Aligned Curriculum:</span> Designed by top data scientists.
            </li>
            <li>
              <span className="font-medium text-gray-100">Placement Assistance:</span> Resume building, mock interviews, and job referrals.
            </li>
          </ul>
          <div className='flex justify-center items-center gap-4 mt-6'>

          <button onClick={()=>navigate('/contact')} className='cursor-pointer bg-cyan-400 rounded-2xl px-4 py-2 hover:bg-cyan-800'>Apply Now</button>
          <button onClick={()=>navigate('/getdetail')} className='cursor-pointer bg-rose-500 rounded-2xl px-4 py-2 hover:bg-rose-800' >Get Details</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
