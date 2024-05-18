import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/404";
import Admin from "./components/routes/admin";
import Login from "./components/routes/auth/login";
import Signup from "./components/routes/auth/signup";
import Dashboard from "./components/routes/dashboard";
import About from "./components/routes/platform/about";
import Contact from "./components/routes/platform/contact";
import EditProfile from "./components/routes/platform/edit-profile";
import Feedback from "./components/routes/platform/feedback";
import GlobalsFeedbacksDetails from "./components/routes/platform/feedback/globals-feedbacks-details";
import UserFeedbacksDetails from "./components/routes/platform/feedback/user-feedbacks-details";
import Home from "./components/routes/platform/home";
import Privacy from "./components/routes/platform/privacy";
import RealEstate from "./components/routes/platform/real-estate";
import DetailedRealEstate, {
  loader as realEstateLoader,
} from "./components/routes/platform/real-estate/_components/detailed-real-estate";
import Root from "./components/routes/platform/root";
import Terms from "./components/routes/platform/terms";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./components/contexts/auth-context";
import { authLoader } from "./utils/loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider />,
    loader: authLoader,
    errorElement: <NotFound />,
    children: [
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
            children: [
              {
                path: "",
                element: <RealEstate />,
              },
              {
                path: ":realEstateId",
                loader: realEstateLoader,
                element: <DetailedRealEstate />,
              },
            ],
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
          {
            path: "terms",
            element: <Terms />,
          },
          {
            path: "privacy",
            element: <Privacy />,
          },
          {
            path: "edit-profile",
            element: <EditProfile />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
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
