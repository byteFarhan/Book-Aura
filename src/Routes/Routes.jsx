import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/HomePage/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import ListedBooks from "../pages/ListedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books/:bookId",
        element: <BookDetails />,
        loader: () => fetch("./data/books.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        loader: () => fetch("./data/books.json"),
      },
    ],
  },
]);
export default router;
