import React from 'react'
import { motion } from 'framer-motion'
import Weather from './Weather'
import Chatbot from './Chatbot'

// Define a variant that adds fade, slide and slight scale effect.
const scrollVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
}

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={scrollVariant}
        className="pt-24 flex flex-col lg:flex-row justify-between items-center min-h-screen bg-gradient-to-r from-gray-800 to-zinc-950 px-6 lg:px-10 py-10 space-y-10 lg:space-y-0"
      >
        <div className="flex flex-col items-start justify-center text-white space-y-4 max-w-lg mb-8 md:mb-0">
          <h1 className="text-blue-400 text-xl font-bold text-justify">
            Welcome to LearnSphere – Your Gateway to AI & Data Science
          </h1>
          <h3 className="text-3xl font-bold">
            Empowering the Next Generation of AI Innovators!
          </h3>
          <p className="text-xl text-justify">
            LearnSphere is an industry-leading EdTech platform that equips students with
            job-ready AI & Data Science skills through our hands-on bootcamp, DataSprint.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://thumbs.dreamstime.com/b/edtech-education-technology-distance-learning-online-concept-edtech-education-technology-distance-learning-online-concept-214285982.jpg"
            alt="EdTech Learning"
            className="rounded-3xl shadow-2xl w-full border-2 transition-all duration-300 hover:shadow-[0_10px_15px_rgba(59,130,246,0.5)]"
          />
        </div>
      </motion.section>

      {/* Company Overview */}
<h1 className="text-center text-blue-500 text-4xl font-bold p-4">Company Overview</h1>
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.3 }}
  variants={scrollVariant}
  className="flex flex-col md:flex-row justify-between items-center min-h-screen bg-gradient-to-r from-zinc-950 to-gray-800 py-14 px-4 sm:px-6 md:px-10"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center max-w-6xl mx-auto w-full">
    {/* About LearnSphere */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900 flex flex-col items-center justify-center text-white space-y-4 w-full border-2 border-blue-400 rounded-lg p-5 transition-all duration-300 hover:shadow-[0_10px_15px_rgba(59,130,246,0.5)]"
    >
      <h1 className="text-4xl font-semibold">😀 About LearnSphere</h1>
      <h3 className="text-justify">
        At LearnSphere, we believe that AI & Data Science are shaping the future. Our goal is to provide accessible, high-quality, and industry-relevant education to aspiring data professionals.
      </h3>
    </motion.div>

    {/* Our Mission */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900 flex flex-col items-center justify-center text-white space-y-4 w-full border-2 border-blue-400 rounded-lg p-5 transition-all duration-300 hover:shadow-[0_10px_15px_rgba(59,130,246,0.5)]"
    >
      <h1 className="text-4xl font-semibold">🎯 Our Mission</h1>
      <h3 className="text-justify">
        To democratize AI education by offering world-class training, ensuring that every learner can master data science skills and land high-paying jobs.
      </h3>
    </motion.div>

    {/* Our Vision */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900 flex flex-col items-center justify-center text-white space-y-4 w-full border-2 border-blue-400 rounded-lg p-5 transition-all duration-300 hover:shadow-[0_10px_15px_rgba(59,130,246,0.5)]"
    >
      <h1 className="text-4xl font-semibold">👁 Our Vision</h1>
      <h3 className="text-justify">
        To become the #1 AI & Data Science training institute globally, producing highly skilled professionals who drive innovation.
      </h3>
    </motion.div>

    {/* Who We Are */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900 flex flex-col items-center justify-center text-white space-y-4 w-full border-2 border-blue-400 rounded-lg p-5 transition-all duration-300 hover:shadow-[0_10px_15px_rgba(59,130,246,0.5)]"
    >
      <h1 className="text-4xl font-semibold">👨‍🏫 Who We Are</h1>
      <h3 className="text-justify">
        We are a team of AI experts, data scientists, and educators dedicated to helping students transition into successful AI careers.
      </h3>
    </motion.div>
  </div>
</motion.section>


      {/* Course Description */}
      <h1 className="text-center text-blue-500 text-4xl font-bold p-4">Course Description</h1>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={scrollVariant}
        className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 to-zinc-950 px-10 py-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {/* What is Data Science */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-blue-400 rounded-xl p-6 text-white shadow-md transition-all duration-300 hover:shadow-[0_10px_15px_rgba(59,130,246,0.5)] text-center"
          >
            <h1 className="text-3xl font-bold mb-4">📊 What is Data Science?</h1>
            <p className="text-lg text-justify leading-relaxed">
              Data Science is the field of analyzing, processing, and extracting insights from
              structured and unstructured data using statistics, machine learning, and AI.
            </p>
          </motion.div>
          {/* Why Study Data Science */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-blue-400 rounded-xl p-6 text-white shadow-md transition-all duration-300 hover:shadow-[0_10px_15px_rgba(59,130,246,0.5)]"
          >
            <h1 className="text-center text-3xl font-bold mb-4">❓ Why Study Data Science?</h1>
            <ul className="space-y-2 text-lg">
              <li>💼 <span className="font-medium">High Demand:-</span> <br /> Data scientists are among the most sought-after professionals.</li>
              <li>💰 <span className="font-medium">Lucrative Careers:-</span> <br /> High salary potential.</li>
              <li>🔍 <span className="font-medium">Exciting Challenges:-</span> <br /> Work on cutting-edge technologies like AI & ML.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Weather and Chatbot */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={scrollVariant}
        className="flex flex-col md:flex-row justify-center gap-10 items-center min-h-screen bg-gradient-to-r from-zinc-800 to-gray-950 px-10 py-10"
      >
        <div>
          <Weather />
        </div>
        <div>
          <Chatbot />
        </div>
      </motion.section>

      {/* Additional Section (if needed) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={scrollVariant}
      >
        {/* Additional content can go here */}
      </motion.section>
    </>
  )
}

export default HomePage
