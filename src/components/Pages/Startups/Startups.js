import React from 'react';
import { Container, Title, Subtitle, Button, Startup, Content, Number, Text } from '../Startups/Startups.css.js';
import { useNavigate } from "react-router-dom";

/**
 * @breaf Permite hacer redirecciones en el programa
 * @returns 
 */
function Startups() {
    const navigate = useNavigate();
/**
 * @breaf Da coneccion a una ruta
 */
    function toAddStart() {
        navigate("/startups/addstartup");
      }

    return(
        <Container>
            <Title><strong>STARTUPS DE CHIHUAHUA</strong></Title>
            <br/>
            <Subtitle><strong>¡CONOCE NUESTRAS STARTUPS!</strong></Subtitle>
            <br/>
            <Button onClick={toAddStart}>Sube tu startup ahora</Button>   
            <Startup>
                <Content>
                    <Number>55</Number>
                    <Text>Total unidades validadas</Text>
                </Content>
            </Startup>
        </Container>    
    );
}

export default Startups;  