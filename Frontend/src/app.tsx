import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./components/routes/admin";
import Login from "./components/routes/auth/login";
import Signup from "./components/routes/auth/signup";
import Dashboard from "./components/routes/dashboard";
import About from "./components/routes/platform/about";
import Contact from "./components/routes/platform/contact";
import Feedback from "./components/routes/platform/feedback";
import GlobalsFeedbacksDetails from "./components/routes/platform/feedback/globals-feedbacks-details";
import UserFeedbacksDetails from "./components/routes/platform/feedback/user-feedbacks-details";
import Home from "./components/routes/platform/home";
import RealEstate from "./components/routes/platform/real-estate";
import Root from "./components/routes/platform/root";
import { Toaster } from "./components/ui/toaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "real-estate",
        element: <RealEstate />,
      },
      {
        path: "a-propos",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "retour-d'information",
        children: [
          {
            path: "",
            element: <Feedback />,
          },
          {
            path: "nos-retours-clients",
            element: <GlobalsFeedbacksDetails />,
          },
          {
            path: "vos-retours",
            element: <UserFeedbacksDetails />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
