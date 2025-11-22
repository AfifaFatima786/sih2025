// import React from "react";
// import { motion } from "framer-motion";

// const EvaluationReport = () => {
//   return (
//     <div className="min-h-screen bg-[#0d1628] text-white p-10">

//       {/* PAGE HEADER */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-extrabold text-center mb-10 
//                    bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 
//                    bg-clip-text text-transparent"
//       >
//         AI Evaluation Report
//       </motion.h1>

//       {/* REPORT CARD */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-3xl mx-auto bg-white/5 border border-white/10 
//                    backdrop-blur-xl shadow-xl rounded-2xl p-8 space-y-10"
//       >

//         {/* Novelty Assessment */}
//         <section>
//           <h2 className="text-2xl font-semibold text-yellow-300">Novelty Assessment</h2>
//           <p className="text-gray-300 mt-2">
//             The system detected <strong className="text-yellow-400">82% uniqueness</strong>{" "}
//             compared to NaCCER’s historical R&D proposals.
//           </p>
//         </section>

//         {/* Evaluation Score */}
//         <section>
//           <h2 className="text-2xl font-semibold text-yellow-300">Evaluation Score</h2>
//           <p className="text-3xl font-bold text-green-300 mt-2">8.4 / 10</p>
//         </section>

//         {/* Summary */}
//         <section>
//           <h2 className="text-2xl font-semibold text-yellow-300">Summary</h2>
//           <p className="text-gray-300 mt-2 leading-relaxed">
//             The proposal demonstrates strong technical feasibility and aligns well with
//             Coal India’s modernization roadmap. Financial structuring follows S&T
//             guidelines, and relevance is high based on semantic analysis. The proposal is
//             suitable for expert-level review.
//           </p>
//         </section>

//         {/* AI Insights */}
//         <section>
//           <h2 className="text-2xl font-semibold text-yellow-300">AI Insights</h2>
//           <ul className="list-disc ml-6 text-gray-300 mt-2 space-y-2">
//             <li>
//               <strong className="text-yellow-300">Relevance Score:</strong> 91% match with
//               core CIL priorities.
//             </li>
//             <li>
//               <strong className="text-yellow-300">Similar Past Projects:</strong> 3 found
//               with partial overlap.
//             </li>
//             <li>
//               <strong className="text-yellow-300">Estimated Financial Risk:</strong> Low.
//             </li>
//           </ul>
//         </section>

//       </motion.div>
//     </div>
//   );
// };

// export default EvaluationReport;


// import React from "react";
// import { Sparkles, TrendingUp, FileCheck, Lightbulb, Shield, Target, Award, AlertCircle } from "lucide-react";

// const EvaluationReport = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0d1628] to-[#1a1f35] text-white p-6 md:p-10">

//       {/* PAGE HEADER */}
//       <div className="max-w-5xl mx-auto mb-12">
//         <div className="flex items-center justify-center gap-3 mb-4">
//           {/* <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 
//                          flex items-center justify-center shadow-lg shadow-yellow-500/30">
//             <Sparkles className="w-7 h-7 text-black" />
//           </div> */}
//           <h1 className="text-4xl md:text-5xl font-extrabold 
//                          bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 
//                          bg-clip-text text-transparent">
//             AI Evaluation Report
//           </h1>
//         </div>
//         <p className="text-center text-gray-400 text-lg">
//           Comprehensive AI-powered analysis of research proposal
//         </p>
//       </div>

//       {/* MAIN REPORT CONTAINER */}
//       <div className="max-w-5xl mx-auto space-y-6">

//         {/* TOP METRICS ROW */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
//           {/* Novelty Card */}
//           <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 
//                          border border-blue-500/20 backdrop-blur-xl rounded-2xl p-6 
//                          hover:border-blue-500/40 transition-all duration-300 
//                          shadow-xl hover:shadow-blue-500/20 group">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center 
//                            group-hover:scale-110 transition-transform">
//                 <Lightbulb className="w-5 h-5 text-blue-400" />
//               </div>
//               <h3 className="font-bold text-blue-300 text-lg">Novelty</h3>
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-end gap-2">
//                 <span className="text-4xl font-extrabold text-white">82</span>
//                 <span className="text-2xl font-bold text-blue-400 mb-1">%</span>
//               </div>
//               <p className="text-sm text-gray-400">Uniqueness vs historical proposals</p>
//               <div className="w-full bg-white/10 rounded-full h-2 mt-3">
//                 <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" 
//                      style={{width: '82%'}}></div>
//               </div>
//             </div>
//           </div>

