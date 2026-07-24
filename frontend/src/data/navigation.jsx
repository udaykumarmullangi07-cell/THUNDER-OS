import {
  LayoutDashboard,
  CheckSquare,
  Footprints,
  Dumbbell,
  Apple,
  BookOpen,
  Code2,
  Wallet,
  NotebookPen,
  BarChart3,
  CalendarDays,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Habit Tracker",
    icon: CheckSquare,
    active: true,
  },
  {
    title: "Running Log",
    icon: Footprints,
  },
  {
    title: "Gym Log",
    icon: Dumbbell,
  },
  {
    title: "Nutrition",
    icon: Apple,
  },
  {
    title: "Study Tracker",
    icon: BookOpen,
  },
  {
    title: "LeetCode",
    icon: Code2,
  },
  {
    title: "Finance",
    icon: Wallet,
  },
  {
    title: "Journal",
    icon: NotebookPen,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "Calendar",
    icon: CalendarDays,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];