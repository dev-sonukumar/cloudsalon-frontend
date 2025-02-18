import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Sidebar from "@/components/ui/sidebar";
import ServicesManager from "@/components/admin/ServicesManager";
import PostsManager from "@/components/admin/PostsManager";
import BisFaqManager from "@/components/admin/BisFaqManager";
import Dashboard from "@/components/admin/Dashboard";
import { Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logo } from "@/utils/ImgUtils";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();

  const [services, setServices] = useState([
    { id: 1, title: "Web Development", image: "/assets/service/webdev.jpg" },
    { id: 2, title: "SEO Optimization", image: "/assets/service/seo.jpg" },
  ]);

  const [posts, setPosts] = useState([
    { id: 1, title: "React Tips", content: "Learn React best practices" },
    { id: 2, title: "Tailwind CSS", content: "Style faster with Tailwind" },
  ]);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Clear authentication token
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex h-screen">
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger className="lg:hidden fixed top-4 left-4 font-bold">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-4 flex flex-col h-full">
          <Sidebar setActiveSection={setActiveSection} />
          <div className="mt-auto">
            <Button
              variant="destructive"
              className="w-full flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut /> Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="md:inline w-[18%] hidden lg:flex flex-col p-4 h-full">
        <nav className="flex-1">
          <div className="flex items-center gap-x-3 relative">
            <img
              src={logo}
              alt="MCS Technology Logo"
              className="p-1 w-[9rem] h-12 shadow rounded-xl transition-all duration-200"
            />
          </div>
          <Sidebar setActiveSection={setActiveSection} />
        </nav>
        {/* Logout Button at Bottom */}
        <Button
          variant="destructive"
          className="w-full flex items-center gap-2 mt-auto"
          onClick={handleLogout}
        >
          <LogOut /> Logout
        </Button>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        {activeSection === "dashboard" && <Dashboard />}
        {activeSection === "services" && (
          <ServicesManager services={services} setServices={setServices} />
        )}
        {activeSection === "posts" && (
          <PostsManager posts={posts} setPosts={setPosts} />
        )}
        {activeSection === "bisfaq" && <BisFaqManager />}
      </main>

      {/* Main Content */}
    </div>
  );
};

export default AdminPanel;
