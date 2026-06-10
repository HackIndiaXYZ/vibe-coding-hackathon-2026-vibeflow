import { useEffect, useState } from "react";

export default function ComplaintHistory() {
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
  
  const [search, setSearch] = useState("");
  const [selectedComplaint, setSelectedComplaint] =
    useState(null);

  useEffect(() => {
    const currentUser =
    
      localStorage.getItem("loggedInUser");

    const allComplaints =
      JSON.parse(
        localStorage.getItem("complaints")
      ) || [];

    const userComplaints =
      allComplaints.filter(
        (c) => c.username === currentUser
      );

    setComplaints(userComplaints);
  }, []);

  const downloadComplaint = (complaint) => {
    const pdfWindow = window.open("", "_blank");

    pdfWindow.document.write(`
      <html>
      <head>
        <title>${complaint.id}</title>

        <style>
          body{
            font-family: Arial;
            padding:30px;
          }

          h1{
            color:#06b6d4;
          }

          .card{
            border:1px solid #ddd;
            padding:20px;
            border-radius:10px;
          }
        </style>
      </head>

      <body>

        <h1>Cyber Shield AI Complaint Report</h1>

        <div class="card">

          <p><b>Complaint ID:</b> ${complaint.id}</p>

          <p><b>Name:</b> ${complaint.name || "N/A"}</p>

          <p><b>Location:</b> ${complaint.location || "N/A"}</p>

          <p><b>Scam Type:</b> ${complaint.scamType}</p>

          <p><b>Date:</b> ${complaint.date}</p>

          <p><b>Status:</b> ${complaint.status}</p>

          <p><b>Amount Lost:</b> ₹${complaint.amountLost || "N/A"}</p>

          <p><b>Suspicious URL:</b> ${complaint.url || "N/A"}</p>

          <p><b>Description:</b> ${complaint.description || "N/A"}</p>

        </div>

      </body>
      </html>
    `);

    pdfWindow.document.close();
    pdfWindow.print();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Resolved":
        return "bg-green-600";

      case "Ongoing":
        return "bg-orange-500";

      default:
        return "bg-yellow-500";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "Resolved":
        return "🟢 Resolved";

      case "Ongoing":
        return "🟠 Ongoing";

      default:
        return "🟡 Pending";
    }
  };

  const filteredComplaints =
    complaints.filter((item) =>
      item.id
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="text-white">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold text-cyan-300">
          📜 Complaint History
        </h1>

        <div className="text-gray-400">
          Total Complaints: {complaints.length}
        </div>

      </div>

      <input
        type="text"
        placeholder="Search Complaint ID..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          p-3
          rounded-xl
          bg-slate-800
          border
          border-cyan-500/30
          mb-6
        "
      />

      {filteredComplaints.length === 0 ? (
        <div
          className="
          bg-slate-900
          p-8
          rounded-2xl
          border
          border-cyan-500/20
          text-center
        "
        >
          <h2 className="text-2xl text-gray-400">
            No Complaints Found
          </h2>
        </div>
      ) : (
        <div className="grid gap-6">

          {filteredComplaints.map(
            (complaint) => (
              <div
                key={complaint.id}
                className="
                bg-slate-900
                border
                border-cyan-500/20
                rounded-2xl
                p-6
                hover:border-cyan-500
                transition
              "
              >
                <div className="flex justify-between">

                  <div>

                    <h2 className="text-xl font-bold text-cyan-300">
                      {complaint.id}
                    </h2>

                    <p className="text-gray-400 mt-2">
                      Scam Type:
                      {" "}
                      {complaint.scamType}
                    </p>

                    <p className="text-gray-400">
                      Date:
                      {" "}
                      {complaint.date}
                    </p>

                  </div>

                  <span
                    className={`
                      px-4 py-2 rounded-full
                      text-white font-bold
                      ${getStatusColor(
                        complaint.status
                      )}
                    `}
                  >
                    {getStatusText(
                      complaint.status
                    )}
                  </span>

                </div>

                <div className="mt-6 flex gap-3">

                  <button
                    onClick={() =>
                      setSelectedComplaint(
                        complaint
                      )
                    }
                    className="
                      bg-purple-600
                      hover:bg-purple-500
                      px-5 py-2
                      rounded-xl
                      font-bold
                    "
                  >
                    👁 View Details
                  </button>

                  <button
                    onClick={() =>
                      downloadComplaint(
                        complaint
                      )
                    }
                    className="
                      bg-cyan-600
                      hover:bg-cyan-500
                      px-5 py-2
                      rounded-xl
                      font-bold
                    "
                  >
                    📄 Download PDF
                  </button>

                </div>

              </div>
            )
          )}

        </div>
      )}

      {selectedComplaint && (
        <div
          className="
            fixed inset-0
            bg-black/70
            flex items-center
            justify-center
            z-50
          "
        >
          <div
            className="
            bg-slate-900
            border
            border-cyan-500
            rounded-2xl
            p-8
            w-[700px]
            max-w-[95%]
          "
          >
            <h2 className="text-3xl font-bold text-cyan-300 mb-6">
              Complaint Details
            </h2>

            <div className="space-y-3">

              <p><strong>ID:</strong> {selectedComplaint.id}</p>

              <p><strong>Name:</strong> {selectedComplaint.name || "N/A"}</p>

              <p><strong>Location:</strong> {selectedComplaint.location || "N/A"}</p>

              <p><strong>Scam Type:</strong> {selectedComplaint.scamType}</p>

              <p><strong>Date:</strong> {selectedComplaint.date}</p>

              <p><strong>Status:</strong> {selectedComplaint.status}</p>

              <p><strong>Amount Lost:</strong> ₹{selectedComplaint.amountLost || "N/A"}</p>

              <p><strong>Suspicious URL:</strong> {selectedComplaint.url || "N/A"}</p>

              <p><strong>Description:</strong> {selectedComplaint.description || "N/A"}</p>

            </div>

            <button
              onClick={() =>
                setSelectedComplaint(null)
              }
              className="
                mt-6
                bg-red-600
                hover:bg-red-500
                px-5 py-2
                rounded-xl
                font-bold
              "
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}