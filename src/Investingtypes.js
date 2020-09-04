import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
//import axios from "axios";

// function Investingtypes() {
//   let [apiResponse, setApiResponse] = React.useState("");

//   const callAPI = React.useCallback(() => {
//     axios({
//       method: "Get",
//       url: "http://localhost:4000/screener",
//     })
//       .then((apiResponse) => {
//         setApiResponse(apiResponse);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   React.useEffect(() => {
//     callAPI();
//   }, [callAPI]);

//   return (
//     <>
//       <p>{callAPI} </p>
//     </>
//   );
// }

class Investingtypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:4000/screener")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <>
        <Header />
        <p>{this.state.apiResponse} </p>
      </>
    );
  }
}

export default Investingtypes;
