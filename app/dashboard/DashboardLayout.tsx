import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import React from "react";
import AppSidebar from "./AppSidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <main className="p-2 w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}

export default DashboardLayout;
