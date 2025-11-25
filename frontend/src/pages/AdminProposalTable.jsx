
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FileText,
//   ExternalLink,
//   CheckCircle,
//   Clock,
//   AlertCircle,
//   ArrowLeft,
// } from "lucide-react";

// const AdminProposalTable = () => {
//   const [proposals, setProposals] = useState([]);

//   //️ CALL BACKEND API
//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_BASE_URL}/api/proposal/getAll`, {
//   method: "GET",
//   credentials: "include"   
// })
//   .then((res) => {
//     if (!res.ok) throw new Error("Network error");
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Fetched proposals:", data);
//     setProposals(data);
//   })
//   .catch((err) => console.error("Error fetching proposals:", err));

//   }, []);

//   // --- COLOR PALETTE ---
//   const BG_COLOR = "bg-[#EEEEEE]";
//   const TEXT_COLOR = "text-[#473472]";
//   const CARD_BG = "bg-white shadow-xl border border-gray-100";
//   const PRIMARY_GRADIENT = "from-[#53629E] to-[#473472]";
//   const LIGHTEST_BG = "#D6F4ED";
//   const VIEW_PDF_COLOR = "text-[#473472]";

//   // --- STATUS ICON LOGIC ---
//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "PENDING":
//         return <Clock className="w-4 h-4 text-[#473472]" />;
//       case "REVIEW":
//         return <AlertCircle className="w-4 h-4 text-[#A67E00]" />;
//       case "APPROVED":
//         return <CheckCircle className="w-4 h-4 text-[#36934D]" />;
//       default:
//         return <Clock className="w-4 h-4 text-gray-600" />;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "PENDING":
//         return `bg-[${LIGHTEST_BG}] border-[#87BAC3] text-[#473472]`;
//       case "REVIEW":
//         return "bg-[#FFF9E5] border-[#FFE9A3] text-[#A67E00]";
//       case "APPROVED":
//         return "bg-[#EAF7EE] border-[#C8EAD0] text-[#36934D]";
//       default:
//         return "bg-[#E5E8EB] border-[#D0D4DA] text-[#473472]";
//     }
//   };

//   return (
//     <div className={`min-h-screen ${BG_COLOR} ${TEXT_COLOR} p-6 md:p-10 font-sans`}>
//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto mb-12">
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center gap-6">
//             <Link
//               to="/"
//               className="p-3 rounded-xl border border-[#473472] hover:scale-110 transition-all cursor-pointer"
//             >
//               <ArrowLeft className="w-6 h-6 text-[#473472]" />
//             </Link>

//             <h1 className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${PRIMARY_GRADIENT} bg-clip-text text-transparent`}>
//               NaCCER Proposal Evaluation
//             </h1>
//           </div>

//           {/* TOTAL PROPOSALS */}
//           <div className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl shadow hover:scale-110 transition-all flex items-center">
//             <span className="text-base font-semibold text-gray-800">Total Proposals: </span>
//             <span className="text-2xl font-extrabold text-gray-800 ml-2">{proposals.length}</span>
//           </div>
//         </div>

//         <p className="text-lg text-gray-700">
//           Review and evaluate research proposals submitted by institutions
//         </p>
//       </div>

//       {/* MOBILE VIEW */}
//       <div className="lg:hidden max-w-7xl mx-auto space-y-4">
//         {proposals.map((p) => (
//           <div key={p.proposalId} className={`${CARD_BG} rounded-xl p-6`}>
//             <div className="flex items-start justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center`}>
//                   <FileText className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className={`font-bold text-lg ${TEXT_COLOR}`}>{p.proposalName}</h3>
//                   <p className="text-sm text-gray-600">{p.institutionName}</p>
//                 </div>
//               </div>
//             </div>

//             <span className={`px-3 py-1.5 rounded-full text-sm font-medium border inline-flex gap-2 ${getStatusColor(p.status)}`}>
//               {getStatusIcon(p.status)}
//               {p.status}
//             </span>

//             <div className="mt-3 text-sm text-gray-600">
//               Created: {new Date(p.creationDate).toLocaleDateString()}
//             </div>

//             <div className="flex gap-3 mt-4">
//               <a href={p.filePath} className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 border rounded-lg ${VIEW_PDF_COLOR}`}>
//                 <ExternalLink className="w-4 h-4" />
//                 View File
//               </a>

