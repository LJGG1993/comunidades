import React from "react";
import {Container, ContainerModal, TitleModal, ButtonModal} from './Modal.css.js';     

/**
 * @brief  Da el estado de la ubicacion, fecha y hora.
 * @param {*} param0 
 * @returns 
 */
function Modal({estado, cambiarEstado, data}) {

    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: true,
        timeZone: 'America/Mexico_City' 
      };
/**
 * @brief Conecta a la base de datos
 * @param {*} date 
 * @returns 
 */
    function dateFormat(date){
        let newDate = new Date(date).toLocaleDateString('esp-mx',options);
       return newDate;
     }
     
    
    return(
        <>
        {estado && 
        <Container>
            <ContainerModal>
                <TitleModal>
                    <h2>{data.event_name}</h2> 
                </TitleModal>
                <ButtonModal onClick={() => cambiarEstado(false)}> 
                    <img src={require('../../../../assets/image_close.png')} alt=''/>
                </ButtonModal>
                <p><strong>Nombre del Evento:</strong><br/>{data.event_name}</p>
                <p><strong>Nombre de la comunidad o institución que organiza:</strong><br/>{data.community_name}</p>
                <p><strong>Descripción del evento:</strong><br/>{data.description}</p>
                <p><strong>Link del formulario de registro:</strong><br/>{data.url_form}</p>
                <p><strong>Fecha y hora de inicio:</strong><br/>{dateFormat(data.start_date)}</p>
                <p><strong>Fecha y hora de termino:</strong><br/>{dateFormat(data.end_date)}</p>
                <p><strong>Modalidad:</strong><br/>{data.modality}</p> 
                <p><strong>Ubicacion:</strong><br/>{data.location}</p> 
                <p><strong>Costo del evento:</strong><br/>{data.cost}</p>        
            </ContainerModal>   
        </Container>  
        } 
        </> 
    );
}

export default Modal;     