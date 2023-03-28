import React from "react";
import { SponsorsContainer, Img, Title } from "./Sponsors.css.js";
import "./Sponsors.css.js";
/**
 * @breaf Rutas de imagenes
 * @returns 
 */
function Sponsors() {
  return (
    <SponsorsContainer >
      <div>
        <Title>
          {" "}NUESTROS SPONSORS{" "}
        </Title>
      </div><br /><br/>
      <div className="row align-items-start">
        <div className="col">
          <Img
            src={require("../../assets/Gobchihuahua.png")} alt="Logo Gobierno Chihuahua"
          />
        </div>
        <div className="col">
          <Img src={require("../../assets/ChihuahuaMunicipio.png")} alt="Logo Municipio Chihuahua"
          />
        </div>
        <div className="col">
          <Img src={require("../../assets/DesecLogo.png")} alt="Logo Desec" />
        </div>
        <br/><br/>
        <div className="row align-items-start">
          <div className="col">
            <Img src={require("../../assets/FicosecLogo.png")} alt="Logo Ficosec"
            />
          </div>
          <div className="col">
            <Img src={require("../../assets/TecnologicoMonterrey.png")} alt="Logo Tecnologico de Monterrey"
            />
          </div>
          <div className="col">
            <Img src={require("../../assets/ChihuahuaFutura.png")} alt="Logo ChihuahuaFutura"
            />
          </div>
        </div>
      </div>
    </SponsorsContainer>
  );
}
export default Sponsors;
