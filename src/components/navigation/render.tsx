import * as S from "./styles";

import Image from "next/image";
import { assetsLinks } from "@/utils/assetsLinks";
import { Menu } from "./menu/menu.render";
import { MyCart } from "./my-cart";
import { ContactUs } from "./contact-us/render";

export function Navigation() {
  return (
    <S.Container>
      <Image
        height={32}
        width={76}
        src={assetsLinks.svgs.logo}
        alt="Fofood - Logotipo"
      />

      <Menu />
      <S.Line />
      <MyCart />
      <ContactUs />
    </S.Container>
  );
}
