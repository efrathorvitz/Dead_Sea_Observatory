import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
// This component scrolls to the top of the page whenever the pathname changes,
// ensuring that users always start at the top of the page when navigating to a new route.