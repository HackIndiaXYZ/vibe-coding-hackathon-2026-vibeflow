

export default function DetectionCenter() {


  const detectScam = () => {
    const random =
      Math.random() > 0.5
        ? "⚠️ Scam Content Detected"
        : "✅ Trustworthy Content";

    alert(random);
  };

  const scanUrl = () => {
    const random =
      Math.random() > 0.5
        ? "🚨 Risky URL"
        : "✅ Safe URL";

    alert(random);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan-300 mb-6">
        🔍 Detection Center
      </h1>

      <div className="space-y-6">

        <div className="bg-slate-900 p-5 rounded-xl">
          <h2 className="text-xl font-bold mb-3">
            🚨 Scam Detector
          </h2>

          <input type="file" />

          <button
            onClick={detectScam}
            className="block mt-4 bg-cyan-600 px-5 py-2 rounded"
          >
            Analyze
          </button>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl">
          <h2 className="text-xl font-bold mb-3">
            🌐 URL Risk Scanner
          </h2>

          <input
            type="text"
            placeholder="Paste URL"
            className="w-full p-3 rounded bg-slate-800"
          />

          <button
            onClick={scanUrl}
            className="mt-4 bg-pink-600 px-5 py-2 rounded"
          >
            Scan URL
          </button>
        </div>

      </div>
    </div>
  );
}