//           {/* Score Card */}
//           <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 
//                          border border-green-500/20 backdrop-blur-xl rounded-2xl p-6 
//                          hover:border-green-500/40 transition-all duration-300 
//                          shadow-xl hover:shadow-green-500/20 group">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center 
//                            group-hover:scale-110 transition-transform">
//                 <Award className="w-5 h-5 text-green-400" />
//               </div>
//               <h3 className="font-bold text-green-300 text-lg">Overall Score</h3>
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-end gap-2">
//                 <span className="text-4xl font-extrabold text-white">8.4</span>
//                 <span className="text-2xl font-bold text-green-400 mb-1">/ 10</span>
//               </div>
//               <p className="text-sm text-gray-400">Excellent evaluation rating</p>
//               <div className="flex gap-1 mt-3">
//                 {[...Array(10)].map((_, i) => (
//                   <div key={i} className={`flex-1 h-2 rounded-full ${
//                     i < 8 ? 'bg-gradient-to-r from-green-400 to-green-600' : 
//                     i === 8 ? 'bg-gradient-to-r from-green-400/50 to-green-600/50' : 
//                     'bg-white/10'
//                   }`}></div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Risk Card */}
//           <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 
//                          border border-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 
//                          hover:border-emerald-500/40 transition-all duration-300 
//                          shadow-xl hover:shadow-emerald-500/20 group">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center 
//                            group-hover:scale-110 transition-transform">
//                 <Shield className="w-5 h-5 text-emerald-400" />
//               </div>
//               <h3 className="font-bold text-emerald-300 text-lg">Risk Level</h3>
//             </div>
//             <div className="space-y-2">
//               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl 
//                              bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 
//                              font-bold text-lg">
//                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
//                 LOW
//               </span>
//               <p className="text-sm text-gray-400 mt-3">Financial risk assessment</p>
//             </div>
//           </div>

//         </div>

//         {/* DETAILED SECTIONS */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//           {/* Summary Section */}
//           <div className="bg-white/5 border border-white/10 backdrop-blur-xl 
//                          rounded-2xl p-6 shadow-xl hover:border-yellow-500/30 
//                          transition-all duration-300 lg:col-span-2">
//             <div className="flex items-center gap-3 mb-4">
//               {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 
//                            flex items-center justify-center shadow-lg">
//                 <FileCheck className="w-5 h-5 text-black" />
//               </div> */}
//               <h2 className="text-2xl font-bold text-yellow-300">Executive Summary</h2>
//             </div>
//             <div className="bg-white/5 rounded-xl p-5 border border-white/5">
//               <p className="text-gray-300 leading-relaxed text-lg">
//                 The proposal demonstrates <span className="text-yellow-400 font-semibold">strong technical feasibility</span> and 
//                 aligns well with Coal India's modernization roadmap. Financial structuring follows S&T
//                 guidelines, and relevance is high based on semantic analysis. The proposal is
//                 <span className="text-green-400 font-semibold"> suitable for expert-level review</span>.
//               </p>
//             </div>
//           </div>

//           {/* AI Insights - Key Metrics */}
//           <div className="bg-white/5 border border-white/10 backdrop-blur-xl 
//                          rounded-2xl p-6 shadow-xl hover:border-purple-500/30 
//                          transition-all duration-300">
//             <div className="flex items-center gap-3 mb-6">
//               {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 
//                            flex items-center justify-center shadow-lg">
//                 <TrendingUp className="w-5 h-5 text-white" />
//               </div> */}
//               <h2 className="text-2xl font-bold text-purple-300">Key Metrics</h2>
//             </div>

//             <div className="space-y-4">
//               {/* Relevance Score */}
//               <div className="bg-white/5 rounded-xl p-4 border border-white/5 
//                            hover:bg-white/10 transition-all">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-gray-400 font-medium">Relevance Score</span>
//                   <span className="text-2xl font-bold text-purple-400">91%</span>
//                 </div>
//                 <div className="w-full bg-white/10 rounded-full h-2">
//                   <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" 
//                        style={{width: '91%'}}></div>
//                 </div>
//                 <p className="text-sm text-gray-500 mt-2">Match with core CIL priorities</p>
//               </div>

//               {/* Similar Projects */}
//               <div className="bg-white/5 rounded-xl p-4 border border-white/5 
//                            hover:bg-white/10 transition-all">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-gray-400 font-medium">Similar Projects</span>
//                   <span className="text-2xl font-bold text-orange-400">3</span>
//                 </div>
//                 <p className="text-sm text-gray-500">Found with partial overlap</p>
//               </div>
//             </div>
//           </div>

//           {/* Recommendation */}
//           <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 
//                          border border-yellow-500/20 backdrop-blur-xl rounded-2xl p-6 
//                          shadow-xl hover:border-yellow-500/40 transition-all duration-300">
//             <div className="flex items-center gap-3 mb-6">
//               {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 
//                            flex items-center justify-center shadow-lg">
//                 <Target className="w-5 h-5 text-black" />
//               </div> */}
//               <h2 className="text-2xl font-bold text-yellow-300">Recommendation</h2>
//             </div>

//             {/* <div className="space-y-4">
//               <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-green-500/20">
//                 <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center 
//                              flex-shrink-0 mt-0.5">
//                   <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-green-400 mb-1">Proceed to Expert Review</p>
//                   <p className="text-sm text-gray-400">
//                     Proposal meets all technical and financial criteria for advancement
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
//                 <div className="flex items-start gap-3">
//                   <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <p className="font-semibold text-blue-400 mb-1">Next Steps</p>
//                     <ul className="text-sm text-gray-400 space-y-1">
//                       <li>• Assign to domain expert panel</li>
//                       <li>• Schedule technical review meeting</li>
//                       <li>• Request additional clarifications if needed</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </div>

