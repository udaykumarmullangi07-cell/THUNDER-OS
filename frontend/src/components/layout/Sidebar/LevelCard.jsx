function LevelCard() {
  const level = 1;
  const currentXP = 600;
  const maxXP = 1000;

  const progress = (currentXP / maxXP) * 100;

  return (
    <div className="mx-4 mt-6 rounded-2xl bg-[#111827] p-5 shadow-lg">
      <h3 className="text-sm font-semibold text-gray-400">
        Level Progress
      </h3>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Level {level}
      </h2>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-3 flex justify-between text-sm text-gray-400">
        <span>{currentXP} XP</span>

        <span>{maxXP} XP</span>
      </div>
    </div>
  );
}

export default LevelCard;