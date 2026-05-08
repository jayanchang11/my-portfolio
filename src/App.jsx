import { useEffect, useState } from "react";
import Home from "./pages/Home";
import ClosetCloud from "./pages/ClosetCloud";
import IBMSkillsBuild from "./pages/IBMSkillsBuild";

const HOME_ROUTE = "#/";
const PROJECT_ROUTES = {
  closetcloud: "#/projects/closetcloud",
  "ibm-skillsbuild": "#/projects/ibm-skillsbuild",
};

const getCurrentRoute = () => {
  if (!window.location.hash || window.location.hash === "#") {
    return HOME_ROUTE;
  }

  return window.location.hash;
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getCurrentRoute());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    // Scroll to top when switching pages
    window.scrollTo(0, 0);
  }, [currentRoute]);

  if (currentRoute === PROJECT_ROUTES.closetcloud) {
    return (
      <ClosetCloud
        onBack={() => {
          window.location.hash = HOME_ROUTE;
        }}
        onNextProject={() => {
          window.location.hash = PROJECT_ROUTES["ibm-skillsbuild"];
        }}
      />
    );
  }
  if (currentRoute === PROJECT_ROUTES["ibm-skillsbuild"]) {
    return (
      <IBMSkillsBuild
        onBack={() => {
          window.location.hash = HOME_ROUTE;
        }}
      />
    );
  }

  return <Home projectRoutes={PROJECT_ROUTES} />;
}
