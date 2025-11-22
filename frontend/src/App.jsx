
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/upload";
import ProposalTables from "./pages/ProposalTables";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProposalTable from "./pages/AdminProposalTable";
import EvaluationReport from "./pages/EvaluationReport";

function App() {
  return (
    <Router>
      <div className="flex">

        <div className="flex-1 bg-gray-100 min-h-screen p-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/proposals" element={<ProposalTables />} />
            {/* <Route path="/" element={<AdminDashboard />} />
            <Route path="/proposalsreview" element={<AdminProposalTable />} />
            <Route path="/proposalreport" element={<EvaluationReport />} /> */}
            
            
          

            
          </Routes>
        </div>

      </div>

       <ToastContainer 
        position="top-right"
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
      />
    </Router>
  );
}

export default App;
