import { DateSelector } from "../../shared/components";
import { BaseLayout } from "../../shared/layouts";

export const Home = () => {
  return (
    <>
      <BaseLayout title="Summary" dateSelector={<DateSelector />}>
        Home
      </BaseLayout>
    </>
  );
};
