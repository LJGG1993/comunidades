import React from 'react';
import { Container, Title, ContainerGrid, ContainerLeft, Text, SocialMediaContainer, ButtonInstagram, ButtonLinkedin, ContainerRight, SubTitle, ButtonSend, ButtonRestore, SliderContainer, Content } from './Contactanos.css.js';
/**
 * @breaf Te da acceso a ponerte en contacto
 * @returns 
 */
function Contactanos() { 
    return (
        <>
            <Container>
                <Title>Contáctanos.</Title>
            </Container>
            <ContainerGrid>
                <ContainerLeft>
                    <Text>Para formar una sociedad con visión al emprendimiento<br />científico y/o tecnológico necesitamos de personas con<br />grandes ideas, que tengan unicornios en la cabeza que<br />quieran realizar sus ideas para convertirlas en empresas.<br /><br />Si quieres formar parte de nuestra <strong>REAP SOCIETY </strong>déjanos<br />tus datos o comunícate con nosotros y síguenos en<br />nuestras redes sociales.<br /><br />Hola@startupchihuahua.com<br />(614) 182-2983 WPP*<br /><br />Av. H. Colegio Militar 4709, Nombre de Dios.<br />31150 Chihuahua, Chih.</Text>
                    <SocialMediaContainer>
                        <ButtonLinkedin type='button' to='/'><img src={require('../../../assets/icon_Linkedin.png')} alt='Linkedin' width='20' height='20' /></ButtonLinkedin>&nbsp;&nbsp;
                        <ButtonInstagram type='button' to='/'><img src={require('../../../assets/icon_Instagram.png')} alt='Instagram' width='20' height='20' /></ButtonInstagram>
                    </SocialMediaContainer>  
                </ContainerLeft>
                <ContainerRight> 
                    <SubTitle>Contáctanos</SubTitle>&nbsp;
                    <form action='/'>
                        <div>
                            <label>Nombre:</label><br />
                            <input type='text' required />
                        </div>
                        <div>
                            <label>Apellido:</label><br />
                            <input type='text' required />
                        </div>
                        <div>
                            <label>Correo electrónico:</label><br />
                            <input type='email' required />
                        </div>
                        <div>
                            <label>Móvil:</label><br />
                            <input type='text' required />
                        </div><br />
                        <div>
                            <ButtonSend type='button'>Enviar</ButtonSend>&nbsp;&nbsp;
                            <ButtonRestore type='button'>Restablecer</ButtonRestore>
                        </div>
                    </form>
                </ContainerRight>
            </ContainerGrid>
            <SliderContainer>
                <Content>| El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy | El futuro es hoy</Content>
            </SliderContainer>
        </>
    );
}

export default Contactanos;          