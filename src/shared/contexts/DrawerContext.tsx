import { createContext, useCallback, useContext, useState } from "react";
import { Props } from "../types";

interface IDrawerContextData {
  isOpen: boolean;
  drawerOptions: IDrawerOptions[];
  toggleDrawer: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
}

interface IDrawerOptions {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () => {
  return useContext(DrawerContext);
};

export const AppDrawerProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

  const toggleDrawer = useCallback(() => {
    setIsOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOptions[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        drawerOptions,
        setDrawerOptions: handleSetDrawerOptions,
        isOpen,
        toggleDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
