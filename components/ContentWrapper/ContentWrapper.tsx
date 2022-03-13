import { ReactNode } from "react";
import { Wrapper } from "./ContentWrapper.styles";

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

const ContentWrapper = ({ children, className }: ContentWrapperProps) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default ContentWrapper;
