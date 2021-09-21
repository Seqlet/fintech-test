import Chart from "react-google-charts";
import axios from "axios";
import { useState, useEffect } from "react";
import { format } from "date-fns";

const Candlestick = ({ symbol }) => {
  const [bars, setBars] = useState([]);
  const url = "http://127.0.0.1:8000"; //api link from FastApi serve port change to the port your fast api is running on
  useEffect(() => {
    const source = axios.CancelToken.source();
    const getData = async () => {
      await axios
        .get(`${url}/get-candle/${symbol}`, {
          cancelToken: source.token,
        })
        .then((respond) => {
          //for formating the data for the react-google-charts-library
          const dataFormat = respond.data.data.map((stick) => {
            return [
              format(new Date(stick.timestamp), "yyyy-MM-dd hh:mm:ss aa"),
              parseFloat(stick.low),
              parseFloat(stick.open),
              parseFloat(stick.close),
              parseFloat(stick.high),
            ];
          });
          //for the first row of react-google-charts
          dataFormat.unshift(["day", "a", "b", "c", "d"]);
          setBars(dataFormat);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("Request Cancel");
          } else {
            console.log(err);
          }
        });
    };
    getData();

    return () => {
      source.cancel();
    };
  }, [symbol]);

  return (
    <div>
      <Chart
        width={"100%"}
        height={350}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={bars}
        options={{
          legend: "none",
          bar: { groupWidth: "100%" }, // Remove space between bars.
          candlestick: {
            fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
            risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
          },
        }}
      />
    </div>
  );
};

export default Candlestick;
