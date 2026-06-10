export async function analyzeCyberCrime(userText) {

  const text = userText.toLowerCase();

  if (
    text.includes("bank") ||
    text.includes("kyc") ||
    text.includes("otp") ||
    text.includes("link")
  ) {
    return `
Crime Type: Phishing / Banking Fraud

Risk Score: 95%

Threat Level: High

Evidence Required:
• SMS Screenshot
• Bank Transaction ID
• Phone Number

Immediate Actions:
• Contact Bank Immediately
• Block Debit/Credit Cards
• Save Screenshots
• File Cyber Complaint
`;
  }

  if (
    text.includes("instagram") ||
    text.includes("facebook") ||
    text.includes("account hacked")
  ) {
    return `
Crime Type: Social Media Account Hacking

Risk Score: 88%

Threat Level: Medium

Evidence Required:
• Login Alerts
• Screenshots
• Username

Immediate Actions:
• Change Password
• Enable 2FA
• Report Account Compromise
`;
  }

  if (
    text.includes("upi") ||
    text.includes("gpay") ||
    text.includes("phonepe") ||
    text.includes("paytm")
  ) {
    return `
Crime Type: UPI Fraud

Risk Score: 97%

Threat Level: High

Evidence Required:
• Transaction ID
• Bank Statement
• Screenshot

Immediate Actions:
• Inform Bank
• Raise Chargeback Request
• Report Fraud Immediately
`;
  }

  if (
    text.includes("fake profile") ||
    text.includes("impersonation")
  ) {
    return `
Crime Type: Identity Theft / Fake Profile

Risk Score: 82%

Threat Level: Medium

Evidence Required:
• Profile URL
• Screenshots
• Messages

Immediate Actions:
• Report Fake Account
• Preserve Evidence
• Notify Platform
`;
  }

  return `
Crime Type: Suspicious Cyber Activity

Risk Score: 70%

Threat Level: Medium

Evidence Required:
• Screenshots
• Messages
• Relevant Documents

Immediate Actions:
• Preserve Evidence
• Avoid Further Interaction
• Report Incident
`;
}