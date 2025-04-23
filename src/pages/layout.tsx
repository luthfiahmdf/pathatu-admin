import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar } from "@/components/ui/sidebar";

import { useShowSidebar } from "@/store/sidebar/useShowSidebar";
import {
  AiOutlineAppstore,
  AiOutlineForm,
  AiOutlineHistory,
} from "react-icons/ai";
import { Outlet } from "react-router";
export const Layout = () => {
  const { showSideBar } = useShowSidebar();
  const onLogout = () => {
    console.log("logout");
  };
  const listSidebar = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <AiOutlineAppstore />,
    },
    // {
    //   name: "Buku",
    //   link: "/dashboard/books",
    //   icon: <AiOutlineHdd />,
    // },
    {
      name: "Kategori",
      link: "/dashboard/category",
      icon: <AiOutlineForm />,
    },
    {
      name: "Sumber Buku",
      link: "/dashboard/books-source",
      icon: <AiOutlineHistory />,
    },
  ];
  return (
    <div className="layout flex w-full min-h-full overflow-x-hidden  ">
      <Sidebar
        isShow={showSideBar as boolean}
        sideList={listSidebar}
        onLogout={onLogout}
        title="Pathatu"
      />

      <main className="content w-full lg:p-10 py-4  h-screen overflow-y-auto">
        <Outlet />
      </main>
      <div className="p-6 top-8 right-8 absolute ">
        <ModeToggle />
      </div>
    </div>
  );
};
