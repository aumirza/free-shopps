import { PropsWithChildren } from "react";

import { SidebarProvider } from "./components/ui/sidebar";

export function Providers({ children }: PropsWithChildren) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
