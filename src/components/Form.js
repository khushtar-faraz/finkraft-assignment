import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStatevalue } from "../context/store";
import "./Form.css";
const Form = () => {
  const navigate = useNavigate();
  const { setApiUrl, setColumnDef } = useStatevalue();
  const [selectedValue, setSelectedValue] = useState(null);

  console.log(selectedValue);

  const handleSelectedDataProps = (apiUrl, columnDef) => {
    setApiUrl(apiUrl);
    setColumnDef(columnDef);
  };

  return (
    <div className="form--wrapper">
      <form className="form" action="">
        <select name="" id="">
          <option
            // onChange={() =>
            //   handleSelectedDataProps(
            //     "https://www.ag-grid.com/example-assets/row-data.json",
            //     [
            //       { field: "make", filter: true },
            //       { field: "model", filter: true },
            //       { field: "price", filter: true },
            //     ]
            //   )
            // }
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            Cars Info
          </option>
          <option
            // onChange={() =>
            //   handleSelectedDataProps(
            //     "https://www.ag-grid.com/example-assets/olympic-winners.json",
            //     [
            //       {
            //         field: "athlete",
            //       },
            //       { field: "age" },
            //       { field: "country" },
            //       { field: "year" },
            //       { field: "date" },
            //       { field: "sport" },
            //       { field: "gold" },
            //       { field: "silver" },
            //       { field: "bronze" },
            //       { field: "total" },
            //     ]
            //   )
            // }
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            Olympic Winners Info
          </option>
        </select>
        <button onClick={() => navigate("/grid")} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
