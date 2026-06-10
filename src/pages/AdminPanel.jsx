import { useState } from "react";

export default function AdminPanel() {

  const [complaints, setComplaints] =
    useState(() => {
      return (
        JSON.parse(
          localStorage.getItem(
            "complaints"
          )
        ) || []
      );
    });

  const updateStatus = (
    id,
    newStatus
  ) => {

    const updated =
      complaints.map((c) =>
        c.id === id
          ? {
              ...c,
              status: newStatus,
            }
          : c
      );

    setComplaints(updated);

    localStorage.setItem(
      "complaints",
      JSON.stringify(updated)
    );
  };

  const getStatusBadge = (
    status
  ) => {

    switch (status) {

      case "Resolved":
        return (
          <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-600 text-white">
            🟢 Resolved
          </span>
        );

      case "Ongoing":
        return (
          <span className="px-3 py-1 rounded-full text-sm font-bold bg-orange-500 text-white">
            🟠 Ongoing
          </span>
        );

      default:
        return (
          <span className="px-3 py-1 rounded-full text-sm font-bold bg-yellow-500 text-black">
            🟡 Pending
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-4xl font-bold text-cyan-300 mb-8">
        🛡️ Admin Control Center
      </h1>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-5 mb-8">

        <div className="bg-slate-900 border border-cyan-500 p-6 rounded-2xl">
          <h2 className="text-gray-400">
            Total Complaints
          </h2>

          <p className="text-4xl font-bold text-cyan-300 mt-2">
            {complaints.length}
          </p>
        </div>

        <div className="bg-slate-900 border border-yellow-500 p-6 rounded-2xl">
          <h2 className="text-gray-400">
            Pending
          </h2>

          <p className="text-4xl font-bold text-yellow-400 mt-2">
            {
              complaints.filter(
                (c) =>
                  c.status ===
                  "Pending"
              ).length
            }
          </p>
        </div>

        <div className="bg-slate-900 border border-green-500 p-6 rounded-2xl">
          <h2 className="text-gray-400">
            Resolved
          </h2>

          <p className="text-4xl font-bold text-green-400 mt-2">
            {
              complaints.filter(
                (c) =>
                  c.status ===
                  "Resolved"
              ).length
            }
          </p>
        </div>

      </div>

      {/* COMPLAINTS */}

      <div className="space-y-5">

        {complaints.length === 0 ? (

          <div className="bg-slate-900 p-8 rounded-2xl text-center border border-cyan-500/20">
            <h2 className="text-2xl text-gray-400">
              No Complaints Found
            </h2>
          </div>

        ) : (

          complaints.map(
            (complaint) => (

              <div
                key={complaint.id}
                className="
                bg-slate-900
                p-6
                rounded-2xl
                border
                border-cyan-500/20
                hover:border-cyan-500
                transition
                "
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h2 className="text-xl font-bold text-cyan-300">
                      {complaint.id}
                    </h2>

                    <p className="mt-2 text-gray-300">
                      👤 User:
                      {" "}
                      {complaint.username}
                    </p>

                    <p className="text-gray-300">
                      🚨 Scam Type:
                      {" "}
                      {complaint.scamType}
                    </p>

                    <p className="text-gray-300">
                      📅 Date:
                      {" "}
                      {complaint.date}
                    </p>

                    <p className="text-gray-300">
                      📍 Location:
                      {" "}
                      {complaint.location}
                    </p>

                  </div>

                  {getStatusBadge(
                    complaint.status
                  )}

                </div>

                <div className="flex flex-wrap gap-3 mt-6">

                  <button
                    onClick={() =>
                      updateStatus(
                        complaint.id,
                        "Pending"
                      )
                    }
                    className="
                    bg-yellow-500
                    hover:bg-yellow-400
                    text-black
                    font-bold
                    px-5
                    py-2
                    rounded-xl
                    "
                  >
                    🟡 Pending
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        complaint.id,
                        "Ongoing"
                      )
                    }
                    className="
                    bg-orange-500
                    hover:bg-orange-400
                    text-white
                    font-bold
                    px-5
                    py-2
                    rounded-xl
                    "
                  >
                    🟠 Ongoing
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        complaint.id,
                        "Resolved"
                      )
                    }
                    className="
                    bg-green-600
                    hover:bg-green-500
                    text-white
                    font-bold
                    px-5
                    py-2
                    rounded-xl
                    "
                  >
                    🟢 Resolved
                  </button>

                </div>

              </div>
            )
          )

        )}

      </div>

    </div>
  );
}