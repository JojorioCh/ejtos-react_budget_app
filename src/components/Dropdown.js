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

  return (
    <div className="mt-3">
      <label htmlFor="currencySelect" className="form-label">
        Currency:
      </label>
      <select
        id="currencySelect"
        value={currency}
        onChange={handleCurrencyChange}
        className="form-select"
        style={dropdownStyle}
      >
        <option
          value="USD"
          style={hoveredOption === "USD" ? optionHoverStyle : optionStyle}
          onMouseEnter={() => setHoveredOption("USD")}
          onMouseLeave={() => setHoveredOption(null)}
        >
          $ Dollar
        </option>
        <option
          value="GBP"
          style={hoveredOption === "GBP" ? optionHoverStyle : optionStyle}
          onMouseEnter={() => setHoveredOption("GBP")}
          onMouseLeave={() => setHoveredOption(null)}
        >
          £ Pound
        </option>
        <option
          value="EUR"
          style={hoveredOption === "EUR" ? optionHoverStyle : optionStyle}
          onMouseEnter={() => setHoveredOption("EUR")}
          onMouseLeave={() => setHoveredOption(null)}
        >
          € Euro
        </option>
        <option
          value="INR"
          style={hoveredOption === "INR" ? optionHoverStyle : optionStyle}
          onMouseEnter={() => setHoveredOption("INR")}
          onMouseLeave={() => setHoveredOption(null)}
        >
          ₹ Rupee
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
