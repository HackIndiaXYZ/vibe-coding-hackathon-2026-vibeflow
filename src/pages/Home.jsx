import GlassCard from "../components/GlassCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white px-6 py-10">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto text-center py-20">

        <div className="text-8xl mb-6">
          🛡️
        </div>

        <h1 className="text-6xl font-extrabold mb-6">
          Cyber Shield AI
        </h1>

        <h2 className="text-2xl text-cyan-300 mb-8">
          Your Intelligent Shield Against Digital Threats
        </h2>

        <p className="max-w-4xl mx-auto text-lg text-gray-300 leading-8">
          Protect yourself against scams, phishing attacks,
          fake websites, online fraud, and cybercrime using
          intelligent detection and reporting tools.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <button
            onClick={() => navigate("/report")}
            className="
            px-8 py-4
            rounded-xl
            font-bold
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            hover:scale-105
            transition
            "
          >
            🚨 Report Scam
          </button>

          <button
            onClick={() => navigate("/detection")}
            className="
            px-8 py-4
            rounded-xl
            font-bold
            bg-gradient-to-r
            from-purple-500
            to-pink-500
            hover:scale-105
            transition
            "
          >
            🔍 Detection Center
          </button>

        </div>

      </section>

      {/* QUICK ACCESS */}
      <section className="max-w-7xl mx-auto mb-16">

        <h2 className="text-4xl font-bold mb-8 text-cyan-300">
          🚀 Quick Access
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <GlassCard>
            <button
              onClick={() => navigate("/detection")}
              className="w-full text-left"
            >
              <h3 className="text-cyan-300 text-xl font-bold mb-3">
                🔍 Detection Center
              </h3>

              <p className="text-gray-300">
                Scan suspicious URLs, screenshots and
                identify potential cyber threats.
              </p>
            </button>
          </GlassCard>

          <GlassCard>
            <button
              onClick={() => navigate("/report")}
              className="w-full text-left"
            >
              <h3 className="text-red-400 text-xl font-bold mb-3">
                🚨 Report Scam
              </h3>

              <p className="text-gray-300">
                File cybercrime complaints and upload
                evidence securely.
              </p>
            </button>
          </GlassCard>

          <GlassCard>
            <button
              onClick={() => navigate("/legal-guide")}
              className="w-full text-left"
            >
              <h3 className="text-yellow-400 text-xl font-bold mb-3">
                ⚖️ Legal Guidance
              </h3>

              <p className="text-gray-300">
                Understand laws, rights and cybercrime
                reporting procedures.
              </p>
            </button>
          </GlassCard>

        </div>

      </section>

      {/* WHY CYBER SHIELD */}
      <section className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-8">
          💡 Why Cyber Shield AI?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <GlassCard>
            <h3 className="text-cyan-300 text-xl font-bold mb-4">
              🚨 Scam Detection
            </h3>

            <p className="text-gray-300">
              Detect phishing, UPI fraud, investment scams,
              fake websites and suspicious online activity.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-cyan-300 text-xl font-bold mb-4">
              ⚖️ Legal Guidance
            </h3>

            <p className="text-gray-300">
              Understand cyber laws, reporting procedures,
              and your rights in simple language.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-cyan-300 text-xl font-bold mb-4">
              📊 Scam Analytics
            </h3>

            <p className="text-gray-300">
              Stay informed about trending scams and
              emerging cybercrime threats.
            </p>
          </GlassCard>

        </div>

      </section>

      {/* CURRENT THREATS */}
      <section className="max-w-7xl mx-auto mt-16">

        <h2 className="text-4xl font-bold mb-8">
          🚨 Current Threats
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <GlassCard>
            <h3 className="text-red-400 text-xl font-bold mb-3">
              💸 UPI Fraud
            </h3>

            <p className="text-gray-300">
              Fake payment screenshots, QR code scams,
              refund frauds and bank impersonation attacks.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-yellow-400 text-xl font-bold mb-3">
              🎭 Deepfake Scams
            </h3>

            <p className="text-gray-300">
              AI generated voice cloning and deepfake
              impersonation attacks are increasing rapidly.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-cyan-400 text-xl font-bold mb-3">
              🔗 Phishing Websites
            </h3>

            <p className="text-gray-300">
              Fake banking and investment portals steal
              passwords and financial information.
            </p>
          </GlassCard>

        </div>

      </section>

      {/* CYBERCRIME CONTACTS */}
      <section className="max-w-7xl mx-auto mt-16">

        <h2 className="text-4xl font-bold mb-8">
          📞 Cybercrime Emergency Contacts
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <GlassCard>
            <h3 className="text-cyan-300 text-xl font-bold mb-3">
              🚨 Cyber Helpline
            </h3>

            <p className="text-3xl font-bold">
              1930
            </p>

            <p className="text-gray-300 mt-3">
              Report financial cyber fraud immediately.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-cyan-300 text-xl font-bold mb-3">
              🌐 Cyber Crime Portal
            </h3>

            <p className="font-bold">
              cybercrime.gov.in
            </p>

            <p className="text-gray-300 mt-3">
              Official online cybercrime complaint portal.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-cyan-300 text-xl font-bold mb-3">
              👮 Emergency Police
            </h3>

            <p className="text-3xl font-bold">
              112
            </p>

            <p className="text-gray-300 mt-3">
              National emergency response number.
            </p>
          </GlassCard>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-cyan-500/20 pt-10">

        <div className="text-center">

          <h3 className="text-2xl font-bold text-cyan-300 mb-3">
            🛡️ Cyber Shield AI
          </h3>

          <p className="text-gray-400 mb-4">
            Detect • Report • Protect • Recover
          </p>

          <p className="text-gray-500 text-sm">
            © 2026 Cyber Shield AI. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-xs mt-2">
            Securing Your Digital Footprint, One Byte At A Time 🔐
          </p>

        </div>

      </footer>

    </div>
  );
}

