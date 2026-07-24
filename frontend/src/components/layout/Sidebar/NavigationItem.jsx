function NavigationItem({ icon: Icon, title }) {
  return (
    <button
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-gray-300
        transition-all
        hover:bg-blue-600
        hover:text-white
      "
    >
      <Icon size={20} />

      <span>{title}</span>
    </button>
  );
}

export default NavigationItem;