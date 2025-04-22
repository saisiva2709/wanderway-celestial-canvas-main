
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollIntoView() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL (e.g., #contact)
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // If no hash, scroll to top of page
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}
