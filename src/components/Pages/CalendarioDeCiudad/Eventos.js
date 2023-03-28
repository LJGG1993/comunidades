import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { GetEvents } from "../../../api/Events";
import { useLocation } from "react-router-dom";
import {
  Container,
  ContainerEvents,
  Row,
  Card,
  CardHeader,
  CardBody,
  ButtonContainer,
  TitleEvents,
  ContentEvents,
  ButtonEvents,
} from "./Eventos.css.js";
import Modal from "../../Pages/CalendarioDeCiudad/Modal/Modal";
import { Loader } from "../../Loader/Loader";
import {
  getLocalStorageItem
} from "../../../helpers/localStorage.helpers";

/**
 * @brief Muestra el estado de los Eventos
 * @returns 
 */
function Eventos() {
  const navigate = useNavigate();
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [data, setData] = useState([]);
  const [eventoActual, setEventoActual] = useState(0);
  const [load, setLoad] = useState(false);
  const [acces, setAcces] = useState(false);
  const { state } = useLocation(false);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: "America/Mexico_City",
  };

  useEffect(() => {
    setAcces(false);
    if(getLocalStorageItem("role")=== "Administrador" || getLocalStorageItem("role")=== "Mentor"){
      setAcces(true);
      console.log("hola");
    }
    console.log(acces);
    getEvents();
  }, []);

  const getEvents = async () => {
    setLoad(true);

    try {
      const {
        data: { data },
      } = await GetEvents();
      setLoad(false);
      setData(data);
    } catch (e) {
      setLoad(false);
    }
  };
/**
 * @brief Conecta con la base de datos
 * @param {*} date 
 * @returns 
 */
  function dateFormat(date) {
    let newDate = new Date(date).toLocaleDateString("esp-mx", options);
    return newDate;
  }

  const handleShowEventDetails = (eventIndex) => {
    cambiarEstadoModal(!estadoModal);
    setEventoActual(eventIndex);
  };
  const modal = (
    <>
      <Container>
        <TitleEvents>
          <h1>Eventos del ecosistema</h1>
        </TitleEvents>
        <ContentEvents>
          <p>
            Todos los eventos de emprendimiento, ciencia y tecnologia de
            chihuahua.
          </p>
        </ContentEvents>
        <ButtonEvents>
          {acces === true && (
            <button
              onClick={() => {
                navigate("/registrar-evento");
              }}
            >
              Sube tu evento ahora
            </button>
          )}
        </ButtonEvents>
        <ContainerEvents>
          <br />
          <Row>
            {data.map((data, index) => {
              return (
                <Card key={data.id}>
                  <CardHeader>
                    <h2>{data.event_name}</h2>
                  </CardHeader>
                  <CardBody>
                    <h4>
                      <strong>{data.location}</strong>
                    </h4>
                    <p>
                      {dateFormat(data.start_date)}
                      <p>{data.modality}</p>
                    </p>
                    <p>{data.community_name}</p>
                    <p>{data.description}</p>
                    <p>
                      <strong>{data.url_form}</strong>
                    </p>
                    <ButtonContainer
                      onClick={() => handleShowEventDetails(index)}
                    >
                      Leer mas
                    </ButtonContainer>
                  </CardBody>
                </Card>
              );
            })}
          </Row>
        </ContainerEvents>
      </Container>
      <Modal
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
        data={data[eventoActual]}
      />
    </>
  );

  return load ? <Loader /> : modal;
}

export default Eventos;
