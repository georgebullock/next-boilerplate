import { ReactNode } from "react";
import { Container } from "./Container.styles";

interface ContainerProps {
  children: ReactNode;
}

const ContentContainer = ({ children }: ContainerProps) => (
  <Container>{children}</Container>
);

export default ContentContainer;
