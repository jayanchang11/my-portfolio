import { useEffect, useState } from "react";
import Home from "./pages/Home";
import ClosetCloud from "./pages/ClosetCloud";
import IBMSkillsBuild from "./pages/IBMSkillsBuild";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Scroll to top when switching pages
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === "closetcloud") {
    return (
      <ClosetCloud
        onBack={() => setCurrentPage("home")}
        onNextProject={() => setCurrentPage("ibm-skillsbuild")}
      />
    );
  }
  if (currentPage === "ibm-skillsbuild") {
    return <IBMSkillsBuild onBack={() => setCurrentPage("home")} />;
  }

  return (
    <Home
      onOpenClosetCloud={() => setCurrentPage("closetcloud")}
      onOpenIbmSkillsBuild={() => setCurrentPage("ibm-skillsbuild")}
    />
  );
}
