import { Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-border">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="text-2xl font-bold text-accent">☮</div>
            <span className="text-2xl font-bold text-accent">craigslist</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="UI/UX Designer"
                className="w-full pl-10 pr-4 py-2 border border-border rounded bg-input text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm text-muted-foreground hidden sm:inline">
                account
              </span>
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded font-semibold text-sm hover:bg-opacity-90 transition-all">
              Post
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
