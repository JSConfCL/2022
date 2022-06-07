import styled from "@emotion/styled";
import { PageProps } from "../../../pages/cfp";
import { H1 } from "../core/Typography";
import Description from "../core/Description";
import Image from "../core/Image";
import { PrimaryStyledLink } from "../Links";
import { JSConfLogo } from "../svgs/logo";

const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 1440px;
  height: 100vh;
  padding: 16px;
  align-items: flex-start;
  max-height: 1000px;

  > h1 {
    z-index: 3;
    font-size: 48px;
    line-height: 48px;
    font-weight: 400;
    width: 100%;
    max-width: 250px;
  }

  .principal img {
    top: 140px;
  }

  @media (min-width: 500px) {
    margin-bottom: 100px;
  }

  @media (min-width: 769px) {
    max-height: 240px;
    padding: 48px;
    flex-direction: column;
    align-items: flex-start;
    max-height: 620px;
    > h1 {
      width: 70%;
      max-width: 100%;
      font-size: 120px;
      line-height: 120px;
    }

    img {
      top: 100px;
      right: 48px;
      width: 100%;
      object-position: center center;
    }
  }

  @media (min-width: 1140px) {
    > h1 {
      width: 50%;
    }
  }
`;

const ImageContainer = styled.section`
  position: relative;
  order: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  z-index: 1;
  min-height: 400px;
  padding-bottom: 16px;

  .principal img {
    top: 58px;
    min-height: 300px;
  }

  svg {
    position: absolute;
    width: 40px;
    right: 36px;
    top: 86px;
    z-index: 3;
  }

  @media (min-width: 769px) {
    position: absolute;
    right: 0px;
    top: 0px;
    width: calc(100% - 240px);

    .principal img {
      top: 158px;
    }

    svg {
      right: 72px;
      top: 186px;
    }
  }
`;

const Text = styled.p`
  position: absolute;
  z-index: 3;
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 58px;
  display: flex;
  align-items: center;
  color: #f0e040;
  bottom: 16px;
  right: 0px;

  @media (min-width: 769px) {
    font-size: 80px;
    line-height: 145px;
    top: 530px;
    right: 80px;
  }
`;

const WrapperDescription = styled.section`
  order: 3;
  width: 100%;
  height: 400px;
  > section {
    max-width: 100%;
    padding: 16px 0px;
  }
  z-index: 3;

  @media (min-width: 769px) {
    max-width: 600px;

    > section {
      max-width: 350px;
      padding: 16px 0px;
    }
  }
`;

const BannerCFP = (props: PageProps["heroData"]) => {
  return (
    <Container>
      <H1 color="#F45B69">{props.tile}</H1>
      <WrapperDescription>
        <Description data={props?.description?.json!} />
        <Description data={props?.secondDescription?.json!} />
        {props.ctaUrl && (
          <PrimaryStyledLink href={props.ctaUrl}>
            {props.ctaText}
          </PrimaryStyledLink>
        )}
      </WrapperDescription>
      <ImageContainer>
        <JSConfLogo />
        {props?.date && <Text>{props.date}</Text>}
        <Image
          mobile={props?.background?.url!}
          alt={props?.background?.title! || ""}
          className="principal"
          style={{
            position: "absolute",
            maxWidth: "864px",
            borderRadius: "0px 32px 0px 0px",
            aspectRatio: "830 / 365",
            objectFit: "cover",
            zIndex: 2,
          }}
        />
        <Image
          mobile="/images/image-background.png"
          alt="background"
          className="background"
          style={{
            position: "absolute",
            zIndex: 1,
            width: "70%",
            bottom: "30px",
            right: "0px",
          }}
        />
      </ImageContainer>
    </Container>
  );
};

export default BannerCFP;
