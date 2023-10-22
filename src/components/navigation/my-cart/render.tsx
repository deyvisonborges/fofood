import Image from "next/image";
import * as S from "./styles";
import { assetsLinks } from "@/utils/assetsLinks";

export function MyCart() {
  return (
    <S.Container>
      <Image
        src={assetsLinks.svgs.buy}
        alt="My Cart"
        height={16}
        width={16}
      />
      <S.Text>My Cart</S.Text>
    </S.Container>
  );
}
