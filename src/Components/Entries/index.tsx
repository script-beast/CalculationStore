// import React from "react";
import "./Styles.css";
import { ListType, EntriesProps } from "../../Interface";

const Index = (props: EntriesProps) => {
  const renderEntries = () => {
    return props.List.map((entry: ListType, index: number) => {
      return (
        <li className="table-row" key={index}>
          <div className="col col-1" data-label="Name">
            {entry.name}
          </div>
          <div className="col col-2" data-label="Calculation">
            {entry.calculation}
          </div>
          <div className="col col-3" data-label="Result">
            {entry.result}
          </div>
          <div className="col col-4" data-label="Action">
            <div className="d-flex align-items-center">
              <i
                onClick={() => props.deleteEntry(entry._id)}
                className="fa-solid fa-trash text-danger me-2"
              ></i>
              <i className="fa-solid fa-arrow-rotate-right ms-2 text-primary"></i>
            </div>
          </div>
        </li>
      );
    });
  };

  // console.log("Entries")
  return (
    <div className="entries">
      <div className="container">
        <div className="display-4 text-center text-white mb-3">
          Your Calculation
        </div>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Name</div>
            <div className="col col-2">Calculation</div>
            <div className="col col-3">Result</div>
            <div className="col col-4"></div>
          </li>
          {renderEntries()}
        </ul>
      </div>
    </div>
  );
};

export default Index;
