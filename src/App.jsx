import { BrowserRouter, Routes, Route } from "react-router-dom";

import CyberDashboardLayout from "./layouts/CyberDashboardLayout";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";
import Home from "./pages/Home";
import DetectionCenter from "./pages/DetectionCenter";
import ReportScam from "./pages/ReportScam";
import LegalGuide from "./pages/LegalGuide";
import ComplaintHistory from "./pages/ComplaintHistory";
import ScamAnalyticsDashboard from "./pages/ScamAnalyticsDashboard";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Dashboard Pages */}
        <Route
          path="/home"
          element={
            <CyberDashboardLayout>
              <Home />
            </CyberDashboardLayout>
          }
        />

 <Route
  path="/admin"
  element={
    localStorage.getItem(
      "loggedInUser"
    ) === "admin"
      ? (
        <CyberDashboardLayout>
          <AdminPanel />
        </CyberDashboardLayout>
      )
      : (
        <Login />
      )
  }
/>

        <Route
          path="/detection"
          element={
            <CyberDashboardLayout>
              <DetectionCenter />
            </CyberDashboardLayout>
          }
        />

        <Route
          path="/report"
          element={
            <CyberDashboardLayout>
              <ReportScam />
            </CyberDashboardLayout>
          }
        />

        <Route
          path="/legal-guide"
          element={
            <CyberDashboardLayout>
              <LegalGuide />
            </CyberDashboardLayout>
          }
        />

        <Route
          path="/history"
          element={
            <CyberDashboardLayout>
              <ComplaintHistory />
            </CyberDashboardLayout>
          }
        />

        <Route
          path="/analytics"
          element={
            <CyberDashboardLayout>
              <ScamAnalyticsDashboard />
            </CyberDashboardLayout>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}