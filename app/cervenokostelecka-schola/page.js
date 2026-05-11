import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerImage from "../../components/layouts/container-image";
export default async function CKSchola() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Červenokostelecká schola </ContainerTitle>
          <ContainerDescription>
            Jsme parta mladých nadšenců pro Boha z&nbsp;Červeného Kostelce a&nbsp;okolí.
            Svým hraním a&nbsp;zpěvem chceme sdílet s&nbsp;ostatními dary od Boha a&nbsp;dávat
            jimi hudební podobu toho, čemu věříme.
          </ContainerDescription>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/cervenokostelecka-schola.jpeg"
            webpPath="/assets/images/spolecenstvi/cervenokostelecka-schola.webp"
            altText="Fotka Červenokostelcké scholy z minulého roku"
            className="w-full my-2"
          />
          <ContainerParagraph>
            Schola z&nbsp;Červeného Kostelce nás minulý rok provedla závěrečnou mší 
            v&nbsp;katedrále. Před dvěma lety doprovázeli chvály v&nbsp;kostele
            Panny Marie na Velkém náměstí.
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
