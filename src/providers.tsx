import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { SidebarProvider } from "./components/ui/sidebar";
import { store } from "./store";

export function Providers({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SidebarProvider>{children}</SidebarProvider>
      </Provider>
    </BrowserRouter>
  );
}
