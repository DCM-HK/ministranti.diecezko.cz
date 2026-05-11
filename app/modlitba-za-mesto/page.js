import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
export default async function ModlitbaZaMesto() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Modlitba za město</ContainerTitle>
          <ContainerDescription>
            V&nbsp;letošním Jubilejním roce 2025 slaví naše diecézní město Hradec
            Králové 800 let od své první písemné zmínky. Proto jsme se rozhodli
            do programu zapojit putování na hradecká místa a&nbsp;spojit jej s
            modlitbou za město, do kterého přineseme světlo naděje z&nbsp;našich
            vikariátů.
          </ContainerDescription>

          <ContainerParagraph>
            Nejdříve se shromáždíme před Biskupským gymnáziem, odkud budeme po
            menších vikariátních skupinkách putovat na vybraná místa v&nbsp;těsném
            okolí. Společně strávený čas ve vikariátech můžeme využít tedy nejen
            k&nbsp;modlitbě, ale i&nbsp;k seznámení se s&nbsp;někým novým či k&nbsp;setkání se
            starými známými.
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
