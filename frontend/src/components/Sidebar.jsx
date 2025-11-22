import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" w-64 bg-gray-900 text-white p-5 space-y-5">
      <h1 className="text-2xl font-bold">NaCCER Portal</h1>

      <nav className="flex flex-col space-y-3">

        <Link
          to="/"
          className="px-3 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/upload"
          className="px-3 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
        >
          Upload Proposal
        </Link>

        <Link
          to="/proposals"
          className="px-3 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
        >
          View Proposals
        </Link>

      </nav>
    </div>
  );
};

export default Sidebar;
