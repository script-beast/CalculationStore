import React from "react";
import { useNavigate } from "react-router-dom";

import { ListType } from "../Interface";
import BaseURL from "../BaseURL";

import Calculator from "../Components/Calculator";
import Form from "../Components/Form";
import Entries from "../Components/Entries";

const MainPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("name")) {
      navigate("/login");
    }
  }, []);

  const [Operand1, setOperand1] = React.useState<string>("");
  const [Operand2, setOperand2] = React.useState<string>("");
  const [Operator, setOperator] = React.useState<string>("");
  const [Result, setResult] = React.useState<number>(0);
  const [IsResult, setIsResult] = React.useState<boolean>(false);

  const handleOperand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (IsResult) return;
    const value = e.currentTarget.innerText;
    if (Operator === "") {
      setOperand1(Operand1 + value);
    } else {
      setOperand2(Operand2 + value);
    }
  };

  const handleOperator = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (IsResult) return;
    if (Operand1 === "") return;
    if (Operand2 !== "") handleResult();
    else {
      const value = e.currentTarget.innerText;
      setOperator(value);
    }
  };

  const handleClear = () => {
    setOperand1("");
    setOperand2("");
    setOperator("");
    setResult(0);
    setIsResult(false);
  };

  const handleSign = () => {
    if (IsResult) return;
    if (Operator === "") {
      setOperand1((Number(Operand1) * -1).toString());
    } else {
      setOperand2((Number(Operand2) * -1).toString());
    }
  };

  const handlePercent = () => {
    if (IsResult) return;
    if (Operator === "") {
      setOperand1((Number(Operand1) / 100).toString());
    } else {
      setOperand2((Number(Operand2) / 100).toString());
    }
  };

  const handleDecimal = () => {
    if (IsResult) return;
    if (Operator === "") {
      if (!Operand1.includes(".")) {
        setOperand1(Operand1 + ".");
      }
    } else {
      if (!Operand2.includes(".")) {
        setOperand2(Operand2 + ".");
      }
    }
  };

  const handleResult = () => {
    if (IsResult) return;
    if (Operand1 === "") return;
    if (Operand2 === "") return;

    switch (Operator) {
      case "+":
        setResult(Number(Operand1) + Number(Operand2));
        break;
      case "-":
        setResult(Number(Operand1) - Number(Operand2));
        break;
      case "x":
        setResult(Number(Operand1) * Number(Operand2));
        break;
      case "/":
        if (Number(Operand2) === 0) {
          setResult(0);
          break;
        }
        setResult(Number(Operand1) / Number(Operand2));
        break;
      default:
        setResult(Number(Operand1));
    }
    setIsResult(true);
  };

  // For Name

  const [Name, setName] = React.useState<string>("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (Name === "") return;
    if (Operand1 === "") return;
    if (Operand2 === "") return;
    if (Operator === "") return;
    if (Result === 0) return;

    const data = {
      name: Name,
      result: Result,
      calculation: `${Operand1} ${Operator} ${Operand2}`,
      userid: localStorage.getItem("id"),
    };
    console.log(data);

    fetch(BaseURL + "/caldata/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setList([...List, data]);
      });

    setName("");
    setOperand1("");
    setOperand2("");
    setOperator("");
    setResult(0);
    setIsResult(false);
  };

  // For Entries

  const [List, setList] = React.useState<ListType[]>([]);

  React.useEffect(() => {
    const id = localStorage.getItem("id");

    fetch(BaseURL + `/caldata/get/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  const deleteEntry = (id: string) => {
    fetch(BaseURL + `/caldata/delete/${id}`, {
      method: "DELETE",
    }).then(() => {
      const newList = List.filter((item: ListType) => item._id !== id);
      setList(newList);
    });
  };

  // For Navbar

  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    navigate("/login");
  };

  return (
    <>
      <div className="bg-dark py-2">
        <div className="container d-flex justify-content-between">
          <span className="text-white d-flex justify-content-between align-items-center">
            {name}
          </span>
          <button className="btn btn-danger ms-3" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-5">
          <Calculator
            Operand1={Operand1}
            Operand2={Operand2}
            Operator={Operator}
            Result={Result}
            handleOperand={handleOperand}
            handleOperator={handleOperator}
            handleClear={handleClear}
            handleSign={handleSign}
            handlePercent={handlePercent}
            handleDecimal={handleDecimal}
            handleResult={handleResult}
          />
          <Form
            Name={Name}
            handleName={handleName}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="col-12 col-lg-7">
          <Entries List={List} deleteEntry={deleteEntry} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
