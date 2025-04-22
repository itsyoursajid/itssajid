import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // For PC and most mobile browsers
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // iOS Safari specific fix (delayed scroll reset)
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;