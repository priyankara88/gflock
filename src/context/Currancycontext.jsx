import { createContext, useContext, useEffect, useState } from "react";
export const CurrancyContext = createContext({});

const CurrancyProvider = ({ children }) => {
  const [CurrancyRate, setCurrancyRate] = useState({});
  const [slectedCurrancy, setSlectedCurrancy] = useState("LKR");

  useEffect(() => {
    const apiKey = "5ffabfc87b0e40f8813597552414e1f9";
    const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const fetchCurrency = {
          LKR: data.rates.LKR,
          USD: data.rates.USD,
          INR: data.rates.INR,
          EUR: data.rates.EUR,
          GBP: data.rates.GBP,
          SGD: data.rates.SGD,
          NZD: data.rates.NZD,
          AUD: data.rates.AUD,
          AED: data.rates.AED,
          MVR: data.rates.MVR,
          QAR: data.rates.QAR,
          MYR: data.rates.MYR,
        };

        const defaultCurrancy = {
          LKR: data.rates.LKR,
        };
        setCurrancyRate(fetchCurrency);
        // setSlectedCurrancy(defaultCurrancy);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <CurrancyContext.Provider
      value={{
        CurrancyRate,
        setCurrancyRate,
        slectedCurrancy,
        setSlectedCurrancy,
      }}
    >
      {children}
    </CurrancyContext.Provider>
  );
};

export default CurrancyProvider;

export const useCurrence = () => {
  const { CurrancyRate, setCurrancyRate, slectedCurrancy, setSlectedCurrancy } =
    useContext(CurrancyContext);
  return [CurrancyRate, setCurrancyRate, slectedCurrancy, setSlectedCurrancy];
};
