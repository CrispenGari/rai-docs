import React from "react";
import { Head } from "../Head/Head";
interface Props {
  children: React.ReactNode;
}
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Head />
      {children}
    </React.Fragment>
  );
};
