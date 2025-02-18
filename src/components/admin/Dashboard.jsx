import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Settings, User, BarChart2, Shield } from "lucide-react";
import AdminProfile from "@/Pages/admin/AdminProfile";
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
  const cards = [
    { title: "Profile", icon: <User size={32} />, link: "/adminProfile" },
    { title: "Admin Home", icon: <Shield size={32} />, link: "/adminProfile" },
    { title: "Home", icon: <Home size={32} />, link: "/" },
    { title: "Analytics", icon: <BarChart2 size={32} />, link: "/analytics" },
    { title: "Settings", icon: <Settings size={32} />, link: "/settings" },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {cards.map((card, index) => (
          <Link to={card.link} key={index}>
            <Card className="p-6 flex flex-col items-center justify-center hover:bg-gray-100 cursor-pointer transition rounded-2xl shadow-md">
              {card.icon}
              <p className="mt-2 text-lg font-semibold">{card.title}</p>
            </Card>
          </Link>
        ))}
      </div>

      {/* Define Routes within the parent Router */}
      <Routes>
        <Route path="/adminProfile" element={<AdminProfile />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
