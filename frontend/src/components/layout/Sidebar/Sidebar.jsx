import SidebarHeader from "./SidebarHeader";
import ProfileCard from "./ProfileCard";
import Navigation from "./Navigation";
import LevelCard from "./LevelCard";

function Sidebar() {
  return (
    <aside className="w-80 min-h-screen bg-[#0B1220] border-r border-zinc-800">
      <SidebarHeader />

      <ProfileCard />

      <Navigation />

      <LevelCard />
    </aside>
  );
}

export default Sidebar;