import React from "react";

interface CalculatorProps {
  Operand1: string;
  Operand2: string;
  Operator: string;
  Result: number;
  handleOperand: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleOperator: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleClear: () => void;
  handleSign: () => void;
  handlePercent: () => void;
  handleDecimal: () => void;
  handleResult: () => void;
}

interface FormProps {
  Name: string;
  handleName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

interface ListType {
  _id: string;
  name: string;
  calculation: string;
  result: number;
  userid: string;
}

interface EntriesProps {
  List: ListType[];
  deleteEntry: (id: string) => void;
}

interface LoginSignupProps {
  username: string;
  password: string;
  handleName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleSignup: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export type { CalculatorProps, FormProps, ListType, EntriesProps, LoginSignupProps };