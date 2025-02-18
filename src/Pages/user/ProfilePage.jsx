import { useState } from "react";
import { ShoppingBag, Heart, User, Edit } from "lucide-react";

const ProfilePage = () => {
  // State to manage user info and profile picture
  const [userInfo, setUserInfo] = useState({
    name: "Sonu Kumar",
    email: "sonu.kumar@example.com",
    location: "Delhi, Najafgarh, India",
    profilePicture: "https://via.placeholder.com/150", // Placeholder for profile image
  });

  const [newName, setNewName] = useState(userInfo.name);
  const [newEmail, setNewEmail] = useState(userInfo.email);
  const [newLocation, setNewLocation] = useState(userInfo.location);

  const handleProfileUpdate = () => {
    setUserInfo({
      ...userInfo,
      name: newName,
      email: newEmail,
      location: newLocation,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-white">
          <div className="absolute top-4 right-4 text-2xl font-bold">
            <User />
          </div>
          <div className="flex items-center space-x-4">
            <img
              className="w-24 h-24 rounded-full border-4 border-white cursor-pointer"
              src={userInfo.profilePicture}
              alt="User"
              onClick={() => alert("Redirecting to Profile Edit Page")} // Placeholder for edit functionality
            />
            <div>
              <h1 className="text-3xl font-semibold">{userInfo.name}</h1>
              <p className="mt-2 text-sm">{userInfo.email}</p>
              <p className="mt-2 text-sm">{userInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Navigation & Content */}
        <div className="px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
              <ul>
                {/* Edit Profile */}
                <li
                  className="flex items-center space-x-2 py-2 cursor-pointer"
                  onClick={() => alert("Redirecting to Profile Edit Page")}
                >
                  <Edit className="text-indigo-500" />
                  <span>Edit Profile</span>
                </li>

                {/* Change Password */}
                <li
                  className="flex items-center space-x-2 py-2 cursor-pointer"
                  onClick={() => alert("Redirecting to Change Password Page")}
                >
                  <User className="text-indigo-500" />
                  <span>Change Password</span>
                </li>

                {/* Order History */}
                <li className="flex items-center space-x-2 py-2 cursor-pointer">
                  <ShoppingBag className="text-green-500" />
                  <span>Order History</span>
                </li>

                {/* Wishlist */}
                <li className="flex items-center space-x-2 py-2 cursor-pointer">
                  <Heart className="text-red-500" />
                  <span>Wishlist</span>
                </li>
              </ul>
            </div>

            {/* Profile Update Form */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Edit Your Details</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                {/* Update Name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500"
                  />
                </div>

                {/* Update Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500"
                  />
                </div>

                {/* Update Location */}
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500"
                  />
                </div>

                {/* Save Changes */}
                <button
                  type="submit"
                  onClick={handleProfileUpdate}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>

          {/* Profile Footer */}
          <div className="mt-8 text-center">
            <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
