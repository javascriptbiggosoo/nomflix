import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: pointer;
`;

interface OverlayProps {
  children: ReactNode;
  onClickOverlay: (ev: React.MouseEvent<HTMLDivElement>) => void;
}
export const Overlay = ({ children, onClickOverlay }: OverlayProps) => {
  return createPortal(
    <Container
      onClick={onClickOverlay}
      transition={{ type: "just" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </Container>,
    document.getElementById("overlay")!
  );
};
