import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const navigate = useNavigate();
    return (
        <section className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-gray-800 to-zinc-950 px-6 py-10 text-white space-y-10">

            {/* Header */}
            <div className="mt-20 text-center space-y-2">
                <h1 className="text-3xl font-bold text-cyan-400">🚀 DataSprint – AI & Data Science Bootcamp</h1>
                <h3 className="text-lg text-gray-300">Duration: <span className="font-semibold text-white">6 Months</span> | Mode: <span className="font-semibold text-white">Online + Mentorship</span></h3>
            </div>

            {/* Features Section */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-6xl w-full">

                {/* Why Choose */}
                <div className="bg-gray-800 text-gray-800 rounded-2xl shadow-lg p-6 w-full md:w-1/2 space-y-4">
                    <h2 className="text-xl font-bold text-white">💡 Why Choose DataSprint?</h2>
                    <ul className="space-y-2">
                        <li className='text-white'><span className="font-medium">Project-Based Learning:</span> Hands-on projects for real-world skills.</li>
                        <li className='text-white'><span className="font-medium">Live Mentorship:</span> Guidance from AI professionals.</li>
                        <li className='text-white'><span className="font-medium">Industry-Aligned Curriculum:</span> Designed by top data scientists.</li>
                        <li className='text-white'><span className="font-medium">Placement Assistance:</span> Resume building, mock interviews, and job referrals.</li>
                    </ul>
                </div>

                {/* Key Features */}
                <div className="bg-gray-800 text-gray-800 rounded-2xl shadow-lg p-6 w-full md:w-1/2 space-y-4">
                    <h2 className="text-xl font-bold text-white">📖 Key Features</h2>
                    <ul className="space-y-2">
                        <li className='text-white'>✅ Python & SQL Mastery – Core languages for data science.</li>
                        <li className='text-white'>✅ Machine Learning & Deep Learning – Learn models and neural networks.</li>
                        <li className='text-white'>✅ Big Data & Cloud Computing – Hands-on experience with AWS, GCP.</li>
                        <li className='text-white'>✅ AI Ethics & Deployment – Ensuring responsible AI development.</li>
                        <li className='text-white'>✅ Capstone Projects – Work on real-world AI projects.</li>
                    </ul>
                </div>
            </div>


            {/* Curriculum Table */}
            <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 w-full max-w-6xl">
                <h2 className="text-2xl font-bold mb-4 text-center">📚 Sample Curriculum</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left border border-gray-300 rounded-lg">
                        <thead>
                            <tr className="bg-gray-800 text-gray-100">
                                <th className="py-3 px-4 border-b">#</th>
                                <th className="py-3 px-4 border-b">Module</th>
                                <th className="py-3 px-4 border-b">Topics</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-100">
                            <tr className="hover:bg-gray-900">
                                <td className="py-2 px-4 border-b">1</td>
                                <td className="py-2 px-4 border-b">Python & SQL</td>
                                <td className="py-2 px-4 border-b">Data types, loops, functions, queries</td>
                            </tr>
                            <tr className="hover:bg-gray-900">
                                <td className="py-2 px-4 border-b">2</td>
                                <td className="py-2 px-4 border-b">Statistics & Probability</td>
                                <td className="py-2 px-4 border-b">Descriptive stats, probability distributions</td>
                            </tr>
                            <tr className="hover:bg-gray-900">
                                <td className="py-2 px-4 border-b">3</td>
                                <td className="py-2 px-4 border-b">Machine Learning</td>
                                <td className="py-2 px-4 border-b">Regression, classification, clustering</td>
                            </tr>
                            <tr className="hover:bg-gray-900">
                                <td className="py-2 px-4 border-b">4</td>
                                <td className="py-2 px-4 border-b">Deep Learning</td>
                                <td className="py-2 px-4 border-b">Neural networks, CNN, RNN</td>
                            </tr>
                            <tr className="hover:bg-gray-900">
                                <td className="py-2 px-4 border-b">5</td>
                                <td className="py-2 px-4 border-b">NLP & Computer Vision</td>
                                <td className="py-2 px-4 border-b">Text analysis, image recognition</td>
                            </tr>
                            <tr className="hover:bg-gray-900">
                                <td className="py-2 px-4">6</td>
                                <td className="py-2 px-4">AI Deployment</td>
                                <td className="py-2 px-4">Model serving, cloud deployment</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-4">
                <h1 className="text-2xl font-semibold">🔗 Ready to Kickstart Your AI Career?</h1>
                <button onClick={()=>navigate('/contact')} className="cursor-pointer bg-cyan-500 hover:bg-cyan-700 text-white font-medium px-6 py-3 rounded-2xl transition duration-300">
                    Apply Now!
                </button>
            </div>
        </section>
    );
};

export default ProductDetails;
