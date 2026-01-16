import { useEffect, useState } from "react";
import Home from "./pages/Home";
import ClosetCloud from "./pages/ClosetCloud";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Scroll to top when switching pages
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === "closetcloud") {
    return <ClosetCloud onBack={() => setCurrentPage("home")} />;
  }

  return <Home onOpenClosetCloud={() => setCurrentPage("closetcloud")} />;
}
