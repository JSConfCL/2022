import type { NextPage } from "next";
import styled from "@emotion/styled";

import { Hero } from "../src/Components/sections/Hero";
import WhySection from "../src/Components/sections/WhySection";
import HowSection from "../src/Components/sections/HowSection";
import {
  HomeQueryDocument,
  HomeQueryQuery,
} from "../src/graphql/home.generated";
import { urlQlient } from "../src/graphql/urql";

import { ParseQuery } from "../src/helpers/types";
import FollowUsSection from "../src/Components/sections/FollowUsSection";
import SpeakerSection from "../src/Components/sections/SpeakerSection";
import { Footer } from "../src/Components/Footer/Footer";

type Page = ParseQuery<HomeQueryQuery["page"]>;

export type PageProps = {
  navData: Page["navBar"];
  whyItems: Page["whyBlockCollection"];
  howItems: Page["howBlockCollection"];
  heroData: Page["heroBlock"];
  followUsData: Page["followUsBlock"];
  speakerData: Page["speakersBlock"];
  footerData: Page["footer"];
};
const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
const StyledBlackWrapp = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const Home: NextPage<PageProps> = (props) => {
  return (
    <Container>
      <Hero heroData={props.heroData} navData={props.navData} />
      <StyledBlackWrapp>
        {props.whyItems && <WhySection page={props.whyItems} />}
        {props.howItems && <HowSection page={props.howItems} />}
        {props.speakerData && <SpeakerSection page={props.speakerData} />}
        <FollowUsSection page={props.followUsData} />
      </StyledBlackWrapp>
      <Footer footerData={props.footerData} />
    </Container>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<HomeQueryQuery>(HomeQueryDocument)
    .toPromise();

  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    navData: page?.navBar,
    heroData: page?.heroBlock,
    whyItems: page?.whyBlockCollection,
    howItems: page?.howBlockCollection,
    followUsData: page?.followUsBlock,
    speakerData: page?.speakersBlock!,
    footerData: page?.footer,
  };

  return {
    props,
  };
}

export default Home;
