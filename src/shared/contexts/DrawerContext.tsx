import { createContext, useCallback, useContext, useState } from "react";
import { Props } from "../types";

interface IDrawerContextData {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () => {
  return useContext(DrawerContext);
};

export const AppDrawerProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = useCallback(() => {
    setIsOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
