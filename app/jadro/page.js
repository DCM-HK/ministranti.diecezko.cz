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
            Přípravný tým diecézního setkání ministrantů tvoří společenství lidí, které spojuje
            služba církvi, zkušenost s liturgií i živý vztah k mladým. Společně usilují o to,
            aby diecézní setkání ministrantů nebylo jen organizační událostí, ale především
            prostorem pro setkání s Bohem, prohloubení služby u oltáře a budování společenství
            napříč diecézí.
          </ContainerDescription>
          <ContainerParagraph>
            V čele stojí pomocný biskup jako garant duchovního rozměru celého setkání. Spolu s ním
            se na přípravě podílí koordinátor ministrantů a ceremonář, kteří přinášejí praktickou
            zkušenost s organizací i liturgickým vedením. Tým dále doplňují tři mladí a aktivní
            kněží, kteří svou energií, blízkostí k mladé generaci a pastorační praxí přispívají
            k tomu, aby setkání bylo nejen dobře připravené, ale také živé, srozumitelné a
            inspirativní pro všechny účastníky.
          </ContainerParagraph>
          <ContainerDescription>
            
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
      "Ministrovat začal dříve, než šel do školy. Poté co byl vysvěcen na jáhna (1996), na kněze (1997) a&nbsp;potom na biskupa (2025), je rád, když během liturgie zažije u&nbsp;oltáře výbornou spolupráci s&nbsp;ministranty. Docela dlouhou dobu se věnoval učení na školách základních, středních i&nbsp;vysokých. A&nbsp;tak když spojuje svůj osobní život s&nbsp;modlitbou a&nbsp;s&nbsp;liturgickým slavením eucharistie, stále se snaží učit novým věcem. Třeba i&nbsp;pracovat s&nbsp;ministranty v&nbsp;královéhradecké diecézi.",
    jpgPath: "/assets/images/jadro/broz.jpg",
    webpPath: "/assets/images/jadro/broz.webp",
    altText: "Profilová fotka o. biskupa Prokopa Brože",
    className: "",
  },
  {
    name: "P. Petr Soukal",
    description:
      "Je knězem od roku 2017. Jako kaplan působil v&nbsp;Havlíčkově Brodě a&nbsp;nyní je farářem v&nbsp;Ústí nad Orlicí. Jako kluk rád ministroval, jezdil na kole a&nbsp;hrál na kytaru. Zajímá se o&nbsp;teologii, rád si povídá o&nbsp;Pánu Bohu a&nbsp;těší ho potkávat lidi, kteří přemýšlejí a&nbsp;kladou si otázky.",
    jpgPath: "/assets/images/jadro/soukal.jpg",
    webpPath: "/assets/images/jadro/soukal.webp",
    altText: "Profilová fotka P. Petra Soukala",
    className: "",
  },
  {
    name: "P. Jenda Pitřinec",
    description:
      "Knězem je stejně dlouho jako Petr S. a&nbsp;Vojtěch N., tedy od května 2017. Působil ve farnostech Litomyšl a&nbsp;Ústí nad Orlicí a&nbsp;nyní má na starosti Vesmír - centrum pro mládež v&nbsp;Deštném v&nbsp;Orlických horách. Jako malý zlobil v&nbsp;kostele tak, že ho uklidnila jen služba u&nbsp;oltáře. Má rád sport v&nbsp;jakékoli podobě a&nbsp;spoustu dalších věcí.",
    jpgPath: "/assets/images/jadro/pitrinec.png",
    webpPath: "/assets/images/jadro/pitrinec.webp",
    altText: "Profilová fotka P. Jendy Pitřince",
    className: "",
  },
  {
    name: "P. Vojtěch Novotný",
    description:
      "Hádejte, jak dlouho je knězem. Nápovědu hledejte výše. V&nbsp;současné době je farářem u&nbsp;katedrály v&nbsp;Hradci Králové. Ke kněžství nebyl povolán od rybářských sítí, ale ze světa čísel. Od dětství totiž miluje matematiku. Čtvrtinu svého života prožil v&nbsp;Římě. Do školy chodí už 32 let.",
    jpgPath: "/assets/images/jadro/novotny.jpg",
    webpPath: "/assets/images/jadro/novotny.webp",
    altText: "Profilová fotka P. Vojtěcha Novotného",
    className: "",
  },
  {
    name: "Matyáš Mesi Meisner",
    description:
      "Ceremonář pomocného biskupa a&nbsp;koordinátor ministrantů v&nbsp;diecézi. Služba u&nbsp;oltáře je mu blízká už dlouho, a&nbsp;proto má radost, že se může podílet na setkání, které spojuje ministranty z&nbsp;celé diecéze. Zároveň aktivně hraje basketbal.",
    jpgPath: "/assets/images/jadro/meisner.png",
    webpPath: "/assets/images/jadro/meisner.webp",
    altText: "Profilová fotka Matyáše Meisnera",
    className: "",
  },
];
