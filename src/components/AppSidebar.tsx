import * as React from "react";
import {
  HomeIcon,
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

// This is sample data.
const navMainData = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
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
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainData} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
