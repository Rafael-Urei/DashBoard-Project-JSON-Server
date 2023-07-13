import { ReactNode } from "react";

export type Props = {
  children?: ReactNode;
};

export type LinkRouteProps = {
  to: string;
  onClick: (() => void) | undefined;
  label: string;
};
