import styled from "styled-components";

import NowPlayingSlider from "./NowPlayingSlider";
import PopularSlider from "./PopularSlider";
import UpcomingSlider from "./UpcomingSlider";
import TopRatedSlider from "./TopRatedSlider";

export default function HomePage() {
  return (
    <Container>
      <NowPlayingSlider />
      <PopularSlider />
      <UpcomingSlider />
      <TopRatedSlider />
    </Container>
  );
}

const Container = styled.main`
  /* position: relative; */
`;
