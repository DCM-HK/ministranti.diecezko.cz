import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import Container from "../../../../components/layouts/container";
import ContainerTitle from "../../../../components/layouts/container-title";
import PageMain from "../../../../components/layouts/page-main";
import ContainerParagraph from "../../../../components/layouts/container-paragraph";
import Link from "next/link";
import IconCustomProScholy from "../../../../components/images/pro-scholy";
import ContainerH2 from "../../../../components/layouts/container-h2";

export default function Playlist() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Playlist na mši svatou</ContainerTitle>
          <ContainerParagraph>
            Texty písniček najdeš buďto ve zpěvníku pro scholy nebo níže.
          </ContainerParagraph>
          <Link
            href={`/assets/playlist/2025_mse_updated.proscholy`}
            target="_blank"
            download="2025_mse.proscholy"
          >
            <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-3 cursor-pointer text-base flex flex-row items-center justify-center mb-2 mr-2">
              <IconCustomProScholy className="w-8" />
              Otevřít playlist na mši
            </button>
          </Link>
          <ContainerH2>Vstup: Hospodine, prosím nademnou se smiluj</ContainerH2>
          <ContainerParagraph>
            1.&nbsp;Hospodine,&nbsp;prosím, nade&nbsp;mnou se&nbsp;smiluj,
            <br />
            zahlaď všechny&nbsp;moje&nbsp;viny a&nbsp;mé srdce&nbsp;bude&nbsp;čisté.
            <br />
            Svého Ducha&nbsp;zas mi&nbsp;daruj,
            <br />
            ať je&nbsp;ve mně&nbsp;stále&nbsp;činný,
            <br />
            zas mé&nbsp;kroky budou&nbsp;jisté,
            <br />
            zas mé&nbsp;kroky budou&nbsp;jisté,
            <br />
            zas mé&nbsp;kroky budou&nbsp;jisté.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            R:&nbsp;Oblečte člověka&nbsp;nového,
            <br />
            který podle&nbsp;vzoru&nbsp;Božího
            <br />
            je&nbsp;stvořený,&nbsp;spravedlivý a&nbsp;svatý.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            C:&nbsp;Hospodine,&nbsp;prosím, nade&nbsp;mnou se&nbsp;smiluj,
            <br />
            zahlaď všechny&nbsp;moje&nbsp;viny a&nbsp;mé srdce&nbsp;bude&nbsp;čisté.
            <br />A&nbsp;mé&nbsp;srdce bude&nbsp;čisté.
          </ContainerParagraph>
          <ContainerH2>Evangelium: Nám, Pane, dal jsi slovo své</ContainerH2>
          <ContainerParagraph>
            R:&nbsp;Nám,&nbsp;Pane,&nbsp;dal jsi&nbsp;Slovo&nbsp;své,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.&nbsp;
            <br />
            Ať&nbsp;Tebe&nbsp;vždycky&nbsp;přijmeme,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.
          </ContainerParagraph>
          <ContainerParagraph>
            1.&nbsp;Zůstaň,&nbsp;Pane, s&nbsp;námi&nbsp;všechny dny&nbsp;až&nbsp;na věky,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.&nbsp;
            <br />
            Ty jsi&nbsp;cesta, Ty&nbsp;jsi&nbsp;život pro&nbsp;nás,&nbsp;pro&nbsp;bratry,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.
          </ContainerParagraph>
          <ContainerParagraph>
            R:&nbsp;Nám,&nbsp;Pane,&nbsp;dal jsi&nbsp;Slovo&nbsp;své,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.&nbsp;
            <br />
            Ať&nbsp;Tebe&nbsp;vždycky&nbsp;přijmeme,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.
          </ContainerParagraph>
          <ContainerParagraph>
            2.&nbsp;Všechny&nbsp;moci světa,&nbsp;když nás,&nbsp;Pane,&nbsp;týrají,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.&nbsp;
            <br />
            Ve&nbsp;víře nás&nbsp;přece&nbsp;Boží síla&nbsp;provází,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.
          </ContainerParagraph>
          <ContainerParagraph>
            R:&nbsp;Nám,&nbsp;Pane,&nbsp;dal jsi&nbsp;Slovo&nbsp;své,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.&nbsp;
            <br />
            Ať&nbsp;Tebe&nbsp;vždycky&nbsp;přijmeme,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.
          </ContainerParagraph>
          <ContainerParagraph>
            3.&nbsp;Stále&nbsp;znovu zpívám:&nbsp;Pane, dej&nbsp;nám&nbsp;Ducha&nbsp;též,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.&nbsp;
            <br />
            Který&nbsp;srdce, mysl&nbsp;zarmoucenou&nbsp;pozdvihne,
            <br />
            Ducha svého&nbsp;dej nám&nbsp;též.
          </ContainerParagraph>
          <ContainerH2>Obětní průvod: Požehnaný jsi, Bože</ContainerH2>
          <ContainerParagraph>
            Požehnaný jsi,&nbsp;Bože,&nbsp;na věky,
            <br />
            z&nbsp;Tvé ruky všechno&nbsp;máme.
            <br />
            Požehnaný jsi,&nbsp;Bože&nbsp;veliký,
            <br />
            ...
            <br />
            1.&nbsp;...&nbsp;chléb ti&nbsp;zde přinášíme.
            <br />
            2.&nbsp;...&nbsp;víno&nbsp;ti přinášíme.
            <br />
            3.&nbsp;...&nbsp;dary&nbsp;ti přinášíme.
            <br />
          </ContainerParagraph>
          <ContainerH2>
            Přijímání I.: Ty jsi mi vším (Jsi silou mou, když umdlévám)
          </ContainerH2>
          <ContainerParagraph>
            1.&nbsp;Jsi silou&nbsp;mou, když&nbsp;umdlévám, jsi poklad,&nbsp;který nalézám.
            <br />
            Ty jsi&nbsp;mi&nbsp;vším,&nbsp;co&nbsp;mám.
          </ContainerParagraph>
          <ContainerParagraph>
            2.&nbsp;Klenotem&nbsp;vzácným ses&nbsp;mi&nbsp;stal,
            <br />
            Tebe jen&nbsp;blázen by&nbsp;se&nbsp;vzdal.
            <br />
            Ty jsi&nbsp;mi&nbsp;vším,&nbsp;co&nbsp;mám.
          </ContainerParagraph>
          <ContainerParagraph>
            R:&nbsp;Králi,&nbsp;Beránku,
            <br />
            chválím&nbsp;jméno&nbsp;Tvé.&nbsp;
            <br />
            Králi,&nbsp;Beránku,
            <br />
            chválím&nbsp;jméno&nbsp;Tvé.
          </ContainerParagraph>
          <ContainerParagraph>
            3.&nbsp;Vzal jsi&nbsp;můj&nbsp;hřích, můj&nbsp;kříž, můj&nbsp;žal.
            <br />
            Tobě vzdám&nbsp;díky, že&nbsp;jsem&nbsp;vstal.
            <br />
            Ty jsi&nbsp;mi&nbsp;vším&nbsp;co&nbsp;mám.
          </ContainerParagraph>
          <ContainerParagraph>
            4.&nbsp;Když padám,&nbsp;Ty mne&nbsp;pozvedáš,
            <br />
            v&nbsp;poušti&nbsp;mi&nbsp;pohár doléváš.
            <br />
            Ty jsi&nbsp;mi&nbsp;vším,&nbsp;co&nbsp;mám.
          </ContainerParagraph>
          <ContainerH2>Přijímání II.: Všichni jsme jedno tělo</ContainerH2>
          <ContainerParagraph>
            R:&nbsp;/:&nbsp;Všichni jsme&nbsp;jedno&nbsp;tělo,
            <br />
            spojil nás&nbsp;Ježíš, nikdo&nbsp;není&nbsp;sám.&nbsp;
            <br />
            Všichni jsme&nbsp;jedno&nbsp;tělo,
            <br />
            spojil nás&nbsp;Ježíš, On&nbsp;dal život&nbsp;nám. :/
          </ContainerParagraph>
          <ContainerParagraph>
            1.&nbsp;/:&nbsp;Když jíte&nbsp;tělo Mé&nbsp;a pijete&nbsp;Mou krev,
            <br />
            budu žít&nbsp;ve vás,&nbsp;budete v&nbsp;lásce Mé.&nbsp;:/
          </ContainerParagraph>
          <ContainerParagraph>
            2.&nbsp;/:&nbsp;Ve jménu&nbsp;Ježíše poklekne&nbsp;každý z&nbsp;nás
            <br />
            On je&nbsp;všech králů&nbsp;Král a&nbsp;brzy přijde&nbsp;zas. :/
          </ContainerParagraph>
          <ContainerParagraph>
            3.&nbsp;/:&nbsp;Cestou a&nbsp;Pravdou jsem,&nbsp;Beránek nejtišší,
            <br />
            jsem oběť&nbsp;jediná, jsem&nbsp;oběť nejvyšší.&nbsp;:/
            <br />
          </ContainerParagraph>
          <ContainerH2>Přijímání III.: Vzácný jsi</ContainerH2>
          <ContainerParagraph>
            1.&nbsp;/:&nbsp;Vzácný&nbsp;jsi pro&nbsp;mě, Pane&nbsp;můj.:/
            <br />
            R:&nbsp;/: Tebe&nbsp;mám, Tebe&nbsp;mám&nbsp;rád, Tebe&nbsp;mám&nbsp;rád,
            <br />
            Ty sáms&nbsp;mě&nbsp;dřív měl&nbsp;rád.:/
            <br />
            2.&nbsp;/:&nbsp;Láska&nbsp;Tvá je&nbsp;vzácná, to&nbsp;vím.:/
            <br />
            3.&nbsp;/:&nbsp;Vůle&nbsp;Tvá je&nbsp;správná, to&nbsp;vím!:/
            <br />
            4.&nbsp;/:&nbsp;Cestou&nbsp;Tvou, já&nbsp;navždy chci&nbsp;jít.:/
          </ContainerParagraph>
          <ContainerH2>Závěr: Poutníci naděje</ContainerH2>
          <ContainerParagraph>
            R:&nbsp;Plamen naděje&nbsp;v nás&nbsp;oživ,
            <br />
            v&nbsp;píseň&nbsp;chvály proměň&nbsp;jej.
            <br />
            Poutníky, co&nbsp;naději nesou,
            <br />
            Pane, chraň&nbsp;a provázej.
          </ContainerParagraph>
          <ContainerParagraph>
            1.&nbsp;Každý jazyk,&nbsp;lid i&nbsp;národ
            <br />
            najde světlo&nbsp;v Slově&nbsp;tvém.
            <br />
            Všechno, co&nbsp;je rozptýlené,
            <br />
            jednotu nalezne&nbsp;v Něm.
          </ContainerParagraph>
          <ContainerParagraph>
            R:&nbsp;Plamen naděje&nbsp;v nás&nbsp;oživ,
            <br />
            v&nbsp;píseň&nbsp;chvály proměň&nbsp;jej.
            <br />
            Poutníky, co&nbsp;naději nesou,
            <br />
            Pane, chraň&nbsp;a provázej.
          </ContainerParagraph>
          <ContainerParagraph>
            2.&nbsp;Bože něžný,&nbsp;trpělivý,
            <br />
            posiluj nás&nbsp;v naději.
            <br />
            Nové nebe,&nbsp;novou zemi,
            <br />
            Boží Duch&nbsp;kéž obnoví.
          </ContainerParagraph>
          <ContainerParagraph>
            R:&nbsp;Plamen naděje&nbsp;v nás&nbsp;oživ,
            <br />
            v&nbsp;píseň&nbsp;chvály proměň&nbsp;jej.
            <br />
            Poutníky, co&nbsp;naději nesou,
            <br />
            Pane, chraň&nbsp;a provázej.
          </ContainerParagraph>
          <ContainerParagraph>
            3.&nbsp;Vstaň a&nbsp;jdi, Duch&nbsp;Svatý vane,
            <br />
            sám Bůh&nbsp;vstupuje v&nbsp;náš svět.
            <br />
            Kdo jej&nbsp;dá poznat&nbsp;hledajícím?
            <br />
            Pošli mne,&nbsp;zní má&nbsp;odpověď.
            <br />
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
