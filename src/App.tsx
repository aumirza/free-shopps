import { Route, Routes } from "react-router";
import { Providers } from "@/providers";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { Header } from "@/components/Header";
import { HomePage } from "@/pages/Home";
import { ArticlePage } from "@/pages/Article";
import { Thankyou } from "@/pages/Thankyou";
import bgVector from "@/assets/bg-vector.svg";

function App() {
  return (
    <Providers>
      <AppSidebar />
      <SidebarInset>
        <main className="flex flex-col h-full">
          <Header />
          <div className="flex-grow relative p-5 bg-accent overflow-hidden">
            <div className="h-full relative z-20">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/article" element={<ArticlePage />} />
                <Route path="*" element={<Thankyou />} />
              </Routes>
            </div>
            <img src={bgVector} className="absolute inset-0" />
          </div>
        </main>
      </SidebarInset>
    </Providers>
  );
}

export default App;
