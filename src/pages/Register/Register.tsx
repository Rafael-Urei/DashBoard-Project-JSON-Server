import { Box } from "@mui/material";
import { BaseLayout } from "../../shared/layouts";
import { DateSelector } from "../../shared/components";

export const Register = () => {
  return (
    <>
      <BaseLayout title="Register" dateSelector={<DateSelector />}>
        <Box>Register</Box>
      </BaseLayout>
    </>
  );
};
