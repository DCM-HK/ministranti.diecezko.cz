import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerImage from "../../components/layouts/container-image";
import Link from "next/link";
import Image from "next/image";
import SwappingGallery from "../../components/swapping-gallery";

export default function Invitation() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Pozvání biskupa Prokopa</ContainerTitle>
          <Image
            src="/assets/images/pozvani-biskupa/bihk-logo.svg"
            alt="Logo Biskupství Hradec Králové"
            width={200}
            height={100}
            className="mx-auto mb-8 w-[150px] h-auto"
          />
          <ContainerParagraph className={"text-center font-bold"}>
            Biskupství Hradec Králové
          </ContainerParagraph>
          <ContainerParagraph className={"text-right"}>
            Hradec Králové, 7. května 2026
          </ContainerParagraph>
          <ContainerParagraph>
            Milí mladí přátelé, ministranti a&nbsp;ministrantky!
          </ContainerParagraph>
          <ContainerParagraph></ContainerParagraph>
          <ContainerParagraph>
            Řádky tohoto dopisu se k&nbsp;vám dostávají v&nbsp;okamžiku, kdy připravujeme diecézní setkání
            ministrantů. Po delší době jsme se rozhodli, že vás všechny pozveme do města, kde sídlí
            náš diecézní biskup Jan, do Hradce Králové, v&nbsp;čase, který předchází slavnosti Seslání
            Ducha Svatého, v&nbsp;sobotu 23. května 2026.
          </ContainerParagraph>
          <ContainerParagraph>
            Každý a&nbsp;každá z&nbsp;vás jste našli svou osobní cestu ke službě u&nbsp;oltáře. Někdo možná spolu se sourozenci, jiný byl pozván knězem, kostelníkem nebo starším ministrantem, někdo z&nbsp;vás si musel o&nbsp;účast u&nbsp;oltáře přímo říci. Cest je tolik, kolik je ministrantů, protože každé pozvání a&nbsp;povolání ke službě je také osobním povoláním Božím. 
          </ContainerParagraph>
          <ContainerParagraph>
            Považuji ministrantskou službu za veliký dar pro farní společenství, protože se v&nbsp;něm rozvíjí a&nbsp;zraje i&nbsp;osobní povolání ke službě v&nbsp;církvi. Všichni víme, kolik legrace a&nbsp;radostných chvil se při ministrování zažije! A&nbsp;také víme, jak nás tato služba učí odpovědnosti, vnitřní disciplíně, spolupráci a&nbsp;souhře s&nbsp;druhými.
          </ContainerParagraph>
          <ContainerParagraph>
            Zveme vás všechny na diecézní setkání ministrantů také proto, že chceme ukázat, jak nás služba při liturgii otvírá hlubšímu poznávání Božího jednání mezi námi. Pěkně píše svatý Pavel věřícím do Filip, že se od Ježíše Krista učíme „zářit jako hvězdy ve vesmíru“ (Fil 2,15). Už se vám stalo, že jste přišli do zákristie a&nbsp;byli plni radosti, to, co jste zažili u&nbsp;oltáře, vám koukalo z&nbsp;očí? 
          </ContainerParagraph>
          <ContainerParagraph>
            Máme pro vás připravený hezký program, který začíná v&nbsp;kostele Panny Marie na Velkém náměstí v&nbsp;Hradci Králové. Odtamtud nás bude program vést až do závěrečné mše svaté, kterou budeme společně slavit v&nbsp;katedrále Svatého Ducha. Všechny důležité informace naleznete na{" "}
            <Link
              href="https://ministranti.bihk.cz"
              target="self"
              className="underline"
            >
               ministranti.bihk.cz
            </Link>
          </ContainerParagraph>
          <ContainerParagraph className={"italic text-right"}>
            Na setkání s&nbsp;vámi se těší,<br />
            V&nbsp;pokoji Kristově,<br />
            + Prokop
          </ContainerParagraph>
          <SwappingGallery images={gallery} />
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

const gallery = [
  {
    path: "/assets/images/pozvani-biskupa/biskup-prokop.jpg",
    alt: "Biskup Prokop při kázání na mši svaté"
  },
  {
    path: "/assets/images/pozvani-biskupa/biskup-prokop-2.jpg",
    alt: "Biskup Prokop na diecézním setkání mládeže"
  },
  {
    path: "/assets/images/pozvani-biskupa/biskup-prokop-3.jpg",
    alt: "Biskup Prokop na TV Noe"
  },
];
