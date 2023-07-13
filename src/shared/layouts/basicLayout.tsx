import { Box } from "@mui/material";
import { ReactNode } from "react";

interface IBasicLayoutProps {
  children: ReactNode;
  titulo: string;
}

export const BasicLayout = ({ children, titulo }: IBasicLayoutProps) => {
  return (
    <>
      <Box>
        {titulo}
        {children}
      </Box>
    </>
  );
};
