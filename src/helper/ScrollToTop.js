// this component help us when route changed scroll change to top

import React, { useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ history, children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;
