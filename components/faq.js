import FaqBox from "./layouts/faq-box";
import FaqLayout from "./layouts/faq-layout";
import Link from "next/link";
import ContainerH3 from "./layouts/container-h3";
import ContainerOl from "./layouts/container-ol";
import ContainerLi from "./layouts/container-li";
import ContainerUl from "./layouts/container-ul";

export default function FAQ() {
  return (
    <FaqLayout>
      <FaqBox question={`Co je setkání ministrantů?`} icon={`users`}>
        Je to příležitost se setkat s dalšími <i>kolegy od oltáře</i>,
        načerpat nové znalosti a&nbsp;novou energii do ministrantské služby.
        Setkání ministrantů navazuje na dřívější tradici akcí pro ministranty v&nbsp;naší diecézi
        a má za cíl začít novou éru těchto každoročních setkání.
      </FaqBox>
      <FaqBox question={`Kolik setkání ministrantů stojí?`} icon={`money`}>
        Doporučený příspěvek je <strong>100,-Kč v hotovosti</strong>. Je možné ho
        zaplatit v hotovosti na recepci při dopoledním programu.
      </FaqBox>
      <FaqBox question={`Co si sbalit s sebou?`} icon={`luggage`}>
        Sváču, láhev s&nbsp;pitím, doporučený příspěvek (100,-Kč v hotovosti),
        peníze na svoji dopravu a hlavně <strong>ministrantské oblečení </strong>
        na závěrečnou mši svatou.
      </FaqBox>
      <FaqBox question={`Kde seženu zdravotní pomoc?`} icon={`medical`}>
        V případě jakéhokoliv zdravotního problému se neváhej obrátit na 
        kohokoliv z organizátorů. V&nbsp;závažných případech neváhej
        a&nbsp;volej IZS tel. číslem{" "}
        <Link href={`tel:155`} target="_blank" className="underline">
          155
        </Link>
        .
      </FaqBox>
      <FaqBox question={`Jak se přihlásím?`} icon={`pencil`}>
        Jednoduše,{" "}
        <strong>
          vyplň{" "}
          <Link
            href="https://forms.office.com/e/KpxkZsYqEw"
            rel="external noopener nofollow"
            target="_blank"
            className="underline"
          >
            přihlášku
          </Link>
        </strong>
        &nbsp;a&nbsp;budeme s&nbsp;Tebou počítat.
      </FaqBox>
      <FaqBox question={`Jak se přihlásit na odpolední workshopy?`} icon={`old`}>
        Odpoledne bude možnost si vybrat z nabídky workshopů, přihlašování na
        jednotlivé bloky bude probíhat na místě.
      </FaqBox>
      <FaqBox question={`Jak bude zajištěno stravování?`} icon={`chef`}>
        Doporučujeme si s&nbsp;sebou přivézt svačinku. Pro všechny, kteří se
        včas přihlásili, <strong>bude k&nbsp;obědu bageta</strong>. Pokud máte
        dietu, napište nám do{" "}
        <Link
          href="https://forms.office.com/e/KpxkZsYqEw"
          rel="external noopener nofollow"
          target="_blank"
          className="underline"
        >
          přihlášky
        </Link>.
      </FaqBox>
      <FaqBox question={`Jak se v Hradci dopravovat?`} icon={`bus`}>
        <ContainerH3>Stručně</ContainerH3>
        Hradec Králové je malej, <strong>choďte pěšky</strong>! Využijte například naši{" "}
        <Link href="/mapa" className="underline font-semibold" target="_blank">
          mapu
        </Link>
        <ContainerH3>
          Cesta z&nbsp;vlakového nádraží ke&nbsp;kostelu Nanebevzetí Panny Marie
        </ContainerH3>
        Při východu z&nbsp;budovy vlakového nádraží přejdete zastávky autobusové
        dopravy a&nbsp;vydáte se rovně po ulici S.&nbsp;K.&nbsp;Neumanna, kterou se
        dostanete na náměstí 28.&nbsp;října. Dále půjdete podél obchodních domů TESCO
        a&nbsp;Atrium po ulici Dukelská třída a&nbsp;pomocí podchodu se
        dostanete na třídu Karla IV. Po ní půjdete až k&nbsp;řece, přejdete most
        a&nbsp;dáte se doprava podél řeky. Následně odbočíte doleva do ulice Palackého,
        na jejíž konci přejdete přes přechod a budete pokračovat cestou do kopce.
        Tak se dostanete na Velké náměstí a kostel Nanebevzetí Panny Marie již
        budete mít na dohled na pravé straně náměstí.
        <br />
        <strong>Autobusy Hlavní nádraží – Adalbertinum </strong>
        <span className="font-extralight italic">(odsud nahoru do&nbsp;kopce a přes náměstí)</span>
        <br />
        <ContainerUl>
          <ContainerLi>
            Zastávka A – 16 <br />
          </ContainerLi>
          <ContainerLi>
            Zastávka C – 2, 6, 15, 17 <br />
          </ContainerLi>
        </ContainerUl>
        <strong>Autobusy Hlavní nádraží – Zimní stadion </strong>
        <span className="font-extralight italic">(odsud přejít kolem kruhového objezdu
        a&nbsp;nahoru po schodech <i>bono publico</i>. Kostel bude po pravé straně.)</span>
        <br />
        <ContainerUl>
          <ContainerLi>
            Zastávka A – 16 <br />
          </ContainerLi>
          <ContainerLi>
            Zastávka C – 2 <br />
          </ContainerLi>
        </ContainerUl>
        <ContainerH3>
          Cesta z&nbsp;autobusového nádraží ke&nbsp;kostelu Nanebevzetí Panny Marie
        </ContainerH3>
        Stojíte na autobusovém nádraží zády k obchodu LIDL, vydáte se doleva po
        ulici Nádražní a&nbsp;na křižovatce se dáte doprava na Blažíčkovo
        náměstí. Zde se na křižovatce vydáte doleva po ulici Hořická, po které
        dojdete až nakonec této ulice k&nbsp;pizzerii Casa Mia. Zde přejdete
        silnici až k&nbsp;pizzerii a&nbsp;pomocí podchodu se dostanete na třídu
        Karla&nbsp;IV. Po ní půjdete až k&nbsp;řece, přejdete most 
        a&nbsp;dáte se doprava podél řeky. Následně odbočíte doleva do ulice Palackého,
        na jejíž konci přejdete přes přechod a budete pokračovat cestou do kopce.
        Tak se dostanete na Velké náměstí a kostel Nanebevzetí Panny Marie již
        budete mít na dohled na pravé straně náměstí.
        <br />
        <strong>Autobusy Terminál HD – Adalbertinum </strong>
        <span className="font-extralight italic">(odsud nahoru do&nbsp;kopce a přes náměstí)</span>
        <br />
        <ContainerUl>
          <ContainerLi>
        Zastávka C1 – 2, 6<br />
          </ContainerLi>
          <ContainerLi>
        Zastávka C2 – 15, 17<br />
          </ContainerLi>
          <ContainerLi>
        Zastávka D2 – 11<br />
          </ContainerLi>
        </ContainerUl>
        <strong>Autobusy Terminál HD – Zimní stadion </strong>
        <span className="font-extralight italic">(odsud přejít kolem kruhového objezdu
        a&nbsp;nahoru po schodech <i>bono publico</i>. Kostel bude po pravé straně.)</span>
        <br />
        <ContainerUl>
          <ContainerLi>
        Zastávka C1 – 2<br />
          </ContainerLi>
        </ContainerUl>
      </FaqBox>
      <FaqBox question={`Desatero pravidel setkání ministrantů`} icon={`notes`}>
        <ContainerOl>
          <ContainerLi className={`my-4`}>
            <strong>Dodržuj pokyny organizátorů</strong>
            <br />
            Respektuj pravidla a&nbsp;program setkání. Nevstupuj do prostor, do
            kterých není povolen vstup.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Chovej se ohleduplně</strong>
            <br />
            Ber ohled na ostatní účastníky a&nbsp;okolní prostředí. Udržuj 
            pořádek. Buď trpělivý/á a&nbsp;pozorný/á. Vnímej snahu přednášejících
            předat ti to nejlepší. 
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Dbej na své zdraví</strong>
            <br />
            Pij dostatek vody, jez pravidelně a&nbsp;obleč se dle počasí.
            Dodržuj pravidla silničního provozu. Nezapomeň si vzít své léky.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Měj u&nbsp;sebe kontakt na odpovědnou osobu</strong>
            <br />
            Vždy věz, koho kontaktovat v&nbsp;případě nouze.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>
              V&nbsp;případě problému si neváhej říct o&nbsp;pomoc
            </strong>
            <br />
            Organizátor, zdravotník či odpovědná osoba jsou připraveni pomoci.
            Neváhej je oslovit. V&nbsp;případě neakutních potíží požádej o pomoc
            někoho z organizátorů.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>
              Měj u&nbsp;sebe doklady a&nbsp;kartičku zdravotní pojišťovny
            </strong>
            <br />
            Dále si případ nouze ulož číslo 155 na Zdravotnickou záchrannou
            službu. Též měj staženou a&nbsp;aktivovanou aplikaci Záchranka.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Drž se skupiny</strong>
            <br />
            Neodcházej sám/sama bez domluvy s&nbsp;vedoucím tvé skupiny.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Omezuj používání mobilu</strong>
            <br />
            Buď přítomný/á a&nbsp;vnímej atmosféru setkání. Neváhej aktivně
            oslovit účastníky okolo sebe.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Žádný alkohol, cigarety ani jiné omamné látky</strong>
            <br />
            Takové věci by tě zbytečně rušily od duchovního prožitku
            a&nbsp;společenství.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Dej prostor Duchu Svatému a&nbsp;užívej setkání!</strong>
            <br />
            Buď pozitivní a&nbsp;otevřený/á novým impulzům setkání. Načerpej
            povzbuzení a&nbsp;posilu do dalších dní.
          </ContainerLi>
        </ContainerOl>
      </FaqBox>
      {/* 
      <FaqBox question={`Kam si odskočit na záchod?`} icon={`toilet`}>
        Nezoufej, mrkni{" "}
        <Link
          href="https://deniksracu.cz/"
          target="_blank"
          rel="external"
          className="underline font-semibold"
        >
          sem
        </Link>{" "}
        a&nbsp;najdi si nejbližší trůn, který bude vyhovovat tvým požadavkům.
      </FaqBox>
      */}
    </FaqLayout>
  );
}
