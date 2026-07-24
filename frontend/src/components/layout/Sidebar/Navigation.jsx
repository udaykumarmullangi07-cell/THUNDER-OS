import navigationItems from "../../../data/navigation";
import NavigationItem from "./NavigationItem";

function Navigation() {
  return (
    <div className="px-4 mt-6">
      <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
        Navigation
      </h3>

      <div className="space-y-2">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.title}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Navigation;