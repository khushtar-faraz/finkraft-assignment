import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStatevalue } from "../context/store";
import "./Form.css";
const Form = () => {
  const navigate = useNavigate();
  const { setApiUrl, setColumnDef } = useStatevalue();
  const [selectedValue, setSelectedValue] = useState("Please select an option");

  const handleSelectedDataProps = (apiUrl, columnDef) => {
    setApiUrl(apiUrl);
    setColumnDef(columnDef);
  };

  useEffect(() => {
    if (selectedValue === "Cars Info") {
      handleSelectedDataProps(
        "https://www.ag-grid.com/example-assets/row-data.json",
        [
          { field: "make", filter: true },
          { field: "model", filter: true },
          { field: "price", filter: true },
        ]
      );
    } else if (selectedValue === "Olympic Winners Info") {
      handleSelectedDataProps(
        "https://www.ag-grid.com/example-assets/olympic-winners.json",
        [
          {
            field: "athlete",
          },
          { field: "age", filter: true },
          { field: "country", filter: true },
          { field: "year", filter: true },
          { field: "date", filter: true },
          { field: "sport", filter: true },
          { field: "gold", filter: true },
          { field: "silver", filter: true },
          { field: "bronze", filter: true },
          { field: "total", filter: true },
        ]
      );
    }
  }, [selectedValue]);

  return (
    <div className="form--wrapper">
      <div className="form" action="">
        <select
          name=""
          id=""
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option>Please select an option</option>
          <option>Cars Info</option>
          <option>Olympic Winners Info</option>
        </select>
        <button
          disabled={selectedValue === "Please select an option"}
          onClick={() => navigate("/grid")}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
