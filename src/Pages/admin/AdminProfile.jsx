import { useState, useEffect } from "react";
import axios from "axios";

const AdminProfile = () => {
  const [admin, setAdmin] = useState({ name: "", email: "", role: "" });
  const [isEditing, setIsEditing] = useState(false);
  const adminId = "65aebcfb123456789abcdef"; // Replace with real ID

  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/${adminId}`)
      .then((res) => setAdmin(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/admin/${adminId}`, admin)
      .then(() => alert("Profile updated"))
      .catch((err) => console.error(err));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/admin/${adminId}`)
      .then(() => alert("Profile deleted"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>
      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={admin.name}
            onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={admin.email}
            onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
            placeholder="Email"
          />
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={admin.role}
            onChange={(e) => setAdmin({ ...admin, role: e.target.value })}
            placeholder="Role"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {admin.name}
          </p>
          <p>
            <strong>Email:</strong> {admin.email}
          </p>
          <p>
            <strong>Role:</strong> {admin.role}
          </p>
        </div>
      )}
      <div className="mt-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