//               <Link to={`/proposalreport/${p.proposalId}`}  className="flex-1">
//                 <button className={`w-full rounded-lg px-4 py-2.5 bg-gradient-to-r ${PRIMARY_GRADIENT} text-white shadow-md`}>
//                   Evaluate
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* DESKTOP TABLE */}
//       <div className={`${CARD_BG} rounded-xl p-8 max-w-7xl mx-auto hidden lg:block`}>
//         <table className={`w-full text-left ${TEXT_COLOR}`}>
//           <thead>
//             <tr className="border-b border-[#473472]/20">
//               <th className="py-4 px-4 font-bold uppercase text-sm">Proposal</th>
//               <th className="py-4 px-4 font-bold uppercase text-sm">Institution</th>
//               <th className="py-4 px-4 font-bold uppercase text-sm">Status</th>
//               <th className="py-4 px-4 font-bold uppercase text-sm">Created</th>
//               <th className="py-4 px-4 font-bold uppercase text-sm">Document</th>
//               <th className="py-4 px-4 font-bold uppercase text-sm text-right">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {proposals.map((p) => (
//               <tr key={p.proposalId} className="border-b border-[#473472]/10 last:border-b-0">
//                 <td className="py-4 px-4">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-10 h-10 rounded-md bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center`}>
//                       <FileText className="w-5 h-5 text-white" />
//                     </div>
//                     <div>
//                       <div className={`font-semibold ${TEXT_COLOR}`}>{p.proposalName}</div>
//                       <div className="text-xs text-gray-500">ID: #{p.proposalId}</div>
//                     </div>
//                   </div>
//                 </td>

//                 <td className="py-4 px-4">{p.institutionName}</td>

//                 <td className="py-4 px-4">
//                   <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border inline-flex items-center gap-2 ${getStatusColor(p.status)}`}>
//                     {getStatusIcon(p.status)}
//                     {p.status}
//                   </span>
//                 </td>

//                 <td className="py-4 px-4 text-gray-600">
//                   {new Date(p.creationDate).toLocaleDateString()}
//                 </td>

//                 <td className="py-4 px-4">
//                   <a href={p.filePath} className={`${VIEW_PDF_COLOR} hover:underline flex items-center gap-2`}>
//                     View PDF
//                     <ExternalLink className="w-4 h-4" />
//                   </a>
//                 </td>

//                 <td className="py-4 px-4 text-right">
//                   <Link to={`/proposalreport/${p.proposalId}`}>
//                     <button className={`rounded-lg px-5 py-2.5 bg-gradient-to-r ${PRIMARY_GRADIENT} text-white font-semibold shadow-md`}>
//                       Evaluate
//                     </button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminProposalTable;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";

