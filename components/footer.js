import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full flex flex-col items-center mt-4">
      <div className="flex flex-col-reverse md:flex-row justify-between flex-wrap items-center w-[90vw]">
        <span className="font-light mb-0">
          © {year},{" "}
          <Link
            href="https://www.bihk.cz/biskupstvi/diecezni-centrum-pro-mladez"
            target="_blank"
            rel="external"
            className="hover:underline"
          >
            DCM Hradec Králové
          </Link>
        </span>
        {/*
        <div className="my-4 text-xs uppercase">
          <p className="text-center">Zavzpomínej na minulé ročníky:</p>
          <Link
            href="https://2023.diecezko.cz/"
            target="_blank"
            className="cursor-pointer underline"
          >
            Podzim 2023
          </Link>
          {" • "}
          <Link
            href="https://2024.diecezko.cz/"
            target="_blank"
            className="cursor-pointer underline"
          >
            Jaro 2024
          </Link>
            {" • "}
          <Link
            href="https://2025.diecezko.cz/"
            target="_blank"
            className="cursor-pointer underline"
          >
            Jaro 2025
          </Link>
        </div>
        */}
        <div className="flex flex-row items-center justify-around min-w-[150px]">
          <Link
            href="https://www.facebook.com/DCM.HradecKralove"
            target="_blank"
            rel="external"
            title="Facebook DCM Hradec Králové"
          >
            <IconBrandFacebook className="inline" stroke={1.3} />
          </Link>
          <Link
            href="https://www.instagram.com/dcm_hk/"
            target="_blank"
            rel="external"
            title="Instagram DCM Hradec Králové"
          >
            <IconBrandInstagram className="inline" stroke={1.3} />
          </Link>
          <Link
            href="https://github.com/DCM-HK/diecezko.cz"
            target="_blank"
            rel="external"
            title="Repositář projektu na Githubu"
          >
            <IconBrandGithub className="inline" stroke={1.3} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
