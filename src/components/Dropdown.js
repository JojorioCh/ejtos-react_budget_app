import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Dropdown = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [hoveredOption, setHoveredOption] = useState(null); // State to track hovered option

  const handleCurrencyChange = (event) => {
    dispatch({ type: "CHG_CURRENCY", payload: event.target.value });
  };

  // Define styles
  const dropdownStyle = {
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
  };

  const optionStyle = {
    backgroundColor: "green",
    color: "white",
  };

  const optionHoverStyle = {
    backgroundColor: "white",
    color: "green",
  };

  // List of available currencies
  const currencies = ["$", "£", "€", "₹"];

  return (
    <div className="alert alert-secondary">
      <select
        id="currencySelect"
        value={currency}
        onChange={handleCurrencyChange}
        className="form-select"
        style={dropdownStyle}
      >
        <option value={currency}>{`Currency (${currency})`}</option>
        {currencies.map((c) => (
          <option
            key={c}
            value={c}
            style={hoveredOption === c ? optionHoverStyle : optionStyle}
            onMouseEnter={() => setHoveredOption(c)}
            onMouseLeave={() => setHoveredOption(null)}
          >
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
