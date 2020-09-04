import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

// function ExpensePlanner() {
//     const [monthly_income, setMonthly_income] = useState(""),
//     const [food, setFood] = useState(""),
//     const [transportation, setTransportation] = useState(""),
//     const [utilities, setUtilities] = useState(""),
//     const [entertainment, setEntertainment] = useState(""),
//     const [rent, setRent] = useState(""),
//     const [individuals, setIndividuals] = useState(""),
//     const [totalAmount, setTotalAmount] = useState(""),
//     const [totalExpenses, setTotalExpenses] = useState(""),

//   const handleMonthly_income = e => {
//     setMonthly_income(e.target.value)
//   };

//   const handleFood = e => {
//     setFood(e.target.value)
//   };

//   const handleTransportation = e => {
//       setTransportation(e.target.value)
//   };

//   const handleUtilities = e => {
//     setUtilities(e.target.value)
//   };

//   const handleEntertainment = e => {
//     setEntertainment(e.target.value)
//   };

//   const handleRent = e => {
//     setRent(e.target.value)
//   };

//   const handleIndividuals = e => {
//     setIndividuals(e.target.value)
//   };

//   const handleTotalExpensePerPerson = e => {
//     setTotalExpensePerPerson(e.target.value)
//   };

//   const handleExpensePerPerson = e => {
//     setExpensePerPerson(e.target.value)
//   };

//   genExpenses = e => {
//     e.preventDefault();
//     let expense = parseFloat(
//       monthly_income * food +
//         monthly_income * rent +
//         monthly_income * transportation +
//         monthly_income * utilities +
//         monthly_income * entertainment
//     ).toFixed(2);
//     let totalExpensePerPerson = parseFloat(
//       expense / individuals
//     ).toFixed(2);

//       setTotalExpensePerPerson(expense),
//       setExpensePerPerson(totalExpensePerPerson),

//   };
//     return (
//       <>
//         <Wrapper>
//           <Title>Monthly Budget Helper</Title>

//           <form onSubmit={this.genExpenses}>
//             <label>
//               Net Monthly Income:
//               <input
//                 type="text"
//                 value={this.state.monthly_income}
//                 onChange={this.handleMonthly_income}
//               ></input>
//             </label>
//             <label>
//               Food:
//               <input
//                 type="text"
//                 value={this.state.food}
//                 onChange={this.handleFood}
//               ></input>
//             </label>
//             <label>
//               Transportation:
//               <input
//                 type="text"
//                 value={this.state.transportation}
//                 onChange={this.handleTransportation}
//               ></input>
//             </label>
//             <label>
//               Utilities:
//               <input
//                 type="text"
//                 value={this.state.utilities}
//                 onChange={this.handleUtilities}
//               ></input>
//             </label>
//             <label>
//               Entertainment:
//               <input
//                 type="text"
//                 value={this.state.entertainment}
//                 onChange={this.handleEntertainment}
//               ></input>
//             </label>
//             <label>
//               Rent:
//               <input
//                 type="text"
//                 value={this.state.rent}
//                 onChange={this.handleRent}
//               ></input>
//             </label>
//             <label>
//               Individuals:
//               <input
//                 type="text"
//                 value={this.state.individuals}
//                 onChange={this.handleIndividuals}
//               ></input>
//             </label>
//             <input type="submit" />
//           </form>
//           <p>Expense: ${this.state.totalExpensePerPerson} </p>
//           <p>Expense per Individual: ${this.state.expensePerPerson}</p>
//         </Wrapper>
//       </>
//     );
//   }

class ExpensePlanner extends React.Component {
  state = {
    monthly_income: "",
    food: "",
    transportation: "",
    utilities: "",
    entertainment: "",
    rent: "",
    individuals: "",
    totalAmount: "",
    totalExpenses: "",
  };

  handleMonthly_income = (event) => {
    this.setState({
      monthly_income: event.target.value,
    });
  };

  handleFood = (event) => {
    this.setState({
      food: event.target.value,
    });
  };

  handleTransportation = (event) => {
    this.setState({
      transportation: event.target.value,
    });
  };

  handleUtilities = (event) => {
    this.setState({
      utilities: event.target.value,
    });
  };

  handleEntertainment = (event) => {
    this.setState({
      entertainment: event.target.value,
    });
  };

  handleRent = (event) => {
    this.setState({
      rent: event.target.value,
    });
  };

  handleIndividuals = (event) => {
    this.setState({
      individuals: event.target.value,
    });
  };

  genExpenses = (event) => {
    event.preventDefault();
    let expense = parseFloat(
      this.state.monthly_income * this.state.food +
        this.state.monthly_income * this.state.rent +
        this.state.monthly_income * this.state.transportation +
        this.state.monthly_income * this.state.utilities +
        this.state.monthly_income * this.state.entertainment
    ).toFixed(2);
    let totalExpensePerPerson = parseFloat(
      expense / this.state.individuals
    ).toFixed(2);
    this.setState({
      totalExpensePerPerson: expense,
      expensePerPerson: totalExpensePerPerson,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <Title>Monthly Budget Helper</Title>

          <form onSubmit={this.genExpenses}>
            <label>
              Net Monthly Income:
              <input
                type="text"
                value={this.state.monthly_income}
                onChange={this.handleMonthly_income}
              ></input>
            </label>
            <label>
              Food:
              <input
                type="text"
                value={this.state.food}
                onChange={this.handleFood}
              ></input>
            </label>
            <label>
              Transportation:
              <input
                type="text"
                value={this.state.transportation}
                onChange={this.handleTransportation}
              ></input>
            </label>
            <label>
              Utilities:
              <input
                type="text"
                value={this.state.utilities}
                onChange={this.handleUtilities}
              ></input>
            </label>
            <label>
              Entertainment:
              <input
                type="text"
                value={this.state.entertainment}
                onChange={this.handleEntertainment}
              ></input>
            </label>
            <label>
              Rent:
              <input
                type="text"
                value={this.state.rent}
                onChange={this.handleRent}
              ></input>
            </label>
            <label>
              Individuals:
              <input
                type="text"
                value={this.state.individuals}
                onChange={this.handleIndividuals}
              ></input>
            </label>
            <input type="submit" />
          </form>
          <P>Expense: ${this.state.totalExpensePerPerson} </P>
          <P>Expense per Individual: ${this.state.expensePerPerson}</P>
        </Wrapper>
        <Footer />
      </>
    );
  }
}

const Title = styled.h1`
  font-size: 25px;
  text-align: center;
`;
const P = styled.p`
  font-size: 15px;
  text-align: center;
  justify-content: center;
  color: midnightblue;
  border: lightblue;
  border-radius: lightblue 1px;
  padding: 5px;
`;

const Wrapper = styled.div``;

export default ExpensePlanner;
