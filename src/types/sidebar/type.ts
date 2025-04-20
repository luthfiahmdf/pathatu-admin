import { ReactNode } from "react";

export type TSidebar = {
  title?: string;
  onLogout?: () => void;
  sideList: Array<{
    name?: string;
    link?: string;
    icon?: ReactNode;
  }>;
  isShow?: boolean;
};
export type TShowSidebar = {
  showSideBar: boolean;
  setShowSidebar: () => void;
};
