import { UIGrid } from "@/components/grid";
import * as S from "./styles";
import { Navigation } from "@/components/navigation";
import { assetsLinks } from "@/utils/assetsLinks";

export function HeroSection() {
  return (
    <S.Container>
      <UIGrid>
        <Navigation />

        <S.Subtitle variant="heading-4" color="pink100">
          Welcome to Fofood
        </S.Subtitle>

        <S.Title variant="heading-1" color="black100">
          Super Delicious Food Special for You
        </S.Title>

        <S.Description variant="body-1" color="black50">
          Order your favorites food from anywhere and get delivery at your door
        </S.Description>
      </UIGrid>
      <S.HomeImage src={assetsLinks.images.pages.home.homeImg001} />
    </S.Container>
  );
}
