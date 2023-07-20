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
  const [date, setDate] = useState<Dayjs | null>(dayjs("2023-07-20"));

  return (
    <DateContext.Provider value={{ setDate, date }}>
      {children}
    </DateContext.Provider>
  );
};
