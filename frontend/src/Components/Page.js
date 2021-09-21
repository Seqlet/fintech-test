import Candlestick from "./Candlestick";
import Select from "react-select";
import axios from "axios";
import { useState, useEffect } from "react";
import "../Styles/Page.css";

const Page = () => {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const source = axios.CancelToken.source();
    const getPairs = async () => {
      await axios
        .get("https://api.binance.com/api/v3/exchangeInfo", {
          cancelToken: source.token,
        })
        .then((respond) => {
          const avaiableOptions = respond.data.symbols.filter(
            (sym) => sym.status === "TRADING"
          );
          const optionObjects = avaiableOptions.map((sym) => {
            return { value: sym.symbol, label: sym.symbol };
          });
          setOptions(optionObjects);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("Request Cancel");
          } else {
            console.log(err);
          }
        });
    };
    getPairs();

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div className="container">
      <div className="symbol-name">{symbol}</div>
      <Candlestick symbol={symbol} />
      <Select className="select" options={options} onChange={(e) => setSymbol(e.value)} />
    </div>
  );
};

export default Page;