//         </div>

//         {/* ACTION BUTTONS */}
//         <div className="flex flex-col sm:flex-row gap-4 pt-6">
//           <button className="flex-1 px-6 py-4 rounded-xl font-bold text-lg
//                            bg-gradient-to-r from-yellow-500 to-orange-500 text-black
//                            shadow-xl hover:shadow-yellow-500/50 hover:scale-105
//                            transition-all duration-300 flex items-center justify-center gap-3">
//             {/* <FileCheck className="w-5 h-5" /> */}
//             Approve for Expert Review
//           </button>
//           <button className="flex-1 px-6 py-4 rounded-xl font-bold text-lg
//                            bg-white/10 border border-white/20 text-white
//                            hover:bg-white/20 transition-all duration-300
//                            flex items-center justify-center gap-3">
//             Download Full Report
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default EvaluationReport;
import React, { useEffect, useState } from "react";
import { ArrowLeft, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const EvaluationReport = () => {
  const { id } = useParams(); // Get /report/:id
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/proposal/report/${id}`);
        if (!res.ok) throw new Error("Failed to load report");

        const data = await res.json();
        setReport(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReport();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-[#473472] text-xl">
        Loading Report...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEEEEE] text-[#473472] py-10 px-6 font-sans">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10">
        
        <Link to="/proposalsreview">
          <button
            className="cursor-pointer flex items-center gap-2 text-[#473472]
                       transition-all duration-300 hover:scale-[1.15]
                       border hover:shadow-lg hover:border-[#473472]
                       rounded-md px-2 py-1"
          >
            <ArrowLeft size={20} /> Back
          </button>
        </Link>

        <h1 className="text-4xl font-bold mt-4">Project Evaluation Report</h1>
        <p className="text-gray-600 mt-1">
          Automatically generated report for: 
          <span className="font-semibold text-[#473472]"> {report.proposalName}</span>
        </p>
      </div>

      {/* Report Container */}
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Project Overview */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-[#473472]">
            Project Overview
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Institution: <span className="font-semibold">{report.institutionName}</span>
          </p>

          <p className="text-gray-600 mt-2">
            Status:  
            <span className="font-semibold text-[#53629E]"> {report.status}</span>
          </p>

          <p className="text-gray-600 mt-2">
            Submitted On:{" "}
            <span className="font-semibold">
              {new Date(report.creationDate).toLocaleString()}
            </span>
          </p>
        </div>

        {/* Final Evaluation */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-[#473472]">
            Final Evaluation Result
          </h2>

          <div className="flex items-end gap-6">
            <div className="text-6xl font-extrabold text-[#36934D]">
              {report.overallScore}
            </div>
            <p className="text-gray-700">
              Overall Rating: 
              <span className="text-[#473472] font-semibold">
                {" "}
                {report.overallScore >= 25
                  ? "Excellent"
                  : report.overallScore >= 20
                  ? "Strongly Viable"
                  : "Needs Improvement"}
              </span>
            </p>
          </div>
        </div>

        {/* Metric Breakdown */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-[#473472] mb-4 border-b pb-2">
            Metric Breakdown
          </h2>

          {/* Novel Score */}
          <MetricRow
            title="Novelty Score"
            value={report.novelScore}
            color="#53629E"
          />

          {/* Budget Score */}
          <MetricRow
            title="Budget Score"
            value={report.budgetScore}
            color="#36934D"
          />

          {/* Guidelines Score */}
          <MetricRow
            title="Guideline Score"
            value={report.guidelineScore}
            color="#A67E00"
          />

        </div>

        {/* Recommendations */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-[#473472]">
            Detailed Reviewer Notes
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-3">
            <li><strong>Novelty:</strong> {report.novelReport}</li>
            <li><strong>Budget:</strong> {report.budgetReport}</li>
            <li><strong>Guidelines:</strong> {report.guidelineReport}</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row gap-4 pt-2">

            <button
              className="flex-1 px-6 py-3 rounded-lg font-semibold text-lg 
              bg-gradient-to-r from-[#53629E] to-[#473472] 
              text-white shadow-md hover:scale-105 transition-all
              flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              Download Full Report (PDF)
            </button>

            <button
              className="flex-1 px-6 py-3 rounded-lg font-semibold text-lg 
              bg-gray-100 border border-gray-300 text-[#473472]
              hover:bg-gray-200 transition-all"
            >
              View Similar Benchmarks
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

/* ------------------------------------------- */
/* Metric Component (Re-usable Clean UI)       */
/* ------------------------------------------- */
const MetricRow = ({ title, value, color }) => {
  const pct = Math.min((value / 30) * 100, 100); // convert to percentage

  return (
    <div className="pb-4 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center justify-between mb-1">
        <span className="text-gray-600">{title}</span>
        <span className="text-xl font-bold" style={{ color }}>
          {value}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full"
          style={{ width: `${pct}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default EvaluationReport;
