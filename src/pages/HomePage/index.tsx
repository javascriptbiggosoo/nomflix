import styled from "styled-components";

import NowPlayingSlider from "./NowPlayingSlider";
import PopularSlider from "./PopularSlider";
import UpcomingSlider from "./UpcomingSlider";
import TopRatedSlider from "./TopRatedSlider";
import LazyLoad from "react-lazyload";

export default function HomePage() {
  return (
    <Container>
      <NowPlayingSlider />
      {/* <LazyLoad height={200} offset={100}>
        <PopularSlider />
      </LazyLoad> */}
      <LazyLoad height={200} offset={100}>
        <UpcomingSlider />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <TopRatedSlider />
      </LazyLoad>
    </Container>
  );
}

const Container = styled.main`
  /* position: relative; */
`;
