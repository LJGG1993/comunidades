    import React from "react";
    import { Container, TitleContainer, Image, Content, ContainerRight, ContainerLeft, ImagesContainer, ImagesContainerb, Overlay, ContainerLeft1, Title, Description, ButtonNavigator, BText} from "./ConoceLasComunidades.css.js";
    import { Link} from "react-router-dom"
    import { ROUTES } from "../../../routes/routes"


/**
 * @breaf Te da acceso a las secciones para conocer mas del tema
 * @returns 
 */
    function ConoceLasComunidades() {  

        return (    
            <Container>
                <TitleContainer>
                    <Title>HAY  GRUPOS DE PERSONAS MOVIDOS POR <br />LAS MISMAS PASIONES: CIENCIA, <br />TECNOLOGÍA, INNOVACIÓN Y <br /> EMPRENDIMIENTO TECNOLÓGICO</Title>
                    <Description>HAZ CLICK EN CADA UNA DE LAS SECCIONES PARA CONOCERLOS</Description>
                </TitleContainer>
                <div className="button-container">
                    <ImagesContainer>
                        <ContainerLeft>
                            <Image  src={require("../../../assets/culture-education1.png")} alt="Comunidades de cultura y educacion." />
                            <Overlay >
                                <Content><ButtonNavigator><Link to={ROUTES.CULTURE_EDUCATION}><BText>COMUNIDADES QUE <br/> PROMUEVEN LA <br/>CULTURA DEL FUTURO</BText></Link></ButtonNavigator></Content>
                            </Overlay>
                        </ContainerLeft>
                        <ContainerRight>
                            <Image src={require("../../../assets/bussines-networking2.png")} alt="Comunidades de negocios." />
                            <Overlay > 
                                <Content><ButtonNavigator><Link to={ROUTES.BUSINESS_NETWORKING}><BText>COMUNIDADES DE NEGOCIOS</BText></Link></ButtonNavigator></Content>
                            </Overlay>
                        </ContainerRight>
                    </ImagesContainer>
                    <ImagesContainer>
                        <ContainerLeft>
                            <Image src={require("../../../assets/steam3.png")} alt="Comunidades de Steam." />
                            <Overlay>
                                <Content><ButtonNavigator><Link to={ROUTES.STEAM}><BText>COMUNIDADES DE STEAM</BText></Link></ButtonNavigator></Content>
                            </Overlay>
                        </ContainerLeft>
                        <ContainerRight>
                            <Image src={require("../../../assets/code-developers4.png")} alt="Comunidades de desarrolladores de software" />
                            <Overlay>
                                <Content><ButtonNavigator><Link to={ROUTES.CODE_DEVELOPERS}><BText>COMUNIDADES DE PROGRAMADORES</BText></Link></ButtonNavigator></Content>
                            </Overlay>
                        </ContainerRight>
                    </ImagesContainer>
                    <ImagesContainerb>
                        <ContainerLeft1>
                            <Image src={require("../../../assets/industry-profesionist5.png")} alt="Comunidades de industria y profesionistas" />
                            <Overlay>
                                <Content><ButtonNavigator><Link to={ROUTES.INDUSTRY_PROFESIONIST}><BText>COMUNIDADES DE INDUSTRIAS Y PROFESIONISTAS</BText></Link></ButtonNavigator></Content>
                            </Overlay >
                        </ContainerLeft1>
                    </ImagesContainerb>
                </div>
            </Container>
        );
    }
    export default ConoceLasComunidades;
