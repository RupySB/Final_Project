import React from "react";
import Plot from "react-plotly.js";
import Header from "./Header";
import styled from "styled-components";

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "IDDIHCR8K3JQTHYZ";
    let StockSymbol = "AMZN";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (let key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["4. close"]
          );
        }

        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Title>Stock Market Charts</Title>
        <Form>
          <Label>
            {" "}
            Enter new Stock ticker:
            <input id="text" type="text" onclick="setValue()" />
          </Label>
        </Form>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "green" },
            },
          ]}
          layout={{ width: 920, height: 540, title: "100 Day Chart" }}
        />
      </div>
    );
  }
}

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: midnightblue;
  padding: 20px;
`;

const Form = styled.form`
  text-align: center;
`;
const Label = styled.label``;
export default Stock;
