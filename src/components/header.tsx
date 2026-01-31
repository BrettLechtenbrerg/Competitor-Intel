"use client";

import { HelpButton } from "@/components/help/help-button";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Moon, Sun } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-6">
      <a
        href="https://masters-edge-portal.vercel.app"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Back to Portal</span>
      </a>
      <div className="flex flex-1 items-center justify-end gap-4">
        <HelpButton />
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {darkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-sm font-medium">
          A
        </div>
      </div>
    </header>
  );
}
