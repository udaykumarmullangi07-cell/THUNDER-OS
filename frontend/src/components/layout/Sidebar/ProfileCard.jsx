import { UserCircle2 } from "lucide-react";

function ProfileCard() {
  return (
    <div className="m-4 rounded-2xl bg-[#111827] p-6 shadow-lg">
      <div className="flex flex-col items-center">
        <UserCircle2
          size={80}
          className="text-blue-500"
        />

        <h2 className="mt-4 text-lg font-bold text-white">
          Uday Kumar
        </h2>

        <p className="text-sm font-medium tracking-wider text-blue-400">
          THUNDER
        </p>

        <p className="mt-2 text-center text-xs text-gray-400">
          Electronics & Communication Engineering
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>

          <span className="text-xs text-gray-400">
            Online
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;