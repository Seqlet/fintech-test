import Candlestick from "./Candlestick";
import Select from "react-select";
import axios from "axios";
import { useState, useEffect } from "react";
import "../Styles/Page.css";

const Page = () => {
  const [symbol, setSymbol] = useState("BTCUSDT"); //default symbols set as BTCUSDT pair
  const [options, setOptions] = useState([]);
  const url = "https://api.binance.com/api/v3/exchangeInfo"; //api from Binance to get all of the pairs in Binance database
  useEffect(() => {
    const source = axios.CancelToken.source();
    const getPairs = async () => {
      await axios
        .get(url, {
          cancelToken: source.token,
        })
        .then((respond) => {
          const avaiableOptions = respond.data.symbols.filter(
            (sym) => sym.status === "TRADING"
          ); // for filter available pairs that is still trading
          const optionObjects = avaiableOptions.map((sym) => {
            return { value: sym.symbol, label: sym.symbol };
          }); // create obtions for every symbols
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
      <Select
        className="select"
        options={options}
        onChange={(e) => setSymbol(e.value)}
      />
    </div>
  );
};

export default Page;
