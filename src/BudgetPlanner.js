import React, { useState, useEffect } from "react";
import BudgetForm from "./components/BudgetForm";
import BudgetList from "./components/BudgetList";
import Alert from "./components/Alert";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
function BudgetPlanner() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  useEffect(() => {
    console.log("called");

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  //functions to add stuff is here!!
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  // add amount
  const handleAmount = (e) => {
    let amount = e.target.value;
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };

  // handle alert that pops up
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 10000);
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: 1, charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      // set charge back to empty string - make it nothing
      setCharge("");
      // set amount back to zero - amounts reset
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `Reason for the expense cannot be left empty, in addition the amount must be greater than zero!`,
      });
    }
  };
  // handle delete to delete expenses that don't exist
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  //clear all items in the expense area
  const clearItems = () => {
    setExpenses([]);
  };
  // handle to edit the amounts is here edit
  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      <Header />
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Title>Expense List Tracker</Title>
      <Main>
        <BudgetForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <BudgetList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </Main>
      <Title>
        Total Amount of Money Spent :
        <span>
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </Title>
      <Footer />
    </>
  );
}

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: midnightblue;
  padding: 20px;
`;

const Main = styled.div`
  text-align: center;
  font-size: 30px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: midnightblue;
  padding: 20px;
  margin-right: 5px;
`;

export default BudgetPlanner;
