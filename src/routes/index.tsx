import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages";
import { useEffect } from "react";
import { useAppDrawerContext } from "../shared/contexts";
import { BarChart, FileSearch, HomeIcon, UserPlus2 } from "lucide-react";

export const AppRoutes = () => {
  const { setDrawerOptions } = useAppDrawerContext();
  useEffect(() => {
    setDrawerOptions([
      {
        label: "Home - Summary",
        path: "/home",
        icon: <HomeIcon />,
      },
      {
        label: "Charts",
        path: "/charts",
        icon: <BarChart />,
      },
      {
        label: "Reports",
        path: "/reports",
        icon: <FileSearch />,
      },
      {
        label: "Register",
        path: "/register",
        icon: <UserPlus2 />,
      },
    ]);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
