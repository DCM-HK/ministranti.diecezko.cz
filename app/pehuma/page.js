import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerImage from "../../components/layouts/container-image";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerUl from "../../components/layouts/container-ul";
import ContainerLi from "../../components/layouts/container-li";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSpotify,
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons";
import SwappingGallery from "../../components/swapping-gallery";
export default async function Pehuma() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>PEHUMA</ContainerTitle>
          <ContainerDescription>
            Jsme schola PEHUMA z Dolní Čermné a letos doprovodíme závěrečnou mši svatou v katedrále.
          </ContainerDescription>
          <ContainerImage
            jpgPath="/assets/images/Pehuma_vlajka_bila.svg"
            webpPath="/assets/images/Pehuma_vlajka_bila.svg"
            altText="Logo kapely Pehuma"
            className="w-full my-2"
          />
          <ContainerParagraph>
            Jsme Dolnočermenské spolčo a schola PEHUMA a rádi spolu trávíme čas nejen zpěvem,
            ale i sdílením duchovních zkušeností a hrami. Fungujeme už od roku 1986, takže máme
            za&nbsp;sebou kus společné historie. Dnes se nás schází asi patnáct a setkáváme&nbsp;se
            každých 14&nbsp;dní na&nbsp;faře. Začínáme zkouškou zpěvu na mši svatou, která je v 19:00.
            Po&nbsp;mši pak pokračujeme naším spolčem. Vždy si někdo připraví krátké téma k zamyšlení
            a&nbsp;někdo jiný zase hry nebo jinou&nbsp;zábavu. Máme rádi pohodu, smích a&nbsp;čas 
            strávený spolu. Jsme moc rádi, že vám můžeme zazpívat, a těšíme se, že si to společně užijeme.
          </ContainerParagraph>
          {/*<SwappingGallery images={gallery} />
          <ContainerH2>Sledujte nás na:</ContainerH2>
          <ContainerUl className={`!list-none !pl-0 mb-6`}>
            <ContainerLi className="mt-2">
              <Link
                href={`https://open.spotify.com/artist/4evTGARQ8TRDKnqbxXSvNd?si=fkpi9RTlQRKin5zNI9sDyg`}
                target="_blank"
                rel="external"
                title="Spotify"
              >
                <IconBrandSpotify className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://facebook.com/vesmirnakapela`}
                target="_blank"
                rel="external"
                title="Facebook"
              >
                <IconBrandFacebook className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.instagram.com/vesmirna_kapela/`}
                target="_blank"
                rel="external"
                title="Instagram"
              >
                <IconBrandInstagram className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.youtube.com/vesmirnakapela`}
                target="_blank"
                rel="external"
                title="Youtube kanál"
              >
                <IconBrandYoutube className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`http://vesmirnakapela.jednoduse.cz/`}
                target="_blank"
                rel="external"
                title="Webové stránky"
              >
                <IconWorld className="inline mr-2" size={30} />
              </Link>
            </ContainerLi>
          </ContainerUl>*/}
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

const gallery = [
  {
    path: "/assets/images/spolecenstvi/veka_na_louce.jpeg",
    alt: "Vesmírná kapela na louce"
  },
];
