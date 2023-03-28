import React, { useEffect } from "react";
import {
  Container,
  Title,
  SecondContainer,
  FImage,
  BusinessName,
  BusinessContent,
  ButtonContainer,
  EImage,
  BusinessNameE,
  BusinessContentE,
  ButtonContainerE,
  SImage,
  BusinessNameS,
  BusinessContentS,
  TImage,
  BusinessNameT,
  BusinessContentT,
  ButtonContainerT,
  LastContainer,
  ButtonLeft,
  ButtonRight,
  SpanContentL,
  SpanContentR,
} from "../Business-networking/BusinessNetworking.css.js";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../routes/routes";
/**
 * @brief Da acceso a las redes sociales
 * @returns 
 */
function BusinessNetworking() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const handleClickF = () => {
    window.open("https://facebook.com/funcuu/");
  };

  const handleClickS = () => {
    window.open("https://facebook.com/RedEmprendeChihuahua");
  };

  const handleClickT = () => {
    window.open("https://facebook.com/blockchainbusinessschool");
  };

  return (
    <>
      <Container>
        <Title>Comunidades de negocio</Title>
      </Container>
      <SecondContainer>
        <div>
          <FImage
            src={require("../../../../../assets/image_fuckup_nights.jpg")}
            alt="Fuckup Nights"
          />
          <BusinessName>Fuckup Nights</BusinessName>
          <BusinessContent>
            Movimiento a nivel mundial donde distintas personas comparten
            historias
            <br />
            de fracasos profesionales, para crear un cambio cultural en torno al
            fracaso
            <br />y permitir una mentalidad de crecimiento e innovación.
          </BusinessContent>
          <ButtonContainer type="button">
            <span onClick={handleClickF}>Más info</span>
          </ButtonContainer>
          <div>
            <EImage
              src={require("../../../../../assets/image_club_de_negocios.jpg")}
              alt="Club de negocios"
            />
            <BusinessNameE>Club de negocios interactua</BusinessNameE>
            <BusinessContentE>
              Club Interactua, es un centro de desarrollo de emprendedores y
              <br />
              empresarios de base tradicional.
            </BusinessContentE>
            <ButtonContainerE type="button">
              <span>Más info</span>
            </ButtonContainerE>
          </div>
        </div>
        <div>
          <SImage
            src={require("../../../../../assets/image_red_emprende.jpg")}
            alt="Red Emprende"
          />
          <BusinessNameS>Red Emprende</BusinessNameS>
          <BusinessContentS>
            La Red Emprende Chihuahua está formada por más de 60 instituciones
            <br />
            de la tetra hélice con el fin de asesorar, vincular y apoyar a los
            <br />
            emprendedores de todo tipo.
          </BusinessContentS>
          <ButtonContainer type="button">
            <span onClick={handleClickS}>Más info</span>
          </ButtonContainer>
        </div>
        <div>
          <TImage
            src={require("../../../../../assets/image_blockchain_business_school.jpg")}
            alt="Blockchain Business School"
          />
          <BusinessNameT>Blockchain Business School</BusinessNameT>
          <BusinessContentT>
            Comunidad para el desarrollo de proyectos en red Blockchain.
            <br />
            Creación y despliegue de Smart Contracts y Tokenización.
          </BusinessContentT>
          <ButtonContainerT type="button">
            <span onClick={handleClickT}>Más info</span>
          </ButtonContainerT>
        </div>
      </SecondContainer>
      <LastContainer>
        <div>
          <Link to={ROUTES.CULTURE_EDUCATION}>
            <ButtonLeft type="button">
              <SpanContentL>
                &#10096;&nbsp;&nbsp;&nbsp;Comunidades que promueven la cultura
                del futuro
              </SpanContentL>
            </ButtonLeft>
          </Link>
        </div>
        <div>
          <Link to={ROUTES.STEAM}>
            <ButtonRight type="button">
              <SpanContentR>
                Comunidades Steam&nbsp;&nbsp;&nbsp;&#10097;
              </SpanContentR>
            </ButtonRight>
          </Link>
        </div>
      </LastContainer>
    </>
  );
}
export default BusinessNetworking;
