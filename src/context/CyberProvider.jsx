import { useState } from "react";
import { CyberContext } from "./CyberContext";

export function CyberProvider({ children }) {

  // Crime Type Detected by AI
  const [crimeType, setCrimeType] = useState("");

  // AI Analysis Data
  const [incidentData, setIncidentData] = useState({
    crimeType: "",
    description: "",
    riskLevel: "",
    evidence: [],
    caseId: "",
  });

  // Incident Report Form Data
  const [incidentReport, setIncidentReport] = useState({
    description: "",
    date: "",
    amountLost: "",
    category: "",
    suspiciousLink: "",
  });

  return (
    <CyberContext.Provider
      value={{
        crimeType,
        setCrimeType,

        incidentData,
        setIncidentData,

        incidentReport,
        setIncidentReport,
      }}
    >
      {children}
    </CyberContext.Provider>
  );
}