import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    // ADMIN LOGIN
    if (role === "admin") {

      if (
        username === "admin" &&
        password === "admin123"
      ) {
        localStorage.setItem(
          "loggedInUser",
          "admin"
        );

        navigate("/admin");
      } else {
        alert("Invalid Admin Credentials");
      }

      return;
    }

    // USER LOGIN
    localStorage.setItem(
      "loggedInUser",
      username
    );

    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050b18]">

      <div
        className="
        w-full
        max-w-md
        bg-slate-900/80
        p-8
        rounded-3xl
        border
        border-cyan-500/20
        shadow-2xl
        shadow-cyan-500/20
        "
      >

        <h1 className="text-4xl text-center font-bold text-cyan-300 mb-2">
          🛡️ Cyber Shield AI
        </h1>

        <p className="text-center text-gray-400 mb-6">
          Cyber Crime Management System
        </p>

        {/* ROLE SELECTOR */}
        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          className="
          w-full
          p-3
          rounded-lg
          mb-4
          bg-slate-800
          text-white
          border
          border-cyan-500/30
          "
        >
          <option value="user">
            👤 User Login
          </option>

          <option value="admin">
            🛡 Admin Login
          </option>
        </select>

        <input
          type="text"
          placeholder="Username"
          className="
          w-full
          p-3
          rounded-lg
          mb-4
          text-black
          "
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="
          w-full
          p-3
          rounded-lg
          mb-4
          text-black
          "
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="
          w-full
          p-3
          rounded-lg
          bg-cyan-600
          hover:bg-cyan-500
          font-bold
          transition
          "
        >
          🔐 Login
        </button>

        {role === "admin" && (
          <div className="mt-4 text-center text-yellow-300 text-sm">
            Demo Admin Credentials:
            <br />
            Username: admin
            <br />
            Password: admin123
          </div>
        )}

      </div>

    </div>
  );
}