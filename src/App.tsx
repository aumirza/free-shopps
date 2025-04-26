import { Providers } from "./providers";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarInset } from "./components/ui/sidebar";
import { HomePage } from "./pages/Home";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Providers>
      <AppSidebar />
      <SidebarInset>
        <main>
          <Header />
          <div className="p-5 bg-accent">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </main>
      </SidebarInset>
    </Providers>
  );
}

export default App;
