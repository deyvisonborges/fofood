import Image from "next/image";
import * as S from "./styles";
import { assetsLinks } from "@/utils/assetsLinks";

export function MyFavorites() {
  return (
    <S.Container>
      <Image
        src={assetsLinks.svgs.love}
        alt="My Favorites"
        height={16}
        width={16}
      />
      <S.Text>My Favorites</S.Text>
    </S.Container>
  );
}
