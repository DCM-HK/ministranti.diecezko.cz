import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import ContainerDescription from "../../components/layouts/container-description";
import ProfileCard from "../../components/layouts/profile-card";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerParagraph from "../../components/layouts/container-paragraph";
export default async function Vikariaty() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Jádro setkání ministrantů</ContainerTitle>
          <ContainerDescription>
            TODO - nějakej textík tady?? Jak se sešel takovýhle tým? Triumvirát lore?? <br />
          </ContainerDescription>
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 items-center">
            {jadro.map((p) => {
              return (
                <ProfileCard
                  key={p.name}
                  name={p.name}
                  description={p.description}
                  jpgPath={p.jpgPath}
                  webpPath={p.webpPath}
                  pngPath={p.pngPath}
                  altText={p.altText}
                  className={p.className}
                />
              );
            })}
          </div>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
export const jadro = [
  {
    name: "o. b. Prokop Brož",
    description:
      "Ministrovat začal dříve, než šel do školy. Poté co byl vysvěcen na jáhna (1996), na kněze (1997) a potom na biskupa (2025), je rád, když během liturgie zažije u oltáře výbornou spolupráci s ministranty. Docela dlouhou dobu se věnoval učení na školách základních, středních i vysokých. A tak když spojuje svůj osobní život s modlitbou a s liturgickým slavením eucharistie, stále se snaží učit novým věcem. Třeba i pracovat s ministranty v královéhradecké diecézi.",
    jpgPath: "/assets/images/jadro/broz.jpg",
    webpPath: "/assets/images/jadro/broz.webp",
    altText: "Profilová fotka o. biskupa Prokopa Brože",
    className: "",
  },
  {
    name: "P. Petr Soukal",
    description:
      "Je knězem od roku 2017. Jako kaplan působil v Havlíčkově Brodě a nyní je farářem v Ústí nad Orlicí. Jako kluk rád ministroval, jezdil na kole a hrál na kytaru. Zajímá se o teologii, rád si povídá o Pánu Bohu a těší ho potkávat lidi, kteří přemýšlejí a kladou si otázky.",
    jpgPath: "/assets/images/jadro/soukal.jpg",
    webpPath: "/assets/images/jadro/soukal.webp",
    altText: "Profilová fotka P. Petra Soukala",
    className: "",
  },
  {
    name: "P. Jenda Pitřinec",
    description:
      "Knězem je stejně dlouho jako Petr S. a Vojtěch N., tedy od května 2017. Působil ve farnostech Litomyšl a Ústí nad Orlicí a nyní má na starosti Vesmír - centrum pro mládež v Deštném v Orlických horách. Jako malý zlobil v kostele tak, že ho uklidnila jen služba u oltáře. Má rád sport v jakékoli podobě a spoustu dalších věcí.",
    jpgPath: "/assets/images/jadro/pitrinec.jpg",
    webpPath: "/assets/images/jadro/pitrinec.webp",
    altText: "Profilová fotka P. Jendy Pitřince",
    className: "",
  },
  {
    name: "P. Vojtěch Novotný",
    description:
      "Hádejte, jak dlouho je knězem. Nápovědu hledejte výše. V současné době je farářem u katedrály v Hradci Králové. Ke kněžství nebyl povolán od rybářských sítí, ale ze světa čísel. Od dětství totiž miluje matematiku. Čtvrtinu svého života prožil v Římě. Do školy chodí už 32 let.",
    jpgPath: "/assets/images/jadro/novotny.jpg",
    webpPath: "/assets/images/jadro/novotny.webp",
    altText: "Profilová fotka P. Vojtěcha Novotného",
    className: "",
  },
  {
    name: "Matyáš Mesi Meisner",
    description:
      "Ceremonář pomocného biskupa a koordinátor ministrantů v diecézi. Služba u oltáře je mu blízká už dlouho, a proto má radost, že se může podílet na setkání, které spojuje ministranty z celé diecéze. Zároveň aktivně hraje basketbal.",
    jpgPath: "/assets/images/jadro/meisner.jpg",
    webpPath: "/assets/images/jadro/meisner.webp",
    altText: "Profilová fotka Matyáše Meisnera",
    className: "",
  },
];
