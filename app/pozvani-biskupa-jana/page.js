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

export default function Invitation() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Pozvání biskupa Jana</ContainerTitle>
          <Image
            src="/assets/images/bihk-logo.svg"
            alt="Logo Biskupství Hradec Králové"
            width={200}
            height={100}
            className="mx-auto mb-8 w-[150px] h-auto"
          />
          <ContainerParagraph className={"text-center font-bold"}>
            Biskupství Hradec Králové
          </ContainerParagraph>
          <ContainerParagraph className={"text-right"}>
            Hradec Králové, 23. února 2026
          </ContainerParagraph>
          <ContainerParagraph>
            Sestry a bratři v Kristu<br />
            milí mladí přátelé,
          </ContainerParagraph>
          <ContainerParagraph></ContainerParagraph>
          <ContainerParagraph>
            když náš Pán vysílá učedníky do světa a svěřuje
            jim úkol, aby o Něm svědčili, osobně si je vybírá, dotýká se srdce
            každého z nich, ale zároveň je povolává ve společenství. Od počátku
            je Jeho vůlí, aby se shromažďovali kolem stolu, společně četli
            jeho Slovo, přijímali Eucharistii a ukazovali druhým vzájemnou lásku.
            On pak bude vždy zůstávat uprostřed nich.
          </ContainerParagraph>
          <ContainerParagraph>
            Dovolte mi, abych Vás, mladé ve věku 14 až 26 let, srdečně pozval
            do&nbsp;Hradce Králové na&nbsp;letošní Diecézní setkání mládeže, které
            se&nbsp;uskuteční v&nbsp;sobotu před&nbsp;Květnou nedělí, 28. března 2026.
            Jeho mottem je právě jedna z&nbsp;vět, jimiž Ježíš zve učedníky ke&nbsp;službě:
            „Vy také vydávejte svědectví, protože jste se&nbsp;mnou od&nbsp;začátku.“
            Na učedníky sev&nbsp;tu&nbsp;chvíli obrací jako na jím utvořené společenství,
            které bude o&nbsp;Pravdy víry pečovat ve vzájemné spolupráci a&nbsp;stane se
            Jeho&nbsp;tajemným Tělem, přebývajícím ve&nbsp;světě po&nbsp;Jeho zmrtvýchvstání.
          </ContainerParagraph>
          <ContainerParagraph>
            Moje pozvání proto není jen pozváním na&nbsp;jednodenní akci, ale zvu&nbsp;Vás
            k&nbsp;co&nbsp;nejširší a&nbsp;nejživější účasti na tomto společenství,
            do kterého si&nbsp;Vás sám&nbsp;Pán vybral. Věřím, že&nbsp;společně
            strávený den v&nbsp;Hradci&nbsp;Králové Vám k tomu bude velkou posilou,
            proto se&nbsp;těším na setkání s&nbsp;Vámi u naší katedrály!
          </ContainerParagraph>
          <ContainerParagraph className={"italic text-right"}>
            V Kristu a Marii Váš
            <span className="mt-4 block ml-auto w-[300px]">
              <Image
                src="/assets/images/biskup_Jan_podpis.svg"
                alt="Podpis biskupa Jana"
                width={300}
                height={36}
                className="mt-4 w-full h-auto"
                />
            </span>
            biskup +Jan
          </ContainerParagraph>
          <ContainerParagraph className={"italic text-right"}>
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
