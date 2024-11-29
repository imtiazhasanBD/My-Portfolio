"use client";

import { useEffect } from "react";

const ScrollToTopOnRefresh = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); 

  return null;
};

export default ScrollToTopOnRefresh;
