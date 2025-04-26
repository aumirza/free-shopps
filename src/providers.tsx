import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";
import { SidebarProvider } from "./components/ui/sidebar";

export function Providers({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <SidebarProvider>{children}</SidebarProvider>
    </BrowserRouter>
  );
}
