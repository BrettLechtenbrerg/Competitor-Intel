"use client";

import { Sidebar } from "./sidebar";
import { HelpButton } from "./help-button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
      <HelpButton />
    </div>
  );
}
