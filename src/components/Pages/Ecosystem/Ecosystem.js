import React from "react";
import Iframe from "react-iframe";
import {
  Container,
  EcosystemTitle,
  EcosystemParagraph,
  Startups,
  StartupsTitle,
  StartupsSubtitle,
  SliderContainer,
  SliderContent,
  MapContainer,
  Content,
  MapTitle,
  MapParagraph,
  MapIframe,
} from "./Ecosystem.css.js";
/**
 * @breaf Contenido de la pagina
 * @returns 
 */
function Ecosystem() {
  return (
    <div>
      <Container>
        <EcosystemTitle>
          <strong>ECOSISTEMA CONECTADO</strong>
        </EcosystemTitle>
        <EcosystemParagraph>
          Encontramos la manera de mapear y mostrarte a ti emprendedor una
          manera gráfica de las conexiones de nuestra REAP SOCIETY, poniéndolos
          a la vista para que conozcas quienes se encuentran conectados y donde
          te encuentras tu emprendedor dentro de nuestro ecosistema de
          emprendimiento.
        </EcosystemParagraph>
        <EcosystemParagraph>
          Te presentamos el Mapa de conexiones del ecosistema de Emprendimiento
          de Base Científica y/o Tecnológica de la Cd. de Chihuahua:
        </EcosystemParagraph>
        <br />
        <Startups>
          <div>
            <StartupsTitle>Startup Chihuahua</StartupsTitle>
            <StartupsSubtitle>
              Mapa de los actores y entidades del Ecosistema de emprendimiento
              en la Ciudad de Chihuahua, México.
              <br />
              <br />
              Startup Chihuahua 2022. All rights Reserved.
            </StartupsSubtitle>
          </div>
        </Startups>
      </Container>
      <SliderContainer>
        <SliderContent>| JOIN REAP SOCIETY | CONOCE A QUIEN ACERCARTE |</SliderContent>
        <SliderContent>| JOIN REAP SOCIETY | CONOCE A QUIEN ACERCARTE |</SliderContent>
        <SliderContent>| JOIN REAP SOCIETY | CONOCE A QUIEN ACERCARTE |</SliderContent>
        <SliderContent>| JOIN REAP SOCIETY | CONOCE A QUIEN ACERCARTE |</SliderContent>
        <SliderContent>| JOIN REAP SOCIETY | CONOCE A QUIEN ACERCARTE |</SliderContent>
        <SliderContent>| JOIN REAP SOCIETY | CONOCE A QUIEN ACERCARTE |</SliderContent>
        <SliderContent>| JOIN REAP SOCIETY | CONOCE A QUIEN ACERCARTE |</SliderContent>
      </SliderContainer>
      <MapContainer>
        <Content>
          <MapTitle>
            <strong>MAPA DE EMPRENDIMIENTO</strong>
          </MapTitle>
          <MapParagraph>
            Gracias a un trabajo extensivo, logramos mapear las ubicaciones de
            las instituciones, entidades, organizaciones y comunidades que
            forman parte del Ecosistema de Emprendimiento de Base Tecnológica de
            la ciudad de Chihuahua.
            <br />
            Te puedes acercar con ellas, para formar sinergías y lograr impulsar
            tu emprendimiento al siguiente nivel.
          </MapParagraph>
        </Content>
        <MapIframe>
          <Iframe
            url="https://www.google.com/maps/d/embed?mid=1hxfzFfx9osL4JPLM4ae0bCGs4xTQhF_n&ehbc=2E312F"
            width="640px"
            height="420px"
            display="block"
            position="relative"
          />
        </MapIframe>
      </MapContainer>
    </div>
  );
}

export default Ecosystem;
