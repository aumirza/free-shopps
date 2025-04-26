import { Providers } from "./providers";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarInset } from "./components/ui/sidebar";
import { HomePage } from "./pages/Home";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router";
import { ArticlePage } from "./pages/Article";

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
              <Route path="/article" element={<ArticlePage />} />
            </Routes>
          </div>
        </main>
      </SidebarInset>
    </Providers>
  );
}

export default App;
