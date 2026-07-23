function Navbar() {
  return (
    <header className="h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-8">
      <input
        type="text"
        placeholder="Search..."
        className="bg-zinc-800 rounded-lg px-4 py-2 w-80 outline-none"
      />

      <div className="flex gap-6 text-xl">
        <span>🌙</span>
        <span>👤</span>
      </div>
    </header>
  );
}

export default Navbar;