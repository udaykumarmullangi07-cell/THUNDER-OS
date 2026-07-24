import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;