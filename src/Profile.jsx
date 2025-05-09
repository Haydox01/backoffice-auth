import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const user = location.state?.user || {};
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Name:</strong> {user.name}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Profile;
