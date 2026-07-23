function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">
      <h1 className="text-2xl font-bold text-blue-500 mb-10">
        THUNDER OS ⚡
      </h1>

      <nav className="space-y-4">
        <p className="hover:text-blue-400 cursor-pointer">🏠 Dashboard</p>
        <p className="hover:text-blue-400 cursor-pointer">📅 Calendar</p>
        <p className="hover:text-blue-400 cursor-pointer">✅ Tasks</p>
        <p className="hover:text-blue-400 cursor-pointer">📝 Notes</p>
        <p className="hover:text-blue-400 cursor-pointer">🎯 Goals</p>
        <p className="hover:text-blue-400 cursor-pointer">💪 Fitness</p>
        <p className="hover:text-blue-400 cursor-pointer">🤖 AI</p>
        <p className="hover:text-blue-400 cursor-pointer">⚙ Settings</p>
      </nav>
    </aside>
  );
}

export default Sidebar;