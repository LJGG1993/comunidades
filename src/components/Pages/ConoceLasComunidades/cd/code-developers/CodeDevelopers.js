import React, { useEffect } from "react";
import "./CodeDevelopers.css.js";
import {
  ButtonInfo,
  Container,
  TitleContainer,
  Title,
  ImageContainer,
  Content,
  CourseName,
  Description,
  BotomContainer,
  LeftButon,
  RightButon,
  ImagesBody,
  SpanContentL,
  SpanContentR,
} from "./CodeDevelopers.css.js";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../routes/routes.js";
/**
 * @breaf Da acceso a a las redes sociales o otros sitios
 * @returns 
 */
function CodeDevelopers() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleClick = () => {
    window.open("https://www.superhappydevhouse.mx/");
  };

  const handleClick1 = () => {
    window.open("https://www.facebook.com/CodersClubCUU");
  };

  const handleClick2 = () => {
    window.open("https://www.facebook.com/groups/219085400136/about/");
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Comunidades de programadores</Title>
      </TitleContainer>
      <ImageContainer>
        <Content>
          <ImagesBody
            src={require("../../../../../assets/superhappydevhouse.jpg")}
            alt="Super Happy Dev House"
          />
          <CourseName>
            <strong>SUPER HAPPY DEV HOUSE</strong>
          </CourseName>
          <Description>
            Super Happy Dev House es una comunidad para desarrolladores,
            creativos y curiosos de la tecnología.
          </Description>
          <br />
          <br />
          <ButtonInfo onClick={handleClick}>Más info</ButtonInfo>
        </Content>
        <Content>
          <ImagesBody
            src={require("../../../../../assets/codersclub.jpg")}
            alt="Coders Club"
          />
          <CourseName>
            <strong>CODERS CLUB</strong>
          </CourseName>
          <Description>
            La comunidad tecnológica Chihuahua, mejor conocida como “coders
            club” es una comunidad de devs para devs.
          </Description>
          <br />
          <br />
          <ButtonInfo onClick={handleClick1}>Más info</ButtonInfo>
        </Content>
        <Content>
          <ImagesBody
            src={require("../../../../../assets/grupolinuxchihuahua.jpg")}
            alt="Grupo Linux Chihuahua"
          />
          <CourseName>
            <strong>GRUPO LINUX CHIHUAHUA</strong>
          </CourseName>
          <Description>
            El grupo LINUX Chihuahua, también conocido como GLUCH es una
            organización sin fines de lucro dedicada a la promoción, soporte y
            desarrollo de Software Libre y promoción de la cultura libre.
          </Description>
          <br />
          <ButtonInfo onClick={handleClick2}>Más info</ButtonInfo>
        </Content>
      </ImageContainer>
      <BotomContainer>
        <Link to={ROUTES.STEAM}>
          <LeftButon>
            <SpanContentL>
              &#10096; &nbsp; COMUNIDADES <br /> &nbsp; &nbsp; &nbsp;DE STEAM
            </SpanContentL>
          </LeftButon>
        </Link>
        <Link to={ROUTES.INDUSTRY_PROFESIONIST}>
          <RightButon>
            <SpanContentR>
              COMUNIDADES DE INDUSTRIAS <br /> Y PROFESIONISTAS &nbsp;
              &nbsp;&#10097;{" "}
            </SpanContentR>
          </RightButon>
        </Link>
      </BotomContainer>
    </Container>
  );
}
export default CodeDevelopers;
