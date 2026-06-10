export default function LegalGuide() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan-300 mb-6">
        ⚖️ Legal Guidance
      </h1>

      <div className="space-y-6">

        <div className="bg-slate-900 p-5 rounded-xl">
          <h2 className="font-bold text-xl mb-2">
            Possible Cybercrime Category
          </h2>

          <p>
            UPI Fraud / Phishing / Identity Theft
          </p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl">
          <h2 className="font-bold text-xl mb-2">
            Relevant Laws & Rights
          </h2>

          <p>
            IT Act 2000, Cyber Fraud Protection,
            Digital Evidence Rights.
          </p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl">
          <h2 className="font-bold text-xl mb-2">
            Authorities May Request
          </h2>

          <ul className="list-disc ml-6">
            <li>Screenshots</li>
            <li>Bank Statement</li>
            <li>Transaction ID</li>
            <li>Phone Number</li>
            <li>Chat History</li>
          </ul>
        </div>

      </div>
    </div>
  );
}