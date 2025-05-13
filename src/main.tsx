import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./pages/layout";
import { ThemeProvider } from "./components/themes-provider";
import { Dashboard } from "./pages/dashboard";
import { CategoryPage } from "./pages/category";
import { BooksPage } from "./pages/books";
import { BookSourcePage } from "./pages/BooksSource";
import { ArticlePage } from "./pages/article";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/category",
        element: <CategoryPage />,
      },
      {
        path: "/dashboard/books",
        element: <BooksPage />,
      },
      {
        path: "/dashboard/books-source",
        element: <BookSourcePage />,
      },
      {
        path: "/dashboard/article",
        element: <ArticlePage />
      }
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={Router} />
  </ThemeProvider>
);
