import React from "react";
import {
  Container,
  Title,
  Content,
  BorderContainer,
  BorderContent,
  OurchampionContainer,
  ImageOne,
  ContainerRight,
  OurchampionName,
  OurchampionContent,
  OurchampionSubtitle,
  OurchampionContentBold,
  ThereapteamContainer,
  ImageLeft,
  TeamNameLeft,
  TeamNameMiddle,
  TeamNameRight,
  TeamContentLeft,
  TeamContentMiddle,
  TeamContentRight,
  ImageMiddle,
  ImageRight,
  ImageQuote,
  QuoteContainer,
  LeftContainer,
  QuoteContent,
  QuoteName,
  SliderContainer,
  SliderContent,
} from "./Theteam.css";
/**
 * @breaf Nos da el contenideo de la pagina del Theteam
 * @returns 
 */
function Theteam() {
  return (
    <>
      <Container>
        <Title>
          Buscamos las ideas de tu
          <br />
          cabeza y las volvemos
          <br />
          unicornios dentro de un
          <br />
          ecosistema innovador.
        </Title>
        <Content>
          Todo comienza con una idea. Probablemente quieras crear tecnologia. O
          quizás tengas un proyecto de ciencia, tecnología
          <br />e innovación para compartir con el mundo pero no sabes con quien
          dirigirte. Cualquiera que sea tu posición, nosotros
          <br />
          guiamos tu historia a través de nuestro ecosistema donde notaras la
          diferencia.
        </Content>
      </Container>
      <BorderContainer>
        <BorderContent>Our champion</BorderContent>
      </BorderContainer>
      <OurchampionContainer>
        <div>
          <ImageOne
            src={require("../../../assets/image_luis_almanza.jpg")}
            alt="Luis Almanza"
          />
        </div>
        <ContainerRight>
          <OurchampionName>Luis Almanza</OurchampionName>
          <OurchampionContent>
            En los últimos 8 años he estado en 4 ciudades de México donde tuve
            la
            <br />
            oportunidad de trabajar con proyectos en diferentes áreas como:
            <br />
            Tecnologías de la Información, Innovación, Negocios y
            Emprendimiento,
            <br />
            últimamente especialmente con startups, he participado en +30
            <br />
            proyectos con diferentes empresas, siempre con excelentes
            resultados.
            <br />
            <br />
            Pensamos que toda idea basada en tecnologías tiene capacidad de
            <br />
            convertirse en una empresa con crecimiento exponencial.
          </OurchampionContent>
          <br />
          <OurchampionSubtitle>
            ¿Cuál es la clave del éxito?
          </OurchampionSubtitle>
          <br />
          <OurchampionContentBold>
            Personas + pasión + conocimiento + visión.
          </OurchampionContentBold>
          <OurchampionContent>
            Se desempeña como el Champion de la iniciativa Startup Chihuahua.
          </OurchampionContent>
        </ContainerRight>
      </OurchampionContainer>
      <BorderContainer>
        <BorderContent>The Reap team.</BorderContent>
      </BorderContainer>
      <ThereapteamContainer>
        <div>
          <ImageLeft
            src={require("../../../assets/image_andres_guzman.jpg")}
            alt="Andrés Guzmán"
          />
          <br />
          <br />
          <TeamNameLeft>Andrés Guzmán</TeamNameLeft>
          <TeamContentLeft>
            Más de 7 años de experiencia creando y<br />
            transformando instituciones en la era digital.
            <br />
            Ha apoyado el desarrollo de más de 1,000
            <br />
            empresas mexicanas, creó un fondo de 2<br />
            millones de dólares para apoyo a PYMES
            <br />
            durante el COVID-19, fundador de CIDER y de
            <br />
            INNDECH A.C., experto en innovación,
            <br />
            metodologías ágiles y emprendimiento,
            <br />
            capacitado y reconocido como líder mundial
            <br />
            por el Departamento de Estado de EUA y la
            <br />
            Agencia de Cooperación Internacional
            <br />
            Japonesa (JICA).
            <br />
            <br />
            Se desempeña como Project Director de la
            <br />
            iniciativa Startup Chihuahua.
          </TeamContentLeft>
          <div>
            <ImageLeft
              src={require("../../../assets/image_sebastian_diaz.jpg")}
              alt="Sebastián Díaz"
            />
            <br />
            <br />
            <TeamNameLeft>Sebastián Díaz</TeamNameLeft>
            <TeamContentLeft>
              Apasionado por el análisis de datos y la
              <br />
              estadística aplicada, es Licenciado en
              <br />
              Economía Internacional (L.E.I.) y candidato a<br />
              Maestro en Administración Pública (M.A.P.) por
              <br />
              la Universidad Autónoma de Chihuahua
              <br />
              (UACH). Actualmente es el Subcoordinador de
              <br />
              la Plataforma de Inteligencia Competitiva del
              <br />
              Sector Privado (PICsp) de Desarrollo
              <br />
              Económico del Estado de Chihuahua (DESEC
              <br />
              A.C.) y es catedrático de la UACH en las
              <br />
              materias de Análisis de Microdatos con
              <br />
              Estadística Aplicada, Excel para los Negocios y<br />
              Gestión del Desarrollo Económico.
              <br />
              <br />
              Se desempeña como Data Rockstar de la
              <br />
              iniciativa Startup Chihuahua.
            </TeamContentLeft>
          </div>
        </div>
        <div>
          <ImageMiddle
            src={require("../../../assets/image_lucila_lopez.jpg")}
            alt="Lucila López"
          />
          <br />
          <br />
          <TeamNameMiddle>Lucila López</TeamNameMiddle>
          <TeamContentMiddle>
            Financiera, emprendedora y apasionada de la
            <br />
            innovación disruptiva que contribuya a crear
            <br />
            cambios radicales en la vida de las personas y<br />
            al desarrollo sostenible. Creo firmemente que
            <br />
            tu equipo es el activo más importante que
            <br />
            tienes y al que más le debes invertir.
            <br />
            <br />
            Expresidenta del IMEF universitario en 2015,
            <br />
            tengo un diplomado en inversiones y finanzas
            <br />
            en Suiza 2017 y soy maestra en innovación y<br />
            desarrollo empresarial 2021. Me gusta estar en
            <br />
            constante crecimiento tanto profesional como
            <br />
            personal. Una de mis frases favoritas es la
            <br />
            siguiente
            <br />
            <br />
            “No te preguntes que puede hacer tu país por
            <br />
            ti, pregúntate tu que puedes hacer por tu país”
            <br />
            Kennedy
            <br />
            <br />
            Se desempeña como la Coordinadora de
            <br />
            Capital de Riesgo de la iniciativa Startup
            <br />
            Chihuahua.
          </TeamContentMiddle>
          <div>
            <ImageMiddle
              src={require("../../../assets/image_ze_silva.jpg")}
              alt="Zé Silva"
            />
            <br />
            <br />
            <TeamNameMiddle>Zé Silva</TeamNameMiddle>
            <TeamContentMiddle>
              Director creativo y fundador de Suburime
              <br />
              Studio™ establecido en el 2015 donde hemos
              <br />
              hecho que humanos se enamoren de las
              <br />
              marcas mientras que hacemos lo sublime,
              <br />
              tangible. Egresado del ISAD de Diseño Gráfico
              <br />
              con una pasión por la creación de marcas y<br />
              conceptualización para marcas locales,
              <br />
              estatales y nacionales desarrollando y<br />
              aplicando estrategias para el crecimiento de los
              <br />
              negocios obteniendo presencia, crecimiento y<br />
              ganancias para las mismas.
              <br />
              <br />
              Se desempeña como Director Creativo de la
              <br />
              iniciativa Startup Chihuahua.
            </TeamContentMiddle>
          </div>
        </div>
        <div>
          <ImageRight
            src={require("../../../assets/image_ana_victoria.jpg")}
            alt="Ana Vic Gutiérrez"
          />
          <br />
          <br />
          <TeamNameRight>Ana Vic Gutiérrez</TeamNameRight>
          <TeamContentRight>
            Coolaboradora en más de 20 iniciativas y<br />
            proyectos de Alto Impacto en plataformas
            <br />
            como el programa MITACS Globalink.
            <br />
            <br />
            Miembro y voluntaria en comunidades que
            <br />
            promueven la Ciencia y Tecnología nivel
            <br />
            global como la red de jóvenes líderes de
            <br />
            Biotecnología de Latinoamérica All Biotech, la
            <br />
            Red Científicas Mexicanas y la Global Biotech
            <br />
            Revolution. Fundó Community Lab Alliance,
            <br />
            on el objetivo de fortalecer actividades de
            <br />
            I+D+i en PYMES.
            <br />
            <br />
            Se desempeña como la Community Builder de
            <br />
            Startup Chihuahua.
          </TeamContentRight>
          <div>
            <ImageRight
              src={require("../../../assets/image_estef_sanson.jpg")}
              alt="Estef Sansón"
            />
            <br />
            <br />
            <TeamNameRight>Estef Sansón</TeamNameRight>
            <TeamContentRight>
              Química Bacterióloga Parasitóloga y<br />
              emprendedora. Cofundadora y formuladora de
              <br />
              la marca en fitocosmética “Alhena”.
              <br />
              Especialidades en Control de Calidad y Medio
              <br />
              Ambiente. Ayudante voluntaria del equipo
              <br />
              ganador del premio NoBi 2017. Ha participado
              <br />
              en distintos proyectos de investigación con
              <br />
              miembros activos del Sistema Nacional De
              <br />
              Investigadores “SNI”. Miembro activo como
              <br />
              Intérprete del Instituto Chihuahuense de
              <br />
              Lengua de Señas Mexicana, así como otros
              <br />
              movimientos sociales. Con su experiencia y<br />
              pasión por el desarrollo de proyectos tanto
              <br />
              científicos como sociales, asegura que la
              <br />
              resiliencia, planeación y disciplina son la clave
              <br />
              del éxito.
              <br />
              <br />
              Se desempeña como Ecosystem Manager de la
              <br />
              iniciativa Startup Chihuahua.
            </TeamContentRight>
          </div>
        </div>
      </ThereapteamContainer>
      <QuoteContainer>
        <LeftContainer>
          <QuoteContent>
            “Buscamos
            <br />
            crear una
            <br />
            sociedad dentro
            <br />
            de un ecosistema
            <br />
            con
            <br />
            emprendimiento
            <br />
            tecnologico”.
          </QuoteContent>
          <QuoteName>— Andres Guzmán</QuoteName>
        </LeftContainer>
        <ImageQuote src={require("../../../assets/image_quote.jpg")} alt="" />
      </QuoteContainer>
      <SliderContainer>
        <SliderContent>| Reap the future | Come n' Join us |</SliderContent>
        <SliderContent>| Reap the future | Come n' Join us |</SliderContent>
        <SliderContent>| Reap the future | Come n' Join us |</SliderContent>
        <SliderContent>| Reap the future | Come n' Join us |</SliderContent>
        <SliderContent>| Reap the future | Come n' Join us |</SliderContent>
        <SliderContent>| Reap the future | Come n' Join us |</SliderContent>
        <SliderContent>| Reap the future | Come n' Join us |</SliderContent>
      </SliderContainer>
    </>
  );
}

export default Theteam;
