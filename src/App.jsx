import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      await instance.initialize();
      const loginResponse = await instance.acquireTokenPopup({
        scopes: ["api://d146d2e7-d295-4e9e-ba74-797018a6e64d/Cplaw.Read"]
      });

      console.log("Login successful:", loginResponse);
      const accessToken = loginResponse.accessToken;
      console.log("Access Token:", accessToken);

      const response = await fetch("https://localhost:7062/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch user data");

      const userData = await response.json();
      console.log("Backend Response:", userData);

      // Update state and navigate to profile page
      setUser(userData.user);
      navigate("/profile", { state: { user: userData.responseData.user } });

    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>BackOffice Employee Login</h1>
      <button onClick={handleLogin} style={{ padding: "10px", fontSize: "16px" }}>
        Sign in with Work Email
      </button>
    </div>
  );
};

export default App;
