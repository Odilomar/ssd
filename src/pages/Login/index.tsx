import React, { useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../service/api";

import {
  Title,
  Form,
  RowForm,
  Input,
  Select,
  Button,
  DivIcon,
  SpanIcon,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserSecret,
  faUserNinja,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

interface User {
  name: string;
  role: string;
}

interface SelectOption {
  value: string;
  label: string;
}

const Login = () => {
  const [user, setUser] = useState<User>({
    name: "",
    role: "admin",
  });

  const options: SelectOption[] = [
    { value: "admin", label: "Administrador" },
    { value: "tecnico", label: "Técnico" },
    { value: "super", label: "Super Usuário" },
  ];

  const history = useHistory();

  const handleInputChange = (inputName: ChangeEvent<HTMLInputElement>) => {
    const { value } = inputName.target;

    updateUser(value, user.role);
  };

  const handleSelectChange = (inputSelect: ChangeEvent<HTMLSelectElement>) => {
    const { value } = inputSelect.target;

    updateUser(user.name, value);
  };

  const updateUser = (name: string, role: string) => {
    setUser({ name, role });
  };

  const signIn = async () => {
    if (user.name === "" || user.role === "") {
      alert("Dados inválidos. Corrija os dados e Tente novamente!");
      return;
    }

    const data = { Nome: user.name, Role: user.role };

    const loginResponse = await api.post("/v1/account/login", data);

    if (loginResponse.status === 404) {
      alert("Usuário não encontrado. Verifique seus dados e tente novamente!");
      return;
    }

    if (loginResponse.status === 500) {
      alert("Problemas com o servidor. Tente novamente mais tarde!");
      return;
    }

    const { token } = loginResponse.data;

    window.localStorage.setItem("token", token);

    history.push("/dashboard");
  };

  return (
    <>
      <RowForm>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            signIn();
          }}
        >
          <Title>Sistema de Segurança Digital</Title>
          <DivIcon>
            <SpanIcon>
              <FontAwesomeIcon icon={faUser} />
            </SpanIcon>
            <Input placeholder="Usuário" onChange={handleInputChange} />
          </DivIcon>
          <DivIcon>
            <SpanIcon>
              <FontAwesomeIcon
                icon={
                  user.role === "admin"
                    ? faUserSecret
                    : user.role === "tecnico"
                    ? faUserNinja
                    : faUserTie
                }
              />
            </SpanIcon>
            <Select onChange={handleSelectChange}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </DivIcon>
          <Button>ACESSAR</Button>
        </Form>
      </RowForm>
    </>
  );
};

export default Login;
