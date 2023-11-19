import styled from "styled-components";
import { motion } from "framer-motion";

interface IProps {
  title: string;
}

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.375,
      type: "tween",
      duration: 0.25,
    },
  },
};

export default function ThumbnailInfo({ title }: IProps) {
  return (
    <Container variants={infoVariants}>
      <h3>{title}</h3>
    </Container>
  );
}
const Container = styled(motion.div)`
  padding: 20px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
