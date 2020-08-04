import React, { useContext, useState, useEffect } from "react";

import { EditSystemContext } from "../../context/EditSystemContext";
import { ShowListContext } from "../../context/ShowListContext";
import CreateEdit from "../../components/CreateEdit";
import List from "../../components/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import {
  DivTitleDashboard,
  ButtonSignOut,
  LabelSignOut,
  TitleDashboard,
  RowTitleDashboard,
  ContainerDashboard,
} from "./styles";

const defaultEditSystem = 0;

const useShowList = () => useContext(ShowListContext);

const Dashboard = () => {
  const [idSystem, setIdSystem] = useState(defaultEditSystem);
  const history = useHistory();

  const { showList } = useShowList()!;

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === undefined || token === "" || token === null)
      history.push("/");

    const idSystemTemp = 0;
    setIdSystem(idSystemTemp);
  }, [history]);

  const handleSignOut = () => {
    window.localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <ContainerDashboard>
      <RowTitleDashboard>
        <DivTitleDashboard>
          <TitleDashboard>Sistema de Segurança Digital</TitleDashboard>
          <ButtonSignOut type="button">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <LabelSignOut>Sair</LabelSignOut>
          </ButtonSignOut>
        </DivTitleDashboard>
      </RowTitleDashboard>

      <EditSystemContext.Provider value={{ idSystem, setIdSystem }}>
        {showList ? <List /> : <CreateEdit />}
      </EditSystemContext.Provider>
    </ContainerDashboard>
  );
};

export default Dashboard;
