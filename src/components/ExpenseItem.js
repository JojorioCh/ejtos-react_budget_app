import React, { useContext, useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);
  const [currencySymbol, setCurrencySymbol] = useState(currency);

  useEffect(() => {
    setCurrencySymbol(currency);
  }, [currency]);
  if (!props.name) {
    // If props.name is falsy (null, undefined, empty string, etc.), return null
    return null;
  }
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10, // Decrease by 10
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const buttonStyle = {
    borderRadius: "50%", // Makes the button circular
    width: "20px",
    height: "20px",
    backgroundColor: "green", // Green circle for the "+" button
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "20px", // Adjust font size
    display: "flex",
    alignItems: "center", // Center text vertically
    justifyContent: "center",
    marginTop: "-2px", // Adjust vertically as needed
    marginLeft: "-2px", // Adjust horizontally as needed
  };

  const deleteButtonStyle = {
    borderRadius: "50%", // Makes the button circular
    width: "20px",
    height: "20px",
    backgroundColor: "red", // Red circle for the "-" button
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "20px", // Adjust font size
    display: "flex",
    alignItems: "center", // Center text vertically
    justifyContent: "center",
    marginTop: "-2px", // Adjust vertically as needed
    marginLeft: "-2px", // Adjust horizontally as needed
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currencySymbol}
        {props.cost}
      </td>
      <td>
        <button
          style={buttonStyle}
          onClick={() => increaseAllocation(props.name)}
        >
          +
        </button>
      </td>
      <td>
        <button
          style={deleteButtonStyle}
          onClick={() => decreaseAllocation(props.name)}
        >
          -
        </button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
