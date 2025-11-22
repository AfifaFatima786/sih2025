
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpCircle, FileText } from "lucide-react";

// Optional: Uncomment BackgroundOrbs if you want subtle animated background
// import { BackgroundOrbs } from "./BackgroundOrbs";

const Dashboard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Smooth mouse tracking for optional orbs
  useEffect(() => {
    let animationFrame;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#EEEEEE] text-[#473472] font-sans overflow-hidden flex items-center justify-center">

      {/* Background Orbs (Optional) */}
      {/* <BackgroundOrbs mousePosition={mousePosition} /> */}

      {/* Header Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-10 text-[#473472] whitespace-nowrap">
  NaCCER Evaluation System
</h1>


        <p className="text-xl md:text-2xl font-light mb-4">
          AI-Powered R&D Proposal Evaluation for{" "}
          <span className="font-semibold">Coal India Limited</span>
        </p>

        <p className="text-base md:text-lg mb-10">
          Experience next-generation proposal evaluation with intelligent automation
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/upload"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl 
              bg-[#53629E] text-white font-bold shadow-2xl shadow-[#473472]/50
              hover:shadow-[#473472]/70 transition-all"
            >
              <ArrowUpCircle size={24} />
              <span>Upload Proposal</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/proposals"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl 
              bg-[#EEEEEE] border border-[#473472] text-[#473472] font-semibold
              shadow-md hover:shadow-lg hover:scale-[1.05] transition-all"
            >
              <FileText size={24} className="text-[#473472]" />
              <span>View Proposals</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
