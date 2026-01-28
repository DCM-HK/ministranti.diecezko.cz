"use client";
import { useLayoutEffect, useState } from "react";

export default function Cover({ children }) {
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
        <div className="pointer-events-none hidden lg:block">
          <picture className="absolute bottom-0 left-0 w-[clamp(100px,20vw,360px)]">
            <source
              srcSet="assets/images/budova-katedrala.webp"
              type="image/webp"
            />
            <source
              srcSet="assets/images/budova-katedrala.png"
              type="image/png"
            />
            <img
              alt="Katedrála"
              loading="lazy"
              src="assets/images/budova-katedrala.png"
              className="w-full h-auto object-contain"
            />
          </picture>
          <picture className="absolute bottom-0 right-0 w-[clamp(100px,20vw,360px)]">
            <source
              srcSet="assets/images/budova-bila-vez.webp"
              type="image/webp"
            />
            <source
              srcSet="assets/images/budova-bila-vez.png"
              type="image/png"
            />
            <img
              alt="Bílá věž"
              loading="lazy"
              src="assets/images/budova-bila-vez.png"
              className="w-full h-auto object-contain"
            />
          </picture>
        </div>
      </div>
      <div className="flex items-center flex-col w-full">{children}</div>
    </>
  );
}
