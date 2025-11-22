import React from "react";
import { Link } from "react-router-dom";

const proposalsData = {
  pending: [
    { id: "P001", title: "AI-based Coal Optimization", PI: "Dr. Sharma" },
    { id: "P002", title: "Drone Survey System", PI: "Prof. Mehta" },
  ],
  evaluated: [
    { id: "E001", title: "Water Seepage Detection", score: 87 },
    { id: "E002", title: "Mine Safety AI System", score: 92 },
  ],
  rejected: [
    { id: "R001", title: "Coal Dust Analysis", reason: "Insufficient novelty" },
  ],
};

const ProposalTables = ({ onView }) => {
  return (
    <div className="space-y-10 p-5">
        <div>
  <Link 
    to="/" 
    className="bg-[#0d1628] text-white rounded-xl p-3 px-5 inline-block hover:bg-[#142038] transition"
  >
    Back
  </Link>
</div>

      {/* Pending Table */}
      <section>
        <h2 className="text-2xl font-bold mb-3">⏳ Pending Proposals</h2>
        <Table
          data={proposalsData.pending}
          columns={["id", "title", "PI"]}
          onView={onView}
        />
      </section>

      {/* Evaluated Table */}
      <section>
        <h2 className="text-2xl font-bold mb-3">📊 Evaluated Proposals</h2>
        <Table
          data={proposalsData.evaluated}
          columns={["id", "title", "score"]}
          onView={onView}
        />
      </section>

      {/* Rejected Table */}
      <section>
        <h2 className="text-2xl font-bold mb-3">❌ Rejected Proposals</h2>
        <Table
          data={proposalsData.rejected}
          columns={["id", "title", "reason"]}
          onView={onView}
        />
      </section>

    </div>
  );
};


const Table = ({ data, columns, onView }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-xl border bg-white">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th className="px-4 py-3 font-semibold uppercase text-sm text-gray-600" key={col}>
                {col}
              </th>
            ))}
            <th className="px-4 py-3 font-semibold uppercase text-sm text-gray-600">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-t hover:bg-gray-50 transition"
            >
              {columns.map((col) => (
                <td className="px-4 py-3" key={col}>
                  {row[col]}
                </td>
              ))}

              {/* Action Button */}
              <td className="px-4 py-3">
                <button
                  onClick={() => onView(row)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Evaluation
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProposalTables;
