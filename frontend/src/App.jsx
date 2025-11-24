import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/upload";
import ProposalTables from "./pages/ProposalTables";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProposalTable from "./pages/AdminProposalTable";
import EvaluationReport from "./pages/EvaluationReport";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import UserRegisteration from "./pages/UserRegistration";
import AdminRegisteration from "./pages/AdminRegistration";

// Context Providers
import UserContextProvider from "./context/UserContext";
import AdminContextProvider from "./context/AdminContext";

// Protected Route Components
import UserProtectedRoute from "./components/UserProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import Logout from "./pages/Logout";

function App() {
  return (
    <UserContextProvider>
      <AdminContextProvider>
        <Router>
          <div className="flex">
            <div className="flex-1 bg-gray-100 min-h-screen p-5">
              <Routes>

                {/* User Protected Routes */}
                <Route
                  path="/"
                  element={
                    <UserProtectedRoute>
                      <Dashboard />
                    </UserProtectedRoute>
                  }
                />

                <Route
                  path="/upload"
                  element={
                    <UserProtectedRoute>
                      <Upload />
                    </UserProtectedRoute>
                  }
                />

                <Route
                  path="/proposals"
                  element={
                    <UserProtectedRoute>
                      <ProposalTables />
                    </UserProtectedRoute>
                  }
                />

                {/* Admin Protected Routes */}
                <Route
                  path="/admin"
                  element={
                    <AdminProtectedRoute>
                      <AdminDashboard />
                    </AdminProtectedRoute>
                  }
                />

                <Route
                  path="/proposalsreview"
                  element={
                    <AdminProtectedRoute>
                      <AdminProposalTable />
                    </AdminProtectedRoute>
                  }
                />

                <Route
                  path="/proposalreport/:id"
                  element={
                    <AdminProtectedRoute>
                      <EvaluationReport />
                    </AdminProtectedRoute>
                  }
                />

                <Route path="/logout" element={<Logout/>}/>

                {/* Authentication Routes */}
                <Route path="/userlogin" element={<UserLogin />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/userregister" element={<UserRegisteration />} />
                <Route path="/adminregister" element={<AdminRegisteration />} />
              
              </Routes>
            </div>
          </div>

          <ToastContainer autoClose={2500} />
        </Router>
      </AdminContextProvider>
    </UserContextProvider>
  );
}

export default App;
