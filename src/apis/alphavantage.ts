import axios from "axios";

export async function getStockPrice(
  symbol: string,
  startDate: string,
  endDate: string
) {
  const API_KEY = "AH343FJ7TARCEOX3"; // Alpha Vantage에서 발급받은 API 키를 입력하세요.
  const BASE_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;

  const response = await axios.get(BASE_URL);
  const data = response.data;

  const timeSeries = data["Time Series (Daily)"];
  const dates = Object.keys(timeSeries).sort();

  const prices: Array<[string, string]> = [];
  for (const date of dates) {
    if (startDate <= date && date <= endDate) {
      prices.push([date, timeSeries[date]["4. close"]]);
    }
  }

  return prices;
}

// 알파벳(구글)의 2023년 7월 1일부터 7월 10일까지의 주식 가격을 얻습니다.
getStockPrice("GOOGL", "2023-07-01", "2023-07-10").then((prices) => {
  for (const price of prices) {
    console.log(price);
  }
});

const companies = {
  Paramount: ["Nasdaq", "PARA"],
  "Walt Disney Pictures": ["NYSE", "DIS"],
  "Warner Bros. Pictures": ["Nasdaq", "WBD"],
};
