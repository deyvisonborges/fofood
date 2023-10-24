import { UIGrid } from "@/components/grid";
import * as S from "./styles";
import { Navigation } from "@/components/navigation";
import { assetsLinks } from "@/utils/assetsLinks";
import Image from "next/image";
import { Typography } from "@/components/typography";

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

        <S.ButtonsGroup>
          <S.ButtonOrderNow>Order now</S.ButtonOrderNow>
          <S.ButtonLearnMore>Learn More</S.ButtonLearnMore>
        </S.ButtonsGroup>

        <S.OurHappyCustomersContainer>
          <S.OurHappyCustomers>
            <Image
              alt="Customer"
              src={assetsLinks.images.common.imgAvatar001}
              height={48}
              width={48}
            />
            <Image
              alt="Customer"
              src={assetsLinks.images.common.imgAvatar002}
              height={48}
              width={48}
            />
            <Image
              alt="Customer"
              src={assetsLinks.images.common.imgAvatar003}
              height={48}
              width={48}
            />
            <Image
              alt="Customer"
              src={assetsLinks.images.common.imgAvatar004}
              height={48}
              width={48}
            />
          </S.OurHappyCustomers>

          <S.ContainerText>
            <Typography variant="heading-7">Our Happy Customers</Typography>

            <S.ContainerAvaliation>
              <Image
                alt="avaliation"
                src={assetsLinks.svgs.yellowStar}
                height={14}
                width={14}
              />

              <Typography variant="body-3-bold">4.9</Typography>
              <Typography variant="body-3-regular">(12.8k reviews)</Typography>
            </S.ContainerAvaliation>
          </S.ContainerText>
        </S.OurHappyCustomersContainer>

        <Typography variant="body-1" color="black50">
          For Better Service Download Our Mobile App Now
        </Typography>

        <S.SocialContainer>
          <Image
            alt="google play"
            src={assetsLinks.images.common.imgGooglePlay}
            height={52}
            width={156}
          />
          <Image
            alt="app store"
            src={assetsLinks.images.common.imgAppStore}
            height={52}
            width={164}
          />
        </S.SocialContainer>
      </UIGrid>
      <S.HomeImage src={assetsLinks.images.pages.home.homeImg001} />
    </S.Container>
  );
}
