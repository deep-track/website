import React from "react";
import { FaRegClock } from "react-icons/fa"; // Importing the clock icon from Font Awesome

const TheStateOfAI: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-black text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center mb-2 tracking-wide">
        The State of AI Fraud Should Alarm Every Enterprise Leader
      </h1>

      {/* Reading Time with Icon */}
      <div className="flex justify-center items-center text-gray-400 text-sm mb-6">
        <FaRegClock className="h-5 w-5 mr-2" /> {/* Updated clock icon */}
        <span>5 min read</span>
      </div>

      <p className="text-lg text-gray-300 leading-loose text-justify">
        Over the past few years, we have seen a drastic rise in the field of AI. Different companies all rallying to see who will emerge as a superior in this race. This comes as a good thing for consumers and end-users as we have seen the revolution these advancements have brought in different industries.
      </p>

      <p className="mt-4 text-lg text-gray-300 leading-loose text-justify">
        AI has not only streamlined different operations across major fields but it has also enhanced decision-making processes. Even though it presents many pros, AI has also introduced new and growing threats of AI fraud as it's called by many.
      </p>

      {/* Centered and Full-Width Image */}
      <div className="w-full flex justify-center mt-6">
        <img src="/thestateofai.png" className="w-full rounded-lg shadow-md" alt="The State of AI Fraud" />
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b border-gray-700 pb-2">Understanding AI Fraud</h2>

      <p className="text-lg text-gray-300 leading-loose text-justify">
        AI fraud is the use of artificial intelligence to deceive people, businesses, and organizations for financial gain, spread wrong information, or manipulate. It differs from traditional fraud as it leverages machine learning models to bypass security measures.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b border-gray-700 pb-2">Types of AI Fraud</h2>

      <ul className="list-disc ml-6 text-lg text-gray-300 space-y-4">
        <li><strong className="text-white">Deepfakes:</strong> AI-generated videos used to manipulate, spread misinformation, or impersonate others.</li>
        <li><strong className="text-white">Voice Cloning:</strong> AI mimics an individual's voice to deceive others.</li>
        <li><strong className="text-white">AI-Generated Phishing:</strong> Using deep learning to craft highly personalized phishing emails.</li>
        <li><strong className="text-white">AI-Powered Misinformation:</strong> Manipulating public perception with AI-driven content.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b border-gray-700 pb-2">AI Threat to Enterprises</h2>

      <p className="text-lg text-gray-300 leading-loose text-justify">
        AI-driven fraud poses a critical threat to enterprises, with industries like finance, government, and healthcare being the most affected. A notable case in 2019 saw a UK energy company lose $243,000 due to a deepfake audio attack.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b border-gray-700 pb-2">How to Safeguard Against AI Fraud</h2>

      <ul className="list-disc ml-6 text-lg text-gray-300 space-y-4">
        <li><strong className="text-white">Use Deepfake Detection Tools:</strong> Platforms like DeepTrack analyze media inconsistencies to verify authenticity.</li>
        <li><strong className="text-white">Employee Training:</strong> Conduct awareness programs on recognizing AI-based fraud and verifying communications.</li>
        <li><strong className="text-white">Strengthen Cybersecurity:</strong> Implement multi-factor authentication, encrypt data, and monitor threats.</li>
        <li><strong className="text-white">Leverage AI for Fraud Prevention:</strong> AI models can analyze behavioral patterns to detect anomalies in transactions and communications.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b border-gray-700 pb-2">Conclusion</h2>

      <p className="text-lg text-gray-300 leading-loose text-justify">
        AI fraud is no longer a future threat—it is happening now. Enterprise leaders must act proactively, implementing AI-powered security solutions to safeguard against evolving threats.
      </p>
    </div>
  );
};

export default TheStateOfAI;