import * as React from "react";
import {
  BoxIcon,
  BriefcaseBusinessIcon,
  FileQuestionIcon,
  LayoutDashboardIcon,
  MapIcon,
  NewspaperIcon,
  RefreshCcwIcon,
  SettingsIcon,
  StickyNoteIcon,
  UserPenIcon,
} from "lucide-react";

import { NavMain } from "@/components/NavMain";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import logo from "@/assets/logo.png";

// This is sample data.
const navMainData = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Article",
    url: "/article",
    icon: NewspaperIcon,
  },
  {
    title: "Auto Dealership",
    url: "#",
    icon: RefreshCcwIcon,
    items: [
      {
        title: "Add Auto Dealership",
        url: "/auto-dealership/add",
      },
      {
        title: "All Auto Dealership",
        url: "/auto-dealership/",
      },
    ],
  },
  {
    title: "Blog",
    url: "#",
    icon: StickyNoteIcon,
    items: [
      {
        title: "Blog category",
        url: "/blog/category",
      },
      {
        title: "Blog Page",
        url: "/blog/page",
      },
      {
        title: "Blog",
        url: "/blog",
      },
    ],
  },
  {
    title: "Career",
    icon: BriefcaseBusinessIcon,
    url: "#",
    items: [
      {
        title: "Career",
        url: "/career",
      },
      {
        title: "Career Openings",
        url: "/career/openings",
      },
      {
        title: "career Openings category",
        url: "/career/category",
      },
    ],
  },
  {
    title: "Country, State & City",
    icon: MapIcon,
    url: "map",
  },
  {
    title: "Faqs",
    url: "faqs",
    icon: FileQuestionIcon,
  },
  {
    title: "Order",
    url: "order",
    icon: BoxIcon,
  },
  {
    title: "User Management",
    url: "users",
    icon: UserPenIcon,
  },
  {
    title: "Settings",
    url: "setting",
    icon: SettingsIcon,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <div className="ml-14">
        <SidebarHeader>
          <img src={logo} className="size-20" />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={navMainData} />
        </SidebarContent>
        <SidebarRail />
      </div>
    </Sidebar>
  );
}
