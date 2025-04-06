import React, { useState } from 'react';
import './chatbot.css';
import { IoSend } from 'react-icons/io5';
import { GoogleGenAI } from '@google/genai';
import toast from 'react-hot-toast';
import { FaUserCircle } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

const Chatbot = () => {
  // conversation state: each item has a type ('user' or 'bot') and text
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  // Called when the send icon is clicked
  const hitRequest = async () => {
    if (message.trim()) {
      // Add the user's message to the conversation
      const userMsg = { type: 'user', text: message };
      setConversation(prev => [...prev, userMsg]);

      // Clear the input field immediately after sending
      setMessage("");

      // Generate and append the bot's response
      await genRes(message);
    } else {
      toast.error("Please provide a message!");
    }
  };

  // Call the API and add the bot's response to the conversation
  const genRes = async (msg) => {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_API_KEY }); // Replace with your actual API key
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: msg,  // Use the user-provided message as the prompt
      });
      console.log(response.text);
      const botMsg = { type: 'bot', text: response.text };
      setConversation(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Error generating content", error);
      toast.error("Error generating content");
    }
  };

  return (
    <div className="container w-full sm:w-[900px] h-[500px] flex flex-col rounded-2xl bg-gray-950 text-white overflow-hidden">
      {/* Header */}
      <div className="header flex items-center justify-between px-4 md:px-10 py-4">
        <div className='flex items-center gap-4'>
          <h1 className="text-xl md:text-2xl">AI ChatBot</h1>
          <RiRobot2Fill className='text-2xl md:text-3xl' />
        </div>
        <button
          className="bg-gray-700 rounded-2xl px-3 md:px-4 py-2 cursor-pointer font-semibold text-sm md:text-base"
          onClick={() => {
            setConversation([]);
            setMessage("");
          }}
        >
          New Chat
        </button>
      </div>
      <hr className="border-gray-700" />
      {/* Messages */}
      <div className="messages flex-1 px-4 py-2 overflow-y-auto space-y-3">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 p-2 rounded-lg ${
              msg.type === "user" ? "bg-blue-600 self-end" : "bg-gray-700 self-start"
            }`}
          >
            {msg.type === "user" ? (
              <FaUserCircle className="text-white text-xl md:text-2xl" />
            ) : (
              <RiRobot2Fill className="text-white text-xl md:text-2xl" />
            )}
            <span className="text-sm md:text-base">{msg.text}</span>
          </div>
        ))}
      </div>
      {/* Input */}
      <div className="bottom w-full flex flex-col items-center py-4">
        <div className="inputBox w-[90%] md:w-[80%] flex items-center bg-gray-500 rounded-2xl px-3 md:px-4 py-2">
          <input
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="bg-transparent flex-1 outline-none border-none text-sm md:text-base"
            placeholder="Write your message here"
            value={message}
          />
          {message.trim() !== "" && (
            <button onClick={hitRequest} className="text-green-500 text-2xl md:text-3xl ml-2">
              <IoSend />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
