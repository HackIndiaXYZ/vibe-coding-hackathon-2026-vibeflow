localStorage.removeItem("complaints");
localStorage.removeItem("loggedInUser");

import { useState } from "react";

export default function ReportScam() {
  const [result, setResult] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  const scamType =
    e.target.scamType.value;

  const complaintId =
    "CSAI-" +
    Math.floor(Math.random() * 1000000);

  let plans;

  switch (scamType) {
    case "UPI Scam":
      plans = {
        action: `
• Contact bank immediately
• Call 1930 immediately
• Freeze suspicious transactions
• Change banking passwords
        `,
        evidence: `
1. Save UPI transaction screenshots
2. Save payment receipts
3. Save scammer UPI ID
4. Save phone numbers
5. Save bank statements
        `,
      };
      break;

    case "Investment Scam":
      plans = {
        action: `
• Stop sending money
• Inform bank
• Report fake platform
• Preserve communication
        `,
        evidence: `
1. Save investment screenshots
2. Save payment proof
3. Save website links
4. Save chat history
5. Save account details
        `,
      };
      break;

    case "Phishing":
      plans = {
        action: `
• Change passwords
• Enable 2FA
• Logout all devices
• Scan device for malware
        `,
        evidence: `
1. Save phishing emails
2. Save URLs
3. Save screenshots
4. Save login alerts
5. Save browser history
        `,
      };
      break;

    case "Fake Job Scam":
      plans = {
        action: `
• Stop communication
• Report fake recruiter
• Inform bank if money sent
• Preserve offer letters
        `,
        evidence: `
1. Save offer letters
2. Save recruiter details
3. Save chats
4. Save payment proof
5. Save company links
        `,
      };
      break;

    default:
      plans = {
        action: `
• Report immediately
• Preserve evidence
• Contact authorities
        `,
        evidence: `
1. Save all records
2. Save screenshots
3. Save chats
4. Save transactions
        `,
      };
  }

const complaint = {
  id: complaintId,

  username:
    localStorage.getItem(
      "loggedInUser"
    ),

  name:
    e.target[0].value,

  location:
    e.target[1].value,

  scamType,

  date:
    new Date().toLocaleDateString(),

  status: "Pending",
};

  const existing =
    JSON.parse(
      localStorage.getItem(
        "complaints"
      )
    ) || [];

  existing.push(complaint);

  localStorage.setItem(
    "complaints",
    JSON.stringify(existing)
  );

  setResult(`
✅ COMPLAINT FILED SUCCESSFULLY

Complaint ID:
${complaintId}

Status:
🟡 PENDING

━━━━━━━━━━━━━━━━━━━━━━

🚨 ACTION PLAN

${plans.action}

━━━━━━━━━━━━━━━━━━━━━━

📂 EVIDENCE COLLECTION

${plans.evidence}

━━━━━━━━━━━━━━━━━━━━━━

🛡️ PREVENTION PLAN

• Never share OTP
• Never click suspicious links
• Enable Two-Factor Authentication
• Verify before payment
• Report scams immediately

━━━━━━━━━━━━━━━━━━━━━━

📞 REPORT TO

Cyber Crime Helpline:
1930

Cyber Crime Portal:
https://cybercrime.gov.in
`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan-300 mb-6">
        🚨 Report Scam
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
<input
  type="text"
  placeholder="Name"
  required
  className="w-full p-3 rounded bg-slate-800"
/>

<input
  type="text"
  placeholder="Location"
  required
  className="w-full p-3 rounded bg-slate-800"
/>

<input
  type="date"
  required
  className="w-full p-3 rounded bg-slate-800"
/>

<input
  type="number"
  placeholder="Amount Lost"
  required
  className="w-full p-3 rounded bg-slate-800"
/>

<select
  name="scamType"
  required
  className="w-full p-3 rounded bg-slate-800"
>
  <option value="">Select Scam Type</option>
  <option>UPI Scam</option>
  <option>Investment Scam</option>
  <option>Phishing</option>
  <option>Fake Job Scam</option>
  <option>OTP Fraud</option>
</select>

<input
  type="text"
  placeholder="Suspicious URL"
  required
  className="w-full p-3 rounded bg-slate-800"
/>

<textarea
  rows="5"
  placeholder="What Happened?"
  required
  className="w-full p-3 rounded bg-slate-800"
/>

<textarea
  rows="3"
  placeholder="Emergency Actions Taken"
  required
  className="w-full p-3 rounded bg-slate-800"
/>

<textarea
  rows="3"
  placeholder="Evidence of Crime"
  required
  className="w-full p-3 rounded bg-slate-800"
/>

<input
  type="file"
  required
  className="w-full"
/>
<button
  type="submit"
  className="
  w-full
  py-4
  rounded-xl
  font-bold
  text-lg
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
  hover:scale-105
  transition-all
  duration-300
  "
>
  🚨 File Complaint
</button>
      </form>

      {result && (
        <div className="mt-8 p-6 rounded-2xl bg-slate-900 border border-cyan-500">
          <pre className="whitespace-pre-wrap text-gray-300">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}