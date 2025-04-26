import * as React from "react";
import {
  LayoutDashboardIcon,
  NewspaperIcon,
  RefreshCcwIcon,
  StickyNoteIcon,
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
