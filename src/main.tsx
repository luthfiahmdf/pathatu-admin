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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Suspense } from "react";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 menit
      gcTime: 30 * 60 * 1000, // 30 menit
      refetchOnWindowFocus: false,
    },
  },
});
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
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<div>loading...</div>}>
        <RouterProvider router={Router} />
      </Suspense>
    </ThemeProvider>
  </QueryClientProvider>
);
