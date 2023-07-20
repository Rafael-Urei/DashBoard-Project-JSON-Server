import { createContext, useCallback, useContext, useState } from "react";
import { Props } from "../types";
import dayjs, { Dayjs } from "dayjs";

interface IDateData {
  date: Dayjs | null;
  getSelectedDate: (newDate: Dayjs | null) => void;
}

const DateContext = createContext({} as IDateData);

export const useAppDateContext = () => {
  return useContext(DateContext);
};

export const AppDateProvider = ({ children }: Props) => {
  const [date, setDate] = useState<Dayjs | null>(dayjs("2023-07-20"));

  const getSelectedDate = useCallback((newDate: Dayjs | null) => {
    console.log(newDate);
    setDate(dayjs(newDate));
  }, []);

  return (
    <DateContext.Provider value={{ getSelectedDate, date }}>
      {children}
    </DateContext.Provider>
  );
};