const AdminProposalTable = () => {
  const [proposals, setProposals] = useState([]);

  //️ CALL BACKEND API
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/proposal/getAll`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        console.log("Fetched proposals:", data);
        setProposals(data);
      })
      .catch((err) => console.error("Error fetching proposals:", err));
  }, []);

  const BG_COLOR = "bg-[#EEEEEE]";
  const TEXT_COLOR = "text-[#473472]";
  const CARD_BG = "bg-white shadow-xl border border-gray-100";
  const PRIMARY_GRADIENT = "from-[#53629E] to-[#473472]";
  const LIGHTEST_BG = "#D6F4ED";
  const VIEW_PDF_COLOR = "text-[#473472]";

  // STATUS ICONS
  // const getStatusIcon = (status) => {
  //   switch (status) {
  //     case "PENDING":
  //       return <Clock className="w-4 h-4 text-[#473472]" />;
  //     case "REVIEW":
  //       return <AlertCircle className="w-4 h-4 text-[#A67E00]" />;
  //     case "APPROVED":
  //       return <CheckCircle className="w-4 h-4 text-[#36934D]" />;
  //     case "FAILED":
  //       return <AlertCircle className="w-4 h-4 text-red-500" />;
  //     default:
  //       return <Clock className="w-4 h-4 text-gray-600" />;
  //   }
  // };

    const getStatusIcon = (status) => {
  switch (status) {
    case "pending":
      return <Clock className="w-4 h-4 text-[#473472]" />;

    case "failed":
      return <AlertCircle className="w-4 h-4 text-red-500" />;

    case "success":
      return <CheckCircle className="w-4 h-4 text-[#36934D]" />;

    default:
      return <Clock className="w-4 h-4 text-gray-600" />;
  }
};


  
const getStatusColor = (status) => {
  switch (status) {
    case "pending":
      return "bg-[#FFF9E5] border-[#FFE9A3] text-[#A67E00]";

    case "failed":
      return "bg-[#FEECEC] border-[#F5A3A3] text-red-600";

    case "success":
      return "bg-[#EAF7EE] border-[#C8EAD0] text-[#36934D]";

    default:
      return "bg-[#E5E8EB] border-[#D0D4DA] text-[#473472]";
  }
};


  //  EVALUATE BUTTON STYLE BASED ON STATUS
  const getActionButton = (status, proposalId) => {
    if (status === "success") {
    return (
      <Link to={`/proposalreport/${proposalId}`}>
        <button className="rounded-lg px-5 py-2.5 border-2 border-[#473472] text-[#473472] font-semibold bg-white hover:bg-[#f7f7f7] transition">
          View
        </button>
      </Link>
    );
  }

  if (status === "failed") {
    return (
      <Link to={`/proposalreport/${proposalId}`}>
        <button className="rounded-lg px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold shadow-md">
          Re-Evaluate
        </button>
      </Link>
    );
  }

    // PENDING or REVIEW
    return (
      <button
        disabled
        className="rounded-lg px-5 py-2.5 bg-gray-300 text-gray-600 font-semibold cursor-not-allowed"
      >
        Wait… Evaluating
      </button>
    );
  };

  return (
    <div className={`min-h-screen ${BG_COLOR} ${TEXT_COLOR} p-6 md:p-10 font-sans`}>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="p-3 rounded-xl border border-[#473472] hover:scale-110 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-6 h-6 text-[#473472]" />
            </Link>

            <h1
              className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${PRIMARY_GRADIENT} bg-clip-text text-transparent`}
            >
              NaCCER Proposal Evaluation
            </h1>
          </div>

          <div className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl shadow hover:scale-110 transition-all flex items-center">
            <span className="text-base font-semibold text-gray-800">Total Proposals:</span>
            <span className="text-2xl font-extrabold text-gray-800 ml-2">{proposals.length}</span>
          </div>
        </div>

        <p className="text-lg text-gray-700">
          Review and evaluate research proposals submitted by institutions
        </p>
      </div>

      {/* DESKTOP TABLE */}
      <div className={`${CARD_BG} rounded-xl p-8 max-w-7xl mx-auto hidden lg:block`}>
        <table className={`w-full text-left ${TEXT_COLOR}`}>
          <thead>
            <tr className="border-b border-[#473472]/20">
              <th className="py-4 px-4 font-bold uppercase text-sm">Proposal</th>
              <th className="py-4 px-4 font-bold uppercase text-sm">Institution</th>
              <th className="py-4 px-4 font-bold uppercase text-sm">Status</th>
              <th className="py-4 px-4 font-bold uppercase text-sm">Created</th>
              <th className="py-4 px-4 font-bold uppercase text-sm">Document</th>
              <th className="py-4 px-4 font-bold uppercase text-sm text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {proposals.map((p) => (
              <tr key={p.proposalId} className="border-b border-[#473472]/10 last:border-b-0">
                {/* Proposal */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-md bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center`}
                    >
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className={`font-semibold ${TEXT_COLOR}`}>{p.proposalName}</div>
                      <div className="text-xs text-gray-500">ID: #{p.proposalId}</div>
                    </div>
                  </div>
                </td>

                {/* Institution */}
                <td className="py-4 px-4">{p.institutionName}</td>

                {/* Status */}
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border inline-flex items-center gap-2 ${getStatusColor(
                      p.status
                    )}`}
                  >
                    {getStatusIcon(p.status)}
                    {p.status}
                  </span>
                </td>

                {/* Created */}
                <td className="py-4 px-4 text-gray-600">
                  {new Date(p.creationDate).toLocaleDateString()}
                </td>

                {/* PDF */}
                <td className="py-4 px-4">
                  <a href={p.filePath} className={`${VIEW_PDF_COLOR} hover:underline flex items-center gap-2`}>
                    View PDF
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </td>

                {/*  ACTION BUTTON (STATUS BASED) */}
                <td className="py-4 px-4 text-right">{getActionButton(p.status, p.proposalId)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProposalTable;
