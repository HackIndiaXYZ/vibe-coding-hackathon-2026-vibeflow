export default function ScamAnalyticsDashboard() {
  return (
    <div className="text-white">

      <h1 className="text-4xl font-bold text-cyan-300 mb-8">
        📊 Cyber Shield AI Command Center
      </h1>

      {/* EXECUTIVE OVERVIEW */}

      <div className="grid md:grid-cols-4 gap-5 mb-8">

        <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500">
          <h2 className="text-gray-400">
            🚨 Scams Detected
          </h2>
          <p className="text-4xl font-bold text-cyan-300 mt-2">
           500
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-red-500">
          <h2 className="text-gray-400">
            🔴 High Risk
          </h2>
          <p className="text-4xl font-bold text-red-400 mt-2">
            52
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-yellow-500">
          <h2 className="text-gray-400">
            🟠 Under Investigation
          </h2>
          <p className="text-4xl font-bold text-yellow-400 mt-2">
            100
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-green-500">
          <h2 className="text-gray-400">
            🟢 Resolved
          </h2>
          <p className="text-4xl font-bold text-green-400 mt-2">
            80
          </p>
        </div>

      </div>

      {/* LIVE THREAT FEED */}

      <div className="bg-slate-900 p-6 rounded-2xl border border-red-500 mb-8 overflow-hidden">

        <h2 className="text-2xl font-bold text-red-400 mb-4">
          🚨 Live Threat Feed
        </h2>

        <div className="space-y-3">

          <p>🔴 Critical • UPI Scam • Chennai • 2 mins ago</p>
          <p>🟠 Medium • Fake Investment Scam • Coimbatore • 5 mins ago</p>
          <p>🟡 Low • Job Scam • Salem • 10 mins ago</p>
          <p>🔴 Critical • OTP Fraud • Bangalore • 18 mins ago</p>

        </div>

      </div>

      {/* SYSTEM RISK SCORE */}

      <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500 mb-8">

        <h2 className="text-2xl font-bold text-cyan-300 mb-4">
          ⚠️ System Risk Score
        </h2>

        <div className="w-full bg-slate-700 rounded-full h-6">

          <div
            className="
            bg-gradient-to-r
            from-yellow-500
            to-red-500
            h-6
            rounded-full
            "
            style={{ width: "72%" }}
          />

        </div>

        <p className="mt-4 text-3xl font-bold text-red-400">
          72 / 100
        </p>

        <p className="text-gray-400">
          High Risk Environment Detected
        </p>

      </div>

      {/* FRAUD FUNNEL */}

      <div className="bg-slate-900 p-6 rounded-2xl border border-purple-500 mb-8">

        <h2 className="text-2xl font-bold text-purple-300 mb-6">
          🎯 Fraud Detection Funnel
        </h2>

        <div className="space-y-4 text-center">

          <div className="bg-cyan-600 p-4 rounded-xl">
            Total Transactions: 25,000
          </div>

          ⬇️

          <div className="bg-yellow-600 p-4 rounded-xl">
            Flagged Transactions: 2,450
          </div>

          ⬇️

          <div className="bg-orange-600 p-4 rounded-xl">
            Under Investigation: 620
          </div>

          ⬇️

          <div className="bg-red-600 p-4 rounded-xl">
            Confirmed Scams: 115
          </div>

        </div>

      </div>

      {/* GEO INTELLIGENCE */}

      <div className="bg-slate-900 p-6 rounded-2xl border border-green-500 mb-8">

        <h2 className="text-2xl font-bold text-green-300 mb-4">
          🌍 Geospatial Threat Intelligence
        </h2>

        <div className="grid md:grid-cols-5 gap-4">

          <div className="bg-red-600 p-4 rounded-xl">
            Chennai
            <br />
            42 Cases
          </div>

          <div className="bg-orange-600 p-4 rounded-xl">
            Bangalore
            <br />
            28 Cases
          </div>

          <div className="bg-orange-600 p-4 rounded-xl">
            Mumbai
            <br />
            22 Cases
          </div>

          <div className="bg-yellow-600 p-4 rounded-xl">
            Delhi
            <br />
            15 Cases
          </div>

          <div className="bg-yellow-600 p-4 rounded-xl">
            Hyderabad
            <br />
            10 Cases
          </div>

        </div>

      </div>

      {/* TRENDING + NEWS */}

      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <div className="bg-slate-900 p-6 rounded-2xl border border-red-500">

          <h2 className="text-2xl font-bold mb-4 text-red-300">
            🔥 Trending Scams
          </h2>

          <ul className="space-y-3">

            <li>🥇 UPI Fraud (+35%)</li>
            <li>🥈 Investment Scam (+21%)</li>
            <li>🥉 OTP Fraud (+18%)</li>
            <li>📈 QR Code Scam (+14%)</li>
            <li>📈 Fake Job Scam (+8%)</li>

          </ul>

        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500">

          <h2 className="text-2xl font-bold mb-4 text-cyan-300">
            📰 Latest Scam News
          </h2>

          <ul className="space-y-3">

            <li>🚨 RBI warns against UPI refund scam</li>
            <li>🚨 CERT-In phishing advisory issued</li>
            <li>🚨 WhatsApp investment fraud increasing</li>
            <li>🚨 Deepfake scam reports rising</li>
            <li>🚨 Fake KYC attacks detected nationwide</li>

          </ul>

        </div>

      </div>

      {/* AI PREDICTION */}

      <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500 mb-8">

        <h2 className="text-2xl font-bold text-cyan-300 mb-6">
          🤖 AI Threat Prediction (Next 24 Hours)
        </h2>

        <div className="space-y-4">

          <div>
            UPI Fraud Risk
            <div className="bg-slate-700 h-4 rounded mt-1">
              <div
                className="bg-red-500 h-4 rounded"
                style={{ width: "82%" }}
              />
            </div>
          </div>

          <div>
            Investment Scam Risk
            <div className="bg-slate-700 h-4 rounded mt-1">
              <div
                className="bg-orange-500 h-4 rounded"
                style={{ width: "64%" }}
              />
            </div>
          </div>

          <div>
            Phishing Risk
            <div className="bg-slate-700 h-4 rounded mt-1">
              <div
                className="bg-yellow-500 h-4 rounded"
                style={{ width: "48%" }}
              />
            </div>
          </div>

        </div>

      </div>

      {/* EXECUTIVE SUMMARY */}

      <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500">

        <h2 className="text-2xl font-bold text-cyan-300 mb-4">
          🎖 AI Executive Summary
        </h2>

        <ul className="space-y-3">

          <li>• UPI Fraud increased by 35%</li>

          <li>• Chennai remains highest-risk region</li>

          <li>• 620 investigations currently active</li>

          <li>• System risk score elevated to 72</li>

          <li>• Immediate awareness campaign recommended</li>

        </ul>

      </div>

    </div>
  );
}