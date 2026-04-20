import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import ContainerParagraph from "../../components/layouts/container-paragraph";

export default async function BistroUDvouPratel() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Kdo je to formátor?</ContainerTitle>
          <ContainerDescription>
            Formátor je člověk, který se věnuje formaci ministrantů.
          </ContainerDescription>
          <ContainerParagraph>
            Formátor je osoba ustanovená v konkrétní oblasti. Ideální stav je mít v každé aktivní
            oblasti alespoň jednoho. Za vhodného formátora je považován člověk, který se již aktivně
            věnuje vedení ministrantského společenství. Formátorem může být i kněz, ale vzhledem
            k současným podmínkám se jako praktičtější jeví, aby byla tato služba delegována na:
            mladého člověka se zájmem o službu u oltáře a o rozvoj ministrantů v diecézi, nebo
            rodiče, kteří se aktivně zapojuje do služeb ve farnosti a chce svým dětem dopřát
            kvalitní formaci.
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
