import { Button } from "@mui/material";
import { useAppThemeContext } from "../../shared/contexts";

export default function Home() {
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <div>
        <Button onClick={toggleTheme}>Change Theme</Button>
      </div>
    </>
  );
}
