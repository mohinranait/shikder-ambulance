import {
  Ambulance,
  Car,
  CarFront,
  Cross,
  PlaneTakeoff,
  LayoutDashboard,
  Package,
  LucideIcon,
  Settings,
  Image,
  Notebook,
} from "lucide-react";

export interface SidebarNavItem {
  title: string;
  url?: string;
  icon?: LucideIcon;
  badge?: string;
  items?: SidebarNavItem[];
}

// Navigation group interface
export interface SidebarNavGroup {
  title: string;
  items: SidebarNavItem[];
}

// User interface
export interface SidebarUser {
  name: string;
  email: string;
  avatar: string;
}

// Team interface
export interface SidebarTeam {
  name: string;
  logo: LucideIcon;
  plan: string;
}

// Main sidebar data interface
export interface SidebarData {
  navGroups: SidebarNavGroup[];
}

export const ambulanceTypes = [
  {
    _id: "1",
    icon: <Car className="text-primary" size={30} />,
    title: "Ac ambulance service",
    content:
      "The Ac Ambulance is the best to transport a patient a place to another. It is all Districts are available.",
    url: "/ac-ambulance-service",
  },
  {
    _id: "2",
    icon: <Ambulance className="text-primary" size={30} />,
    title: "Non-Ac Ambulance service",
    content:
      "Non-Ac Ambulance is Normal then Ac Ambulacne. it is low price then Ac Ambulance. 24/7 Ambulance is Available.",
    url: "/non-ac-ambulance",
  },
  {
    _id: "3",
    icon: <CarFront className="text-primary" size={30} />,
    title: "Basic Life Support (BLS) Ambulances",
    content:
      "Basic Life Support ambulances are a crucial part of emergency medical services, providing essential care.",
    url: "/icu-ambulance-service",
  },
  {
    _id: "4",
    icon: <Cross className="text-primary" size={30} />,
    title: "Advanced Life Support (ALS) Ambulances",
    content:
      "ALS ambulances are equipped to provide a wider range of medical procedures than BLS ambulances",
    url: "/",
  },
  {
    _id: "5",
    icon: <PlaneTakeoff className="text-primary" size={30} />,
    title: "Freezing Ambulance service",
    content:
      "It is the best way to save or carry the dead body. It has a frozen box. Use this save the dead body.",
    url: "/freezing-ambulance-service",
  },
  {
    _id: "6",
    icon: <Cross className="text-primary" size={30} />,
    title: "Hiace Microbus Service",
    content:
      "Hi-ace Microbus car is available. We provide only Hiace car from Dhaka to all districts.",
    url: "/",
  },
];

export const sidebarData: SidebarData = {
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/admin",
          icon: LayoutDashboard,
        },

        {
          title: "Manage posts",
          icon: Package,
          items: [
            {
              title: "New Post",
              url: "/admin/post/new",
            },
            {
              title: "All posts",
              url: "/admin/post/all",
            },
          ],
        },
        {
          title: "Money Receipt",
          icon: Notebook,
          items: [
            {
              title: "New Receipt",
              url: "/admin/receipt/new",
            },
            {
              title: "All posts",
              url: "/admin/receipt/all",
            },
          ],
        },
        {
          title: "Media",
          url: "/admin/media",
          icon: Image,
        },
        {
          title: "Setting",
          url: "/admin/setting",
          icon: Settings,
        },
      ],
    },
  ],
};
