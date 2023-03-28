import React, { useEffect } from "react";
import {
  Container,
  Title,
  Steams,
  Photos,
  Subtitle,
  Paragraph,
  More,
  More1,
  More2,
  Content,
  ContentLeft,
  ButtonLeft,
  SpanLeft,
  ContentRight,
  ButtonRight,
  SpanRight,
} from "./Steam.css.js";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../routes/routes";
/**
 * @breaf Da acceso a las redes sociales o otros sitios
 * @returns 
 */
function Steam() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleClickLiga = () => {
    window.open("https://www.facebook.com/LigaAstronomicaChihuahua/");
  };

  const handleClickDivulgare = () => {
    window.open("https://www.divulgare.org/");
  };

  const handleClickFCQ = () => {
    window.open(
      "https://www.linkedin.com/in/rocio-infante-ramirez-7114ba220/?originalSubdomain=mx"
    );
  };

  const handleClickCiencias = () => {
    window.open("https://www.facebook.com/clubdeciencias.fing/");
  };

  return (
    <Container className="container-fluid">
      <Title>Comunidades Steam</Title>
      <br />
      <Steams>
        <div>
          <Photos
            src={require("../../../../../assets/liga-astronomica.png")}
            alt="Astronómica"
          />
          <br />
          <br />
          <Subtitle>
            <strong>Liga Astronómica de Chihuahua</strong>
          </Subtitle>
          <Paragraph>
            Astrónomos aficionados en la ciudad de Chihuahua, cuyo fin es la
            difusión de la Astronomía y la ciencia.
          </Paragraph>
          <More1 onClick={handleClickLiga}>Más info</More1>
        </div>
        <div>
          <Photos
            src={require("../../../../../assets/divulgare.png")}
            alt="Divulgare"
          />
          <br />
          <br />
          <Subtitle>
            <strong>Divulgare</strong>
          </Subtitle>
          <Paragraph>
            Actividades de comunicación científica como talleres, publicaciones
            y conferencias. Mapeamos el status de la difusión científica en
            Chihuahua.
          </Paragraph>
          <More2 onClick={handleClickDivulgare}>Más info</More2>
        </div>
        <div>
          <Photos
            src={require("../../../../../assets/cultura-fcq.png")}
            alt="Cultura FCQ"
          />
          <br />
          <br />
          <Subtitle>
            <strong>Cultura del Agua FCQ</strong>
          </Subtitle>
          <Paragraph>
            La comunidad de cultura del agua promovida por la Facultad de
            Ciencias Químicas de la UACH engloba estudiantes, investigadores y
            emprendedores que buscan promover proyectos enfocados al vital
            líquido.
          </Paragraph>
          <More onClick={handleClickFCQ}>Más info</More>
        </div>
        <div>
          <Photos
            src={require("../../../../../assets/club-fing.png")}
            alt="Club Fing"
          />
          <br />
          <br />
          <Subtitle>
            <strong>Club de Ciencias FING</strong>
          </Subtitle>
          <Paragraph>
            {" "}
            Club de Ciencias de la Facultad de Ingeniería de la UACH.
          </Paragraph>
          <More onClick={handleClickCiencias}>Más info</More>
        </div>
      </Steams>

      <Content>
        <ContentLeft>
          <Link to={ROUTES.BUSINESS_NETWORKING}>
            <ButtonLeft>
              <SpanLeft>&#10096; Comunidades de negocios</SpanLeft>
            </ButtonLeft>
          </Link>
        </ContentLeft>

        <ContentRight>
          <Link to={ROUTES.CODE_DEVELOPERS}>
            <ButtonRight>
              <SpanRight>Comunidades de programadores &#10097;</SpanRight>
            </ButtonRight>
          </Link>
        </ContentRight>
      </Content>
    </Container>
  );
}

export default Steam;
