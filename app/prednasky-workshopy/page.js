import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import ProgramDetail from "../../components/layouts/program-detail";
import program from "../../components/switcher/program.json";
import AvatarImage from "../../components/layouts/avatar-image";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSpotify,
  IconBrandYoutube,
  IconMapPin,
  IconWorld,
} from "@tabler/icons";
import ParmIcon from "../../components/layouts/parm-icon";
import Button from "../../components/layouts/button";
import IconCustomBrandX from "../../components/images/brand-x";
export default async function PrednaskyWorhsopy() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Workshopy</ContainerTitle>
          <ProgramDetail p={program[3]} className={``} />
          <ContainerDescription>
            V&nbsp;první části odpoledne si můžete vybrat z&nbsp;bohaté nabídky
            workshopů. Další budou přibývat postupně.
          </ContainerDescription>
          {/* 
          <div className="flex flex-row items-center justify-center flex-wrap">
            <Link href={`#prednaska-start`}>
              <Button className={``}>
                <ParmIcon iconName={`person`} /> Přednášky
              </Button>
            </Link>
            <Link href={`#workshop-start`}>
              <Button>
                <ParmIcon iconName={`workshop`} /> Workshopy
              </Button>
            </Link>
            <Link href={`#sport-start`}>
              <Button>
                <ParmIcon iconName={`sport`} /> Sporty
              </Button>
            </Link>
          </div>
          */}
          <div>
            {workshops.map((w) => {
              return (
                <div
                  key={w.title}
                  id={w.id !== undefined ? w.id : ""}
                  className="flex flex-col items-center md:flex-row border-[#444] border rounded-xl p-6 sm:p-6 transition h-full hover:scale-[1.02] hover:rotate-1 mt-8"
                >
                  <div className="flex items-center justify-center md:flex-col">
                    <AvatarImage
                      altText={`Avatar hosta ${w.speaker.name} k přednášce ${w.title}.`}
                      jpgPath={w.speaker.jpgPath}
                      pngPath={w.speaker.pngPath}
                      webpPath={w.speaker.webpPath}
                      className="!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444] mb-4 md:mb-0 md:mr-8 mx-1 md:my-1"
                    />
                    {w.speaker.jpgPath2 !== undefined ||
                    w.speaker.pngPath2 !== undefined ||
                    w.speaker.webpPath2 !== undefined ? (
                      <AvatarImage
                        altText={`Avatar hosta ${w.speaker.name} k přednášce ${w.title}.`}
                        jpgPath={w.speaker.jpgPath2}
                        pngPath={w.speaker.pngPath2}
                        webpPath={w.speaker.webpPath2}
                        className="!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444] mb-4 md:mb-0 md:mr-8 mx-1 md:my-1"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-col items-start justify-center w-full sm:w-[450px]">
                    <h2
                      dangerouslySetInnerHTML={{ __html: w.title }}
                      className="text-xl font-semibold w-full"
                    />
                    <span className="tracking-widest mt-1 font-semibold flex flex-row items-center justify-start">
                      <ParmIcon
                        iconName={w.type}
                        className={`inline`}
                        size={18}
                      />
                      <span
                        dangerouslySetInnerHTML={{ __html: w.speaker.name }}
                      />
                    </span>
                    <span className="font-semibold flex flex-row items-center justify-start">
                      <IconMapPin
                        className="inline mr-1"
                        size={18}
                        stroke={1.5}
                      />
                    {w.place !== undefined ? (
                      <Link
                        href={
                          w.place.includes("Orlovna")
                            ? `/mapa?x=${50.2069553}&y=${15.8349681}` // Orlovna
                            : w.place.includes("Nové Adalbertinum")
                            ? `/mapa?x=${50.2090269}&y=${15.8334453}` // Nove Adalbertinum
                            : w.place.includes("Biskupská rezidence")
                            ? `/mapa?x=${50.208725}&y=${15.8323194}` // Biskupská rezidence
                            : w.place.includes("Katedrála")
                            ? `/mapa?x=${50.2087878}&y=${15.8310917}` // Katedrála
                            : `/mapa?x=${50.2062919}&y=${15.8337133}` // BiGy
                        }
                        target="_self"
                        className="underline"
                      >
                        {w.place}
                      </Link>
                    ) : (
                      <span className="font-extralight italic flex flex-row items-center justify-start">
                        Místo bude upřesněno.
                      </span>
                    )}
                    </span>
                    {w.capacity !== undefined ? (
                      <span className="font-semibold">
                        <Image src={"/assets/images/icon_user_group.svg"} alt="Ikona skupiny lidí" width={18} height={18} className="inline mr-1" />
                        Kapacita {w.capacity} míst
                      </span>
                    ) : null}
                    {w.about !== undefined ? (
                      <p
                        className="text-lg w-full mt-2 italic"
                        dangerouslySetInnerHTML={{ __html: w.about }}
                      />
                    ) : null}
                    <p
                      className="text-lg w-full mt-2"
                      dangerouslySetInnerHTML={{ __html: w.descritpion }}
                    />
                    {w.social !== undefined ? (
                      <div className="mt-1 flex flex-row items-center justify-start">
                        <h3 className="uppercase mr-2">Sleduj na: </h3>
                        {w.social.web !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.web}
                            className="inline ml-1"
                            title={`Odkaz na web ${w.speaker.name}`}
                          >
                            <IconWorld stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.ig !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.ig}
                            className="inline ml-1"
                            title={`Odkaz na Instagram ${w.speaker.name}`}
                          >
                            <IconBrandInstagram stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.fb !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.fb}
                            className="inline ml-1"
                            title={`Odkaz na Facebook ${w.speaker.name}`}
                          >
                            <IconBrandFacebook stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.spotify !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.spotify}
                            className="inline ml-1"
                            title={`Odkaz na Spotify ${w.speaker.name}`}
                          >
                            <IconBrandSpotify stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.x !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.x}
                            className="inline ml-1"
                            title={`Odkaz na X ${w.speaker.name}`}
                          >
                            <IconCustomBrandX stroke={1.5} color={"#fff"} />
                          </Link>
                        ) : null}
                        {w.social.youtube !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.youtube}
                            className="inline ml-1"
                            title={`Odkaz na Youtube ${w.speaker.name}`}
                          >
                            <IconBrandYoutube stroke={1.5} color={"#fff"} />
                          </Link>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

const workshops = [
  // {
  //   title:
  //     "Víra pod tlakem: Jak si&nbsp;obhájit svou&nbsp;víru před&nbsp;sebou i&nbsp;před druhými",
  //   type: "person",
  //   about: "P. Josef Kvapilík je kněz z �enerace Z, který doprovází mladé na Centru života mládeže v Rajnochovicích. Má rád hudbu, lyžování a dobré otázky. Offline i online jako Pater Pepa otevírá témata víry, vztahů a smyslu života tak, aby dávala smysl lidem dnešní �enerace.",
  //   descritpion:
  //     "Co dělat, když ve škole nebo na síti dostaneš otázku na svou víru a nevíš, co říct? A co když máš otázky sám? Na základě své zkušenosti z života, ale taky z YouTube nebo Insta�ramu, bych se s Tebou chtěl podělit o svou cestu hledání i praktické tipy, jak o víře přemýšlet a mluvit. Přijď načerpat odvahu, ar�umenty a naději.",
  //   speaker: {
  //     name: "P. Josef Kvapilík",
  //     jpgPath: "/assets/images/speakers/pater_pepa.jpg",
  //   },
  //   social: {
  //     ig: "https://www.instagram.com/paterpepa/",
  //   },
  //   capacity: 60,
  //   place: "aula",
  // },
  {
    title: "Liturgický oděv a jeho výroba",
    type: "workshop",
    about: `Michal Šramko - kněz, v současnosti kaplan ve farnosti Kutná Hora, zároveň spirituál Církevního gymnázia v Kutné Hoře a kaplan pro mládež ve vikariátu. Vystudoval konzervatoř a Vysokou školu muzických umění v Bratislavě v oboru hra na trubku. Poté vstoupil do kněžského semináře a vystudoval teologickou fakultu v Bratislavě. Studia ukončil v roce 2021 a byl vysvěcen na kněze. Od roku 2015 se věnuje výrobě liturgických oděvů a parament pro kněze.`,
    descritpion:
      "Představení autorské práce, ukázka vyrobených liturgických oděvů",
    speaker: {
      name: "Michal Šramko",
      jpgPath: "/assets/images/speakers/sramko.jpg",
    },
  },
  {
    title: "Žít jako andělé",
    type: "workshop",
    about: `Jsem kaplan pro mládež ve vikariátu Náchod. Stal jsem se knězem díky tomu, že mě povolal Pán Ježíš v eucharistii a přijmout moje povolání mí pomohla služba u oltáře. Záleží mi na tom, aby liturgie měla vznešenou jednoduchost, která otevírá naše srdce Bohu. Mám radost, když se nám s ministranty daří sloužit tak, aby to lidem pomohlo si uvědomit, kdo je mezi námi.`,
    descritpion:
      "Program žít jako anděl bude spočívat v přemýšlení pomocí různých aktivit a výkladu a diskuze o tom, jaká je souvislost mezi nebeskou liturgií andělů u Božího trůnu, pozemskou liturgií pozemské církve a naším každodenním životem. Co se děje v nebi, děje se na oltáři v našem kostele a nakonec i v našem srdci. Aneb co všechno se mnou může udělat ministrování? Jak se může celý můj život stát andělskou liturgií?",
    speaker: {
      name: "Jan Pecháček",
      jpgPath: "/assets/images/speakers/pechacek.jpg",
    },
  },
  {
    title: "Kresba a Malování",
    type: "workshop",
    about: `František Zloch - kněz, v současné době kaplan v Hlinsku a ve Svratce a také kaplan pro mládež chrudimského vikariátu. Než nastoupil do kněžského semináře vystudoval Střední umělecko-průmyslovou školu hudebních nástrojů a nábytku v Hradci Králové. V té době se také začal systematicky věnovat kresbě a malování, čemuž se ve volných chvílích amatérsky věnuje stále - zvláště krajinomalbě.`,
    descritpion:
      "Vyváření umění v nějaké míře účast na Božím stvořitelském díle. Během tohoto workshopu bude možné jednak prohlédnout výsledky některých technik, a zároveň bude možnost zkusit si techniku akvarelu nebo kresbu olejovým pastelem (podle počasí buď krajinu nebo zátiší).",
    speaker: {
      name: "František Zloch",
      jpgPath: "/assets/images/speakers/zloch.jpg",
    },
  },
];
