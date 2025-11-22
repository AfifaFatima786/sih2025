import React from "react";
import { Link } from "react-router-dom";
import { FileText, ExternalLink, CheckCircle, Clock, AlertCircle, ArrowLeft } from "lucide-react";

const AdminProposalTable = () => {
  const proposals = [
    {
      id: 1,
      name: "AI-Based Coal Quality Prediction",
      submittedBy: "IIT Bombay",
      status: "Initial Screening",
      file: "https://example.com/proposal1.pdf",
      submittedDate: "2024-03-15",
    },
    {
      id: 2,
      name: "Mine Automation System",
      submittedBy: "IIT Kharagpur",
      status: "Under Expert Review",
      file: "https://example.com/proposal2.pdf",
      submittedDate: "2024-03-12",
    },
    {
      id: 3,
      name: "Sustainable Mining Practices Framework",
      submittedBy: "IIT Delhi",
      status: "Approved",
      file: "https://example.com/proposal3.pdf",
      submittedDate: "2024-03-08",
    },
  ];

  // --- COLOR PALETTE ---
  const BG_COLOR = "bg-[#EEEEEE]"; 
  const TEXT_COLOR = "text-[#473472]"; 
  const CARD_BG = "bg-white shadow-xl border border-gray-100";
  const PRIMARY_GRADIENT = "from-[#53629E] to-[#473472]";
  const LIGHTEST_BG = "#D6F4ED"; 
  const VIEW_PDF_COLOR = "text-[#473472]"; 

  // --- STATUS COLOR AND ICON LOGIC ---
  const getStatusIcon = (status) => {
    switch (status) {
      case "Initial Screening":
        return <Clock className="w-4 h-4 text-[#473472]" />;
      case "Under Expert Review":
        return <AlertCircle className="w-4 h-4 text-[#A67E00]" />;
      case "Approved":
        return <CheckCircle className="w-4 h-4 text-[#36934D]" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Initial Screening":
        // Light background (#D6F4ED) with Dark Text (#473472)
        return `bg-[${LIGHTEST_BG}] border-[#87BAC3] text-[#473472]`;
      case "Under Expert Review":
        return "bg-[#FFF9E5] border-[#FFE9A3] text-[#A67E00]";
      case "Approved":
        return "bg-[#EAF7EE] border-[#C8EAD0] text-[#36934D]";
      default:
        return "bg-[#E5E8EB] border-[#D0D4DA] text-[#473472]";
    }
  };

  return (
    // FONT CHANGE: The font is applied here via `font-sans`.
    // NOTE: For DM Sans to be used, it must be imported/linked in your global CSS/HTML 
    // and configured in your tailwind.config.js as the default sans-serif font.
    <div className={`min-h-screen ${BG_COLOR} ${TEXT_COLOR} p-6 md:p-10 font-sans`}>

      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center justify-between mb-4">
          
          <div className="flex items-center gap-6">
            {/* BACK BUTTON */}
            
            <Link
  to="/"
  className="
    p-3 rounded-xl
    border border-[#473472]
    hover:border-[#473472]
    hover:scale-[1.15]
    transition-all duration-300
    cursor-pointer
    flex items-center justify-center
  "
  aria-label="Go back to home"
>
  <ArrowLeft className="w-6 h-6 text-[#473472]" />
</Link>

            <h1 className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${PRIMARY_GRADIENT} bg-clip-text text-transparent`}>
              NaCCER Proposal Evaluation
            </h1>
          </div>

          {/* TOTAL PROPOSALS BADGE */}
          <div
  className={`
    px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl shadow 
    transition-all duration-300 cursor-pointer
    hover:scale-[1.15] hover:shadow-lg hover:border-[#473472]
    flex items-center justify-between
  `}
>
  <span className="text-base font-semibold text-gray-800">Total Proposals: </span>
  <span className="text-2xl font-extrabold text-gray-800">{proposals.length}</span>
</div>

        </div>

        <p className="text-lg text-gray-700">
          Review and evaluate research proposals submitted by institutions
        </p>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="lg:hidden max-w-7xl mx-auto space-y-4">
        {proposals.map((p) => (
          <div key={p.id} className={`${CARD_BG} rounded-xl p-6`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center shadow-md`}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${TEXT_COLOR}`}>{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.submittedBy}</p>
                </div>
              </div>
            </div>

            {/* Status Chip */}
            <span
              className={`px-3 py-1.5 rounded-full text-sm font-medium border inline-flex gap-2 ${getStatusColor(p.status)}`}
            >
              {getStatusIcon(p.status)}
              {p.status}
            </span>

            <div className="mt-3 text-sm text-gray-600">
              Submitted: {new Date(p.submittedDate).toLocaleDateString()}
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href={p.file}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg ${VIEW_PDF_COLOR} hover:bg-gray-100`}
              >
                <ExternalLink className="w-4 h-4" />
                View File
              </a>

              <Link to="/proposalreport" className="flex-1">
                <button className={`w-full rounded-lg px-4 py-2.5 bg-gradient-to-r ${PRIMARY_GRADIENT} text-white cursor-pointer duration-300 font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all`}>
                  Evaluate
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* --- DESKTOP TABLE --- */}
      <div className={`${CARD_BG} rounded-xl p-8 max-w-7xl mx-auto hidden lg:block`}>
        <table className={`w-full text-left ${TEXT_COLOR}`}>
          <thead>
            <tr className="border-b border-[#473472]/20">
              <th className="py-4 px-4 font-bold uppercase text-sm">Proposal</th>
              <th className="py-4 px-4 font-bold uppercase text-sm">Institution</th>
              <th className="py-4 px-4 font-bold uppercase text-sm">Status</th>
              <th className="py-4 px-4 font-bold uppercase text-sm">Submitted</th>
              <th className="py-4 px-4 font-bold uppercase text-sm">Document</th>
              <th className="py-4 px-4 font-bold uppercase text-sm text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {proposals.map((p) => (
              <tr key={p.id} className="border-b border-[#473472]/10 last:border-b-0">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-md bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center`}>
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className={`font-semibold ${TEXT_COLOR}`}>{p.name}</div>
                      <div className="text-xs text-gray-500">ID: #{p.id}</div>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-4">{p.submittedBy}</td>

                <td className="py-4 px-4">
                  {/* Status Chip */}
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border inline-flex items-center gap-2 ${getStatusColor(p.status)}`}>
                    {getStatusIcon(p.status)}
                    {p.status}
                  </span>
                </td>

                <td className="py-4 px-4 text-gray-600">
                  {new Date(p.submittedDate).toLocaleDateString()}
                </td>

                <td className="py-4 px-4">
                  <a href={p.file} className={`${VIEW_PDF_COLOR} hover:underline flex items-center gap-2`}>
                    View PDF
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </td>

                <td className="py-4 px-4 text-right">
                  <Link to="/proposalreport">
                    <button className={`rounded-lg px-5 py-2.5 bg-gradient-to-r ${PRIMARY_GRADIENT} text-white cursor-pointer font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all`}>
                      Evaluate
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProposalTable;