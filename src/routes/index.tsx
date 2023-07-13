import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import { useEffect } from "react";
import { useAppDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { setDrawerOptions } = useAppDrawerContext();
  useEffect(() => {
    setDrawerOptions([
      {
        label: "Home - Summary",
        path: "/home",
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
