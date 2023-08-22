import { type FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="w-2/3 mx-auto">{children}</div>;
};

export default Container;
