import { SearchBar } from "./SearchBar";
import { UserDropDown } from "./UserDropdown";
import NotificationPanel from "./NotificationPanel";

export function Header() {
  return (
    <header className="border-b">
      <div className="w-full flex h-16 items-center justify-around px-4">
        <SearchBar />
        <NotificationPanel />
        <UserDropDown />
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
