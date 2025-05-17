import { ModeToggle } from "@/components/mode-toggle";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
export const Layout = () => {
  return (
    <div className="layout flex w-full min-h-full overflow-x-hidden  ">
      <SidebarProvider>
        <AppSidebar />
        <main className="content w-full lg:p-10 py-4  h-screen overflow-y-auto">
          <SidebarTrigger />
          <Outlet />
        </main>
        <div className="p-6 top-8 right-8 absolute ">
          <ModeToggle />
        </div>
      </SidebarProvider>
    </div>
  );
};
