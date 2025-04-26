import { SearchBar } from "./SearchBar";
import { UserDropDown } from "./UserDropdown";

export function Header() {
  return (
    <header className="border-b">
      <div className="w-full flex h-16 items-center justify-around px-4">
        <SearchBar />
        <UserDropDown />
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
