import Link from "next/link";
import ContainerH2 from "./layouts/container-h2";
import ContainerH3 from "./layouts/container-h3";
import ContainerParagraph from "./layouts/container-paragraph";
import {
  IconFriends,
  IconHeart,
  IconPray,
  IconCross,
  IconMusic,
  IconQuestionMark,
} from "@tabler/icons";

export default function Infographic() {
  return (
    <div>
      <ContainerH2 className={`!text-2xl text-center`}>
        Co Tě na setkání čeká?
      </ContainerH2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconFriends size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Společenství</ContainerH3>
          <ContainerParagraph className="">
            To nejdůležitější, co na setkání společně zažijeme, je společenství
            věřících vrstevníků ministrantů. Úžasný a&nbsp;rozhodně nezapomenutelný zážitek!
          </ContainerParagraph>
        </div>
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconCross size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Mše svatá s našimi biskupy</ContainerH3>
          <ContainerParagraph className="">
            Setkání zakončíme mší svatou s&nbsp;našimi biskupy Janem
            a&nbsp;Prokopem v&nbsp;katedrále Svatého Ducha. TODO - update this
          </ContainerParagraph>
        </div>
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconQuestionMark size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Na co se můžeš těšit?</ContainerH3>
          <ContainerParagraph className="">
            Chystáme pro vás program, zveme zajímavé
            hosty na odpolední workshopy a&nbsp;připravujeme
            duchovní zážitek ze mše svaté.
          </ContainerParagraph>
        </div>
      </div>
    </div>
  );
}
