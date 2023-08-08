import { createContext, useContext, useState } from "react";
import { Props } from "../types";
import dayjs, { Dayjs } from "dayjs";

interface IDateData {
  date: Dayjs | null;
  setDate: (newDate: Dayjs | null) => void;
}

const DateContext = createContext({} as IDateData);

export const useAppDateContext = () => {
  return useContext(DateContext);
};

export const AppDateProvider = ({ children }: Props) => {
  const actualDate = new Date();
  const todayDate = `${actualDate.getFullYear().toString()}-${
    actualDate.getMonth() + 1
  }-${actualDate.getDate().toString()}`;
  const [date, setDate] = useState<Dayjs | null>(dayjs(todayDate));

  return (
    <DateContext.Provider value={{ setDate, date }}>
      {children}
    </DateContext.Provider>
  );
};
