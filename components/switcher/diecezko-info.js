"use client";
import Container from "../layouts/container";
import ContainerH2 from "../layouts/container-h2";
import ContainerParagraph from "../layouts/container-paragraph";
import {
  IconApps,
  IconCircleCheck,
  IconCircleDashed,
  IconCross,
  IconForms,
  IconMath,
  IconMathSymbols,
  IconPencil,
  IconPhoto,
  IconSpeakerphone,
  IconWritingSign,
  IconArrowBarToDown,
  IconChessBishop,
  IconCloud,
} from "@tabler/icons";
import Link from "next/link";
import Nbsp from "../format/nbsp";
import Strong from "../format/strong";
import Infographic from "../infographic";
import Countdown from "../countdown";
import Image from "next/image";
import IconCustomAdventniCesta from "../images/adventni-cesta";
import CardFeed from "../layouts/card-feed";
import Button from "../layouts/button";

export default function DiecezkoInfo({ id, className }) {
  return (
    <Container id={id} className={className}>
      <div className="min-h-[55vh] flex flex-col items-center justify-around">
        {/* This div can serve as a spacer to add some label before the main title 
          <div className="flex flex-col items-center w-full">
          <span className="text-base text-center"></span>
          </div> */}
        <div className="flex flex-col items-center w-[90vw]">
          <Countdown countDownDate={new Date("May 23, 2026 10:00:00")} />
          <span className="text-xl md:text-2xl md:mt-4 md:mb-2">
            <span className="block font-semibold uppercase">Diecézní setkání ministrantů</span>
          </span>
          <h1 className="text-5xl md:text-7xl uppercase leading-tight tracking-wide text-center text-[#f2e7c9] font-poppins mb-4">
            <span className="text-[#fbf3e3] text-4xl md:text-6xl font-semibold md:my-5">
              mini{" "}
            </span>
            <span className="text-[#fbf3e3] text-6xl md:text-8xl font-semibold md:my-5">
              STARS
            </span>
            <span className="text-[#fbf3e3] text-4xl md:text-6xl font-semibold md:mt-5 md:mb-1 block">
              23. 5. 2026
            </span>
          </h1>
          <p className="uppercase text-xl md:text-xl tracking-wide font-semibold font-poppins">
            V hradci králové
          </p>
        </div>
        <div className="w-[90vw] max-w-[500px] grid grid-cols-2 grid-flow-row gap-4 items-center auto-cols-max">
          {/* <Link
            href="https://yesman.diecezko.cz/"
            target="_blank"
            title="Diecézní YesMan"
            className="border col-span-2 border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center w-full">
              <IconCircleCheck
                stroke={1.5}
                className="inline h-6 w-6 my-1 mr-2"
              />{" "}
              <span className="ml-2 text-left">Diecézní YesMan</span>
            </button>
          </Link> */}
          <Link
            href={`https://forms.office.com/e/KpxkZsYqEw`}
            target="_blank"
            className="border col-span-2 border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 text-base flex flex-row items-center justify-center"
          >
            <button
              className="flex flex-row items-center justify-center w-full"
              title="Přihláška"
            >
              <IconWritingSign className="inline" stroke={1.5} />{" "}
              <span className="ml-2 text-left">Přihláška</span>
            </button>
          </Link>
          {/*<Link
            href="/galerie"
            className="border col-span-2 border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center w-full"
            >
            <button className="flex flex-row items-center justify-center w-full">
              <IconPhoto className="inline" stroke={1.5} />{" "}
              <span className="ml-2 text-left">Zavzpomínej na minulý ročník</span>
            </button>
          </Link>*/}
          {/*
          <Link
            href="https://sumar.diecezko.cz/"
            target="_blank"
            title="Jednoduchá sčítací hra Sumář"
            className="border col-span-2 border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center w-full">
              <IconMathSymbols
                stroke={1.5}
                className="inline h-6 w-6 my-1 mr-2"
              />{" "}
              <span className="ml-2 text-left">Hra: Sumář</span>
            </button>
          </Link>
          */}
        </div>
      </div>
      <Infographic />
      <ContainerH2 className={`w-full text-center`}>Propagace</ContainerH2>
      <CardFeed>
        <Link
          href="/assets/files/plakat.pdf"
          rel=""
          target="_blank"
          className=""
        >
          <Button>
            <IconArrowBarToDown className={`inline h-6 mr-2`} stroke={1.8} />
            Plakátek
          </Button>
        </Link>
      </CardFeed>
      <ContainerH2 className={`w-full text-center`}>
        Tipy na další obsah
      </ContainerH2>
      <CardFeed>
        <Link
          href="https://cestapustem.cz/"
          rel="external"
          target="_blank"
          className=""
        >
          <Button>
            <IconCustomAdventniCesta className={`inline h-6 mr-2`} />
            Cesta půstem
          </Button>
        </Link>
        <Link
          href="https://www.bihk.cz/"
          rel="external"
          target="_blank"
          className=""
        >
          <Button>
            <IconChessBishop className={`inline h-6 mr-2`} />
            Biskupství královéhradecké
          </Button>
        </Link>
        <Link
          href="https://celostatnisetkanimladeze.cz/"
          rel="external"
          target="_blank"
          className=""
        >
          <Button>
            <IconCloud className={`inline h-6 mr-2`} />
            CSM Ostrava
          </Button>
        </Link>
      </CardFeed>
    </Container>
  );
}
