"use client";
import { useContext, useLayoutEffect, useState } from "react";
import SwitcherContext from "../lib/switcher-context";

export default function Cover({ children }) {
  const { switcher } = useContext(SwitcherContext);
  const [blur, setBlur] = useState("bg-black/50");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 10) setBlur("bg-black/80 backdrop-blur-md");
    else setBlur("bg-black/50");
  };

  useLayoutEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <div
          className={`absolute inset-0 transition-all z-20 duration-[2000ms] ${blur}`}
        ></div>
        <picture className="absolute inset-0">
          <source srcSet="assets/images/cover.webp" type="image/webp" />
          <source srcSet="assets/images/cover.jpg" type="image/jpeg" />
          <img
            alt="Obloha s mraky a barvami zapadajícího slunce"
            loading="lazy"
            src="assets/images/cover.jpg"
            className="h-screen w-full object-cover object-bottom"
          />
        </picture>
      </div>
      <div className="flex items-center flex-col w-full">{children}</div>
    </>
  );
}
