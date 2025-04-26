import { Providers } from "./providers";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarInset } from "./components/ui/sidebar";
import { Header } from "./components/Header";

function App() {
  return (
    <Providers>
      <AppSidebar />
      <SidebarInset>
        <main>
          <Header />
          <div className="p-5 bg-accent"></div>
        </main>
      </SidebarInset>
    </Providers>
  );
}

export default App;
