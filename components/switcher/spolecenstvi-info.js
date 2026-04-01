import Container from "../layouts/container";
import CardFeed from "../layouts/card-feed";
import Link from "next/link";
import Button from "../layouts/button";
import IconCustomVeka from "../images/veka";
import ContainerH2 from "../layouts/container-h2";
import { IconArrowBarToDown, IconChessBishop, IconMap, IconSailboat2, IconTower, IconCloud } from "@tabler/icons";
import IconCustomDCM from "../images/dcm-hk";
import IconCustomVesmir from "../images/vesmir";
import IconCustomSalas from "../images/salas";
import IconCustomAdventniCesta from "../images/adventni-cesta";
import FAQ from "../faq";
import IconCustomTmm from "../images/tmm";
import IconCustomDenikSracu from "../images/deniksracu";

export default function SpolecenstviInfo({ id, className }) {
  return (
    <Container className={className} id={id}>
      <FAQ />
    </Container>
  );
}
