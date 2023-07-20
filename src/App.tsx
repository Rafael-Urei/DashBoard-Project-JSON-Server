import { AppRoutes } from "./routes";
import NavBar from "./shared/components/NavBar/NavBar";
import { ToggleComponent } from "./shared/components/ToggleMode/ToggleMode";
import { AppDrawerProvider } from "./shared/contexts";
import { AppDateProvider } from "./shared/contexts/DateContext";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <AppDateProvider>
      <AppThemeProvider>
        <AppDrawerProvider>
          <BrowserRouter>
            <NavBar>
              <ToggleComponent />
              <AppRoutes />
            </NavBar>
          </BrowserRouter>
        </AppDrawerProvider>
      </AppThemeProvider>
    </AppDateProvider>
  );
};
