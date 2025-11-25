
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Sparkles, UserCog } from "lucide-react";

// const AdminWelcome = () => {
//   return (
//     <div className="min-h-screen bg-[#0a0e1a] text-white font-sans overflow-hidden">

//       {/* Faint grid */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
//                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
//             backgroundSize: "50px 50px",
//           }}
//         ></div>
//       </div>

//       {/* Center Container */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">

//         {/* Rotating sparkle */}
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="mb-6"
//         >
//           <Sparkles className="w-14 h-14 text-yellow-400" />
//         </motion.div>

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent"
//         >
//           Welcome, Admin
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-4 text-gray-300 max-w-2xl text-lg"
//         >
//           Manage proposals, trigger analysis, monitor system performance, and review AI-generated
//           evaluation reports — all within the NaCCER Evaluation Platform.
//         </motion.p>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-4 text-gray-400 max-w-xl text-sm"
//         >
//           As an administrator, you control data flow, validate proposal integrity, review flagged
//           cases, and oversee all automated AI scoring pipelines.
//         </motion.p>

//         {/* Continue Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="mt-10"
//         >
//           <Link
//             to="/proposalsreview"
//             className="flex items-center gap-3 px-8 py-4 rounded-2xl 
//             bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold
//             shadow-2xl shadow-yellow-500/40 hover:shadow-yellow-500/60 transition-all"
//           >
//             <UserCog size={24} /> Review Proposals
//           </Link>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default AdminWelcome;
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, UserCog } from "lucide-react";
import { ArrowUpCircle, FileText, ArrowUpRight } from "lucide-react";

const AdminWelcome = () => {
  return (
    <div className="min-h-screen bg-[#EEEEEE] text-[#473472] font-sans overflow-hidden">

      
      {/* <Link to="/logout">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="absolute top-6 right-6 flex items-center gap-2 px-6 py-3 bg-[#53629E] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer font-semibold"
  >
    Logout
    <ArrowUpRight size={18} />
  </motion.button>
</Link> */}
{/* DEBUG LOGOUT BUTTON */}
<div
  onClick={() => {
    console.log(" Logout button clicked — navigating to /logout");
  }}
>
  <Link to="/logout">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="absolute top-6 right-6 flex items-center gap-2 px-6 py-3 bg-[#53629E] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer font-semibold"
    >
      Logout
      <ArrowUpRight size={18} />
    </motion.button>
  </Link>
</div>



      {/* Faint grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(71,52,114,0.08) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(71,52,114,0.08) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>



      {/* Center Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">

        {/* Rotating sparkle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mb-6"
        >
          <Sparkles className="w-14 h-14 text-[#473472]" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black 
          bg-gradient-to-r from-[#53629E] to-[#473472] 
          bg-clip-text text-transparent"
        >
          Welcome, Admin
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-700 max-w-2xl text-lg"
        >
          Manage proposals, trigger analysis, monitor system performance, and review AI-generated
          evaluation reports — all within the NaCCER Evaluation Platform.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-600 max-w-xl text-sm"
        >
          As an administrator, you control data flow, validate proposal integrity, review flagged
          cases, and oversee all automated AI scoring pipelines.
        </motion.p>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <Link
            to="/proposalsreview"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl hover:scale-[1.15]
      border hover:shadow-lg
      hover:border-[#473472] duration-300
            bg-gradient-to-r from-[#53629E] to-[#473472] 
            text-white font-bold
            shadow-2xl shadow-[#473472]/40 hover:shadow-[#473472]/60 transition-all"
          >
            <UserCog size={24} /> Review Proposals
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default AdminWelcome;
