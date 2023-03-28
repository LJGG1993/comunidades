import React, { useEffect } from "react";
import "./IndustryProfesionist.css.js";
import {
  Container,
  TitleContainer,
  Title,
  ImageContainer,
  CourseName,
  Imagee,
  Description,
  InfoButton,
  BotomContainer,
  BLeftButton,
  ButtonText,
} from "./IndustryProfesionist.css.js";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../routes/routes.js";
/**
 * @breaf Da acceso a las redes sociales o otros sitios
 * @returns 
 */
function IndustryProfesionist() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const handleClick = () => {
    window.location.replace(
      "https://www.facebook.com/EmpresariosJovenesCoparmexCUU/"
    );
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Comunidades de la industria y actividades profesionales</Title>
      </TitleContainer>
      <ImageContainer>
        <div className="content">
          <Imagee
            src={require("../../../../../assets/comunidades-foco.jpg")}
            alt="Super Happy Dev House"
          />
          <CourseName>
            <strong>COMUNIDADES FOCO</strong>
          </CourseName>
          <Description>
            Son comunidades derivadas del Centro de Competitividad del Estado de
            Chihuahua y su Foro anual.
          </Description>
          <InfoButton>Más info</InfoButton>
        </div>
        <div className="content">
          <Imagee
            src={require("../../../../../assets/empresarios-jovenes-coparmex.jpg")}
            alt="Coders Club"
          />
          <CourseName>
            <strong>EMPRESARIOS JÓVENES COPARMEX</strong>
          </CourseName>
          <Description>
            Comisión de empresarios jóvenes COPARMEX. Algunos de ellos están
            vinculados a proyectos digitales.
          </Description>
          <InfoButton onClick={handleClick}>Más info</InfoButton>
        </div>
      </ImageContainer>
      <BotomContainer>
        <Link to={ROUTES.CODE_DEVELOPERS}>
          <BLeftButton>
            <ButtonText>
              &#10096; &nbsp;&nbsp; COMUNIDADES DE
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROGRAMADORES
            </ButtonText>
          </BLeftButton>
        </Link>
      </BotomContainer>
    </Container>
  );
}
export default IndustryProfesionist;
