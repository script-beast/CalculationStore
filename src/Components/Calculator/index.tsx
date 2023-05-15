// import React from "react";
import "./Styles.css";
import { CalculatorProps } from "../../Interface";

const Index = (props: CalculatorProps) => {
  return (
    <div className="calcucom">
      <div className="container">
        <div className="display-4 text-center text-white mb-3">Calculator</div>
        <div className="calc-body">
          <div className="calc-screen">
            <div className="calc-operation">
              {props.Operand1} {props.Operator} {props.Operand2}
            </div>
            <div className="calc-typed">{props.Result}</div>
          </div>
          <div className="calc-button-row">
            <div className="button c" onClick={props.handleClear}>
              C
            </div>
            <div className="button l" onClick={props.handleSign}>
              +/-
            </div>
            <div className="button l" onClick={props.handlePercent}>
              %
            </div>
            <div className="button l" onClick={props.handleOperator}>
              /
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={props.handleOperand}>
              7
            </div>
            <div className="button" onClick={props.handleOperand}>
              8
            </div>
            <div className="button" onClick={props.handleOperand}>
              9
            </div>
            <div className="button l" onClick={props.handleOperator}>
              x
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={props.handleOperand}>
              4
            </div>
            <div className="button" onClick={props.handleOperand}>
              5
            </div>
            <div className="button" onClick={props.handleOperand}>
              6
            </div>
            <div className="button l" onClick={props.handleOperator}>
              -
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={props.handleOperand}>
              1
            </div>
            <div className="button" onClick={props.handleOperand}>
              2
            </div>
            <div className="button" onClick={props.handleOperand}>
              3
            </div>
            <div className="button l" onClick={props.handleOperator}>
              +
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={props.handleDecimal}>
              .
            </div>
            <div className="button" onClick={props.handleOperand}>
              0
            </div>
            <div className="button" onClick={props.handleOperand}>
              00
            </div>
            <div className="button l" onClick={props.handleResult}>
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
