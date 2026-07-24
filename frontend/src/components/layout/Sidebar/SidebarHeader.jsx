import { Zap } from "lucide-react";

function SidebarHeader() {
  return (
    <div className="flex items-center gap-3 border-b border-zinc-800 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
        <Zap className="h-6 w-6 text-white" />
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-wide text-white">
          THUNDER OS
        </h1>

        <p className="text-xs uppercase tracking-widest text-zinc-400">
          Habit Tracker 2026
        </p>
      </div>
    </div>
  );
}

export default SidebarHeader;