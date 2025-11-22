"use client";

import React, { Fragment, useEffect } from "react";
// @ts-ignore: no type declarations for 'aos' in this project
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  children: React.ReactNode;
};

const Animate = (props: Props) => {
  useEffect(() => {
    if (typeof window != "undefined")
      AOS.init({
        duration: 800,
        once: false,
      });
  }, []);
  return <Fragment>{props.children}</Fragment>;
};

export default Animate;
