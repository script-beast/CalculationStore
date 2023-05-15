// import React from "react";
import "./Styles.css";
import { FormProps } from "../../Interface";

const Index = (props: FormProps) => {
  return (
    <div className="formcomp mb-5">
      <section className="wrapper d-flex justify-content-center">
        <div className="content">
          <footer>
            <input
              type="text"
              name="Name"
              placeholder="Enter Name"
              value={props.Name}
              onChange={props.handleName}
            />
            <button onClick={props.handleSubmit}>Save</button>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Index;
