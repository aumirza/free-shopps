import { SearchBar } from "./SearchBar";
import { UserDropDown } from "./UserDropdown";
import NotificationPanel from "./NotificationPanel";
import { SidebarTrigger } from "./ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();
  return (
    <header className="border-b flex items-center">
      {isMobile && <SidebarTrigger size="lg" className="md:hidden" />}
      <div className="w-full flex h-16 items-center justify-end md:justify-around px-4">
        <SearchBar />
        <NotificationPanel />
        <UserDropDown />
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
