import React from 'react';
import { Main, Title, Subtitle, Form, Startup1, AddTitle, AddSubtitle, Content, Container, BoxText, Send, StartupButton, Boxshort, Iconemail, Iconupload, Iconprice, Options, Paragraph} from './AddStartups.css.js';

/**
 * @breaf Muestra el contenido de la pagina de Startups
 * @returns 
 */
function AddStartup() {
    return(
        <Main>
            <Title><strong>STARTUPS DE CHIHUAHUA</strong></Title>
            <br/>
            <Subtitle><strong>EN STARTUP CHIHUAHUA ESTAMOS BUSCANDO CONOCER TODAS LAS STARTUPS DE LA REGIÓN PARA PODER APOYARLAS MAXIMIZAR SU CRECIMIENTO Y LOGRAR EL IMPACTO COLECTIVO.</strong></Subtitle>
            <br/>
            <Subtitle><strong>SUBE TU STARTUP EN ESTE FORMULARIO:</strong></Subtitle>
            <br/>    
            <Form>
                    <AddTitle>Sube tu Startup</AddTitle>
                    <hr/>
                <Startup1>
                    <AddSubtitle>Información de contacto confidencial</AddSubtitle>
                    <hr/>
                </Startup1>
                <Startup1>
                    <Container>
                        <Content>Nombre del principal contacto *</Content>
                        <Boxshort>
                        <BoxText placeholder='Nombre' required/>
                        </Boxshort>
                        <Boxshort>
                        <BoxText placeholder='Apellido' required />
                        </Boxshort>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Email de contacto *</Content>
                        <BoxText required/><Iconemail/>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Email 2</Content>
                        <BoxText /><Iconemail/>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Celular de contacto *</Content>
                        <BoxText required type='number' placeholder='+52 222 123 4567'  />
                    </Container>
                    <br/>
                    <Container>
                        <Content>Telefono 2</Content>
                        <BoxText required type='number' placeholder='+52 222 123 4567'  />
                    </Container>
                    <br/>
                    <AddSubtitle>Información Pública</AddSubtitle>
                    <hr/>
                </Startup1>
                <Startup1>
                    <Container>
                        <Content>Nombre del startup o empresa *</Content>
                        <BoxText required />
                    </Container>
                    <br/>
                    <Container>
                        <Content>Tipo *</Content><Boxshort><BoxText required type='radio' />Proyecto<br/>
                        <br/><Content></Content><BoxText type='radio' required/>Startup<br/>
                        <br/><Content></Content><BoxText type='radio' required/>Scaleup<br/>
                        <br/><Content></Content><BoxText type='radio' required/>Empresa<br/>
                        <br/><Content></Content><BoxText type='radio' required/>Spinoff tecnológica<br/>
                        </Boxshort>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Año de inició de operaciones *</Content>
                        <Options required>
                            <option>-Select-</option>
                            <option>1920</option>
                            <option>1921</option>
                            <option>1922</option>
                            <option>1923</option>
                            <option>1924</option>
                            <option>1925</option>
                            <option>1926</option>
                            <option>1927</option>
                            <option>1928</option>
                            <option>1929</option>
                            <option>1930</option>
                            <option>1931</option>
                            <option>1932</option>
                            <option>1933</option>
                            <option>1934</option>
                            <option>1935</option>
                            <option>1936</option>
                            <option>1937</option>
                            <option>1938</option>
                            <option>1939</option>
                            <option>1940</option>
                            <option>1941</option>
                            <option>1942</option>
                            <option>1943</option>
                            <option>1944</option>
                            <option>1945</option>
                            <option>1946</option>
                            <option>1947</option>
                            <option>1948</option>
                            <option>1949</option>
                            <option>1950</option>
                            <option>1951</option>
                            <option>1952</option>
                            <option>1953</option>
                            <option>1954</option>
                            <option>1955</option>
                            <option>1956</option>
                            <option>1957</option>
                            <option>1958</option>
                            <option>1959</option>
                            <option>1960</option>
                            <option>1961</option>
                            <option>1962</option>
                            <option>1963</option>
                            <option>1964</option>
                            <option>1965</option>
                            <option>1966</option>
                            <option>1967</option>
                            <option>1968</option>
                            <option>1969</option>
                            <option>1970</option>
                            <option>1971</option>
                            <option>1972</option>
                            <option>1973</option>
                            <option>1974</option>
                            <option>1975</option>
                            <option>1976</option>
                            <option>1977</option>
                            <option>1978</option>
                            <option>1979</option>
                            <option>1980</option>
                            <option>1981</option>
                            <option>1982</option>
                            <option>1983</option>
                            <option>1984</option>
                            <option>1985</option>
                            <option>1986</option>
                            <option>1987</option>
                            <option>1988</option>
                            <option>1989</option>
                            <option>1990</option>
                            <option>1991</option>
                            <option>1992</option>
                            <option>1993</option>
                            <option>1994</option>
                            <option>1995</option>
                            <option>1996</option>
                            <option>1997</option>
                            <option>1998</option>
                            <option>1999</option>
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                        </Options>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Principal Industria *</Content>
                        <Options required>
                            <option>-Select-</option>
                            <option>Administración pública</option>
                            <option>Aeroespacial</option>
                            <option>Agricultura</option>
                            <option>Agroindustria</option>
                            <option>Alojamiento</option>
                            <option>Aplicaciones móviles</option>
                            <option>Apoyo a startups</option>
                            <option>Arquitectura y construcción</option>
                            <option>Arte y pintura</option>
                            <option>Astronomía</option>
                            <option>Automatización</option>
                            <option>Automotriz</option>
                            <option>Banca o SOFOM</option>
                            <option>Bebidas y alimentos</option>
                            <option>Belleza y cosméticos</option>
                            <option>Biología</option>
                            <option>Biología humana</option>
                            <option>Blockchain y criptomonedas</option>
                            <option>Botánica</option>
                            <option>Ciberseguridad</option>
                            <option>Comunicaciones</option>
                            <option>Consultoría</option>
                            <option>Contabilidad</option>
                            <option>Crowdfunding</option>
                            <option>Data y análisis de datos</option>
                            <option>Dating y matchmaking</option>
                            <option>Defensa</option>
                            <option>Deportes</option>
                            <option>Diseño</option>
                            <option>Drones y vehículos no tripulados</option>
                            <option>E-commerce</option>
                            <option>Ecotech</option>
                            <option>Edtech</option>
                            <option>Educación, tutoría y entrenamiento</option>
                            <option>Electrónica</option>
                            <option>Empresa social</option>
                            <option>Energía</option>
                            <option>Entrenamiento y recreación</option>
                            <option>Escritura y Blogger</option>
                            <option>Farmacéutico</option>
                            <option>Fintech</option>
                            <option>Fotografía y vídeo</option>
                            <option>Freelancer</option>
                            <option>Genética</option>
                            <option>Geología</option>
                            <option>Govtech</option>
                            <option>Hardware computacional</option>
                            <option>Insurtech</option>
                            <option>Inteligencia artificial</option>
                            <option>Internet de las cosas</option>
                            <option>Logística</option>
                            <option>Manufactura</option>
                            <option>Marketing</option>
                            <option>Marketplace</option>
                            <option>Mascotas</option>
                            <option>Media y broadcasting</option>
                            <option>Meteorología</option>
                            <option>Minería</option>
                            <option>Minorista</option>
                            <option>Moda</option>
                            <option>Música</option>
                            <option>Nanotecnología</option>
                            <option>Periodismo y noticias</option>
                            <option>Productos de consumo</option>
                            <option>Protech</option>
                            <option>Publicidad</option>
                            <option>Químicos</option>
                            <option>Realidad virtual o aumentada</option>
                            <option>Reciclaje</option>
                            <option>Recursos humanos y talento</option>
                            <option>Recursos naturales</option>
                            <option>Red social</option>
                            <option>Relaciones publicas</option>
                            <option>Robótica</option>
                            <option>SaaS</option>
                            <option>Salud y bienestar</option>
                            <option>Servicios e insumos médicos</option>
                            <option>Servicios legales</option>
                            <option>Servicios profesionales</option>
                            <option>Servicios web</option>
                            <option>Sharing economy</option>
                            <option>Tecnologías de la información</option>
                            <option>Tecnologías de limpieza</option>
                            <option>Telecomunicaciones</option>
                            <option>Transporte</option>
                            <option>Turismo</option>
                            <option>Vestimenta y accesorios</option>
                            <option>Videojuegos</option>
                            <option>Wereables</option>
                            <option>Youtuber</option>
                        </Options>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Breve descripción (Máx. 80 caracteres) *</Content>
                        <Paragraph required cols="45" rows="5" ></Paragraph>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Logo *</Content>
                        <BoxText type="file" required/>
                        <Iconupload/>
                    </Container>
                    <br/>
                    Por favor sube tu logo a color o negro, evitando que sea con letras blancas, de preferencia en formato PNG o SVG.
                    <br/>
                    <Container>
                        <Content>Etapa *</Content>
                        <Options required>
                            <option>-Select-</option>
                            <option>Idea</option>
                            <option>Validación (Tienes prototipo)</option>
                            <option>Construyendo MVP</option>
                            <option>Early (MVP lanzado)</option>
                            <option>Cremiento (Primeras ventas)</option>
                            <option>Escala (Vendiendo con crecimiento)</option>
                            <option>Adquirida</option>
                            <option>Salida a bolsa</option>
                        </Options>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Estatus *</Content>
                        <Options required>
                            <option>-Select-</option>
                            <option>Activa</option>
                            <option>Cerrada</option>
                            <option>Pausada</option>
                        </Options>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Nivel de embudo *</Content>
                        <Options required>
                            <option>-Select-</option>
                            <option>1 - Inspirado a emprender</option>
                            <option>2 - Conocimientos técnics para emprender</option>
                            <option>3 - Desarrollando una idea</option>
                            <option>4 - Validando un modelo de negocio</option>
                            <option>5 - Buscando crecer o escalar</option>
                        </Options>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Clasificación Tecnológica *</Content>
                        <Options required>
                            <option>-Select-</option>
                            <option>A - Desarrollas tu propia tecnología</option>
                            <option>B - Modelo de negocio basado en tecnología</option>
                            <option>C - Modelo de negocio digitalizado</option>
                            <option>D - Tradicional u otros</option>
                        </Options>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Pagina web *</Content>
                        <BoxText required placeholder='https://' />
                    </Container>
                    <br/>
                    <Container>
                        <Content>Ubicación principal *</Content>
                        <Paragraph cols="35" rows="3" required placeholder='Address line 1'></Paragraph>
                    </Container>
                    <Container>
                        <Content></Content>
                        <Boxshort>
                        <BoxText placeholder='Ciudad' /></Boxshort>
                        <Boxshort>
                            <BoxText placeholder='Estado' />
                        </Boxshort>
                    </Container>
                    <br/>
                    <Container>
                        <Content></Content>
                        <Options>
                            <option>-País-</option>
                            <option>Afghanistan</option>
                            <option>Albania</option>
                            <option>Algeria</option>
                            <option>American Samoa</option>
                            <option>Andorra</option>
                            <option>Angola</option>
                            <option>Anguilla</option>
                            <option>Antigua and Barbuda</option>
                            <option>Argentina</option>
                            <option>Armenia</option>
                            <option>Aruba</option>
                            <option>Australia</option>
                            <option>Austria</option>
                            <option>Azerbaijan</option>
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option></option>
                            <option>Barbados</option>
                            <option>Belarus</option>
                            <option>Belgium</option>
                            <option>Belize</option>
                            <option>Benin</option>
                            <option>Bermuda</option>
                            <option>Bhutan</option>
                            <option>Bolivia</option>
                            <option>Bosnia and Herzegovina</option>
                            <option>Botswana</option>
                            <option>Brazil</option>
                            <option>British Indian Ocean Territory</option>
                            <option>British Virgin Islands</option>
                            <option>Brunei</option>
                            <option>Bulgaria</option>
                            <option>Burkina Faso</option>
                            <option>Burundi</option>
                            <option>Cambodia</option>
                            <option>Cameroon</option>
                            <option>Canada</option>
                            <option>Cape Verde</option>
                            <option>Caribbean Netherlands</option>
                            <option>Cayman Islands</option>
                            <option>Central African Republic</option>
                            <option>Chad</option>
                            <option>Chile</option>
                            <option>China</option>
                            <option>Christmas Island</option>
                            <option>Cocos</option>
                            <option>Colombia</option>
                            <option>Comoros</option>
                            <option>Democratic Republic of the Congo</option>
                            <option>Republic of the Congo</option>
                            <option>Cook Islands</option>
                            <option>Costa Rica</option>
                            <option>Ivory Coast</option>
                            <option>Croatia</option>
                            <option>Cuba</option>
                            <option>Curacao</option>
                            <option>Cyprus</option>
                            <option>Czech Replubic</option>
                            <option>Denmark</option>
                            <option>Djibouti</option>
                            <option>Dominica</option>
                            <option>Dominican Republic</option>
                            <option>Ecuador</option>
                            <option>Egypt</option>
                            <option>El Salvador</option>
                            <option>Equatorial Guinea</option>
                            <option>Eritrea</option>
                            <option>Estonia</option>
                            <option>Ethiopia</option>
                            <option>Falkland Islands</option>
                            <option>Faroe Islands</option>
                            <option>Fiji</option>
                            <option>Finland</option>
                            <option>France</option>
                            <option>French Guiana</option>
                            <option>French Polynesia</option>
                            <option>Gabon</option>
                            <option>Gambia</option>
                            <option>Georgia</option>
                            <option>Germany</option>
                            <option>Ghana</option>
                            <option>Gibraltar</option>
                            <option>Greece</option>
                            <option>Greenland</option>
                            <option>Grenada</option>
                            <option>Guadeloupe</option>
                            <option>Guam</option>
                            <option>Guatemala</option>
                            <option>Guernsey</option>
                            <option>Guinea</option>
                            <option>Guinea-Bissau</option>
                            <option>Guyana</option>
                            <option>Haiti</option>
                            <option>Honduras</option>
                            <option>Hong Kong</option>
                            <option>Hungary</option>
                            <option>Iceland</option>
                            <option>India</option>
                            <option>Indonesia</option>
                            <option>Iran</option>
                            <option>Iraq</option>
                            <option>Ireland</option>
                            <option>Isle of Man</option>
                            <option>Israel</option>
                            <option>Italy</option>
                            <option>Jamaica</option>
                            <option>Japan</option>
                            <option>Jersey</option>
                            <option>Jordan</option>
                            <option>Kazakhstan</option>
                            <option>Kenya</option>
                            <option>Kiribati</option>
                            <option>Kuwait</option>
                            <option>Kyrgyzstan</option>
                            <option>Laos</option>
                            <option>Latvia</option>
                            <option>Lebanon</option>
                            <option>Lesotho</option>
                            <option>Liberia</option>
                            <option>Libya</option>
                            <option>Liechtenstein</option>
                            <option>Lithuania</option>
                            <option>Luxembourg</option>
                            <option>Macau</option>
                            <option>Macedonia</option>
                            <option>Madagascar</option>
                            <option>Malawi</option>
                            <option>Malaysia</option>
                            <option>Maldives</option>
                            <option>Mali</option>
                            <option>Malta</option>
                            <option>Marshall Islands</option>
                            <option>Martinique</option>
                            <option>Mauritania</option>
                            <option>Mauritius</option>
                            <option>Mayotte</option>
                            <option>Mexico</option>
                            <option>Micronesia</option>
                            <option>Moldova</option>
                            <option>Monaco</option>
                            <option>Mongolia</option>
                            <option>Montenegro</option>
                            <option>Montserrat</option>
                            <option>Morocco</option>
                            <option>Mozambique</option>
                            <option>Myanmar</option>
                            <option>Namibia</option>
                            <option>Nauru</option>
                            <option>Nepal</option>
                            <option>Netherlands</option>
                            <option>New Caledonia</option>
                            <option>New Zealand</option>
                            <option>Nicaragua</option>
                            <option>Niger</option>
                            <option>Nigeria</option>
                            <option>Niue</option>
                            <option>Norfolk Island</option>
                            <option>North Korea</option>
                            <option>Northern Mariana Islands</option>
                            <option>Norway</option>
                            <option>Oman</option>
                            <option>Pakistan</option>
                            <option>Palau</option>
                            <option>Palestine</option>
                            <option>Panama</option>
                            <option>Papua New Guinea</option>
                            <option>Paraguay</option>
                            <option>Peru</option>
                            <option>Philippines</option>
                            <option>Poland</option>
                            <option>Portugal</option>
                            <option>Puerto Rico</option>
                            <option>Qatar</option>
                            <option>Réunion</option>
                            <option>Romania</option>
                            <option>Russia</option>
                            <option>Rwanda</option>
                            <option>Saint Barthélemy</option>
                            <option>Saint Helena</option>
                            <option>Saint Kitts and Nevis</option>
                            <option>Saint Lucia</option>
                            <option>Saint Martin</option>
                            <option>Saint Pierre and Miquelon</option>
                            <option>Saint Vincent and the Grenadines</option>
                            <option>Samoa</option>
                            <option>San Marino</option>
                            <option>Sao Tomé Principe</option>
                            <option>Saudi Arabia</option>
                            <option>Senegal</option>
                            <option>Serbia</option>
                            <option>Seychelles</option>
                            <option>Sierra Leone</option>
                            <option>Singapore</option>
                            <option>Sint Maarten</option>
                            <option>Slovakia</option>
                            <option>Slovenia</option>
                            <option>Solomon Islands</option>
                            <option>Somalia</option>
                            <option>South Africa</option>
                            <option>South Korea</option>
                            <option>South Sudan</option>
                            <option>Spain</option>
                            <option>Sri Lanka</option>
                            <option>Sudan</option>
                            <option>Suriname</option>
                            <option>Svalbard and Jan Mayen</option>
                            <option>Swaziland</option>
                            <option>Sweden</option>
                            <option>Switzerland</option>
                            <option>Syria</option>
                            <option>Taiwan</option>
                            <option>Tajikistan</option>
                            <option>Tanzania</option>
                            <option>Thailand</option>
                            <option>Timor-Leste</option>
                            <option>Togo</option>
                            <option>Tokelau</option>
                            <option>Tonga</option>
                            <option>Trinidad and Tobago</option>
                            <option>Tunisia</option>
                            <option>Turkiye</option>
                            <option>Turkmenistan</option>
                            <option>Turks and Caicos Islands</option>
                            <option>Tuvalu</option>
                            <option>U.S. Virgin Islands</option>
                            <option>Uganda</option>
                            <option>Ukraine</option>
                            <option>United Arab Emirates</option>
                            <option>United Kingdom</option>
                            <option>United States</option>
                            <option>Uruguay</option>
                            <option>Uzbekistan</option>
                            <option>Vanuatu</option>
                            <option>Vatican City</option>
                            <option>Venezuela</option>
                            <option>Vietnam</option>
                            <option>Wallis and Futuna</option>
                            <option>Western Sahara</option>
                            <option>Yemen</option>
                            <option>Zambia</option>
                            <option>Zimbabwe</option>
                            <option>Áland Islands</option>
                        </Options>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Tipos de clientes *</Content>
                        <Options required>
                            <option>-Select-</option>
                            <option>B2C (Le vendes directo al cliente)</option>
                            <option>C2C (Conectas personas para que hagan negocios entre sí)</option>
                            <option>B2B (Le vendes a otras empresas o negocios)</option>
                            <option>B2G (Le vendes al gobierno)</option>
                        </Options>
                    </Container>
                    <br/>
                    <Container>
                        <Content>¿Levantando capital? *</Content><Boxshort>
                        <BoxText type='radio' />Sí<br/>
                        <br/>
                        <Content></Content><BoxText type='radio' />No</Boxshort>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Número de patentes, diseños industriales o modelos de utilidad</Content>
                        <BoxText />
                    </Container>
                    <br/>
                    <Container>
                        <Content>Link de facebook *</Content>
                        <BoxText required placeholder='https://' />
                    </Container>
                    <br/>
                    <Container>
                        <Content>Link de instagram *</Content>
                        <BoxText required placeholder='https://' />
                    </Container>
                    <br/>
                    <Container>
                        <Content>Link de tiktok *</Content>
                        <BoxText required placeholder='https://' />
                    </Container>
                    <br/>
                    <Container>
                        <Content>Link de linkedin *</Content>
                        <BoxText required placeholder='https://' />
                    </Container>
                    <br/>
                    <Container>
                        <Content>Link de youtube *</Content>
                        <BoxText required placeholder='https://' />
                    </Container>
                    <br/>
                    <AddSubtitle>Información adicional CONFIDENCIAL</AddSubtitle>
                    <hr/>
                </Startup1>
                <Startup1>
                    <Container>
                        <Content>Empleos o equipo *</Content>
                        <BoxText required/>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Etapa de inversión *</Content>
                        <Options required>
                            <option>-Select-</option>
                            <option>Sin inversión de capital de riesgo</option>
                            <option>Pre-seed</option>
                            <option>Ángel</option>
                            <option>Seed</option>
                            <option>Serie A</option>
                            <option>Serie B</option>
                            <option>Serie C</option>
                            <option>Late</option>
                            <option>Adquirida</option>
                            <option>IPO</option>
                        </Options>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Inversión recibida al momento - USD *</Content>
                        <BoxText type='number' required placeholder='#,###,###,##'/><Iconprice/>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Churn rate - USD</Content>
                        <BoxText type='number' required placeholder='#,###,###,##'/><Iconprice/>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Ronda levantando actualmente - USD</Content>
                        <BoxText type='number' required placeholder='#,###,###,##'/><Iconprice/>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Ventas mensuales - USD</Content>
                        <BoxText type='number' required placeholder='#,###,###,##'/><Iconprice/>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Founders de tiempo completo</Content>
                        <BoxText />
                    </Container>
                    <br/>
                    <Container>
                        <Content>Problema en una oración</Content>
                        <BoxText />
                    </Container>
                    <br/>
                    <Container>
                        <Content>Solución en una oración</Content>
                        <BoxText />
                    </Container>
                    <br/>
                    <Container>
                        <Content>Principales competidores</Content>
                        <Paragraph cols="40" rows="3" ></Paragraph>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Propuesta de valor en una oración</Content>
                        <BoxText />
                    </Container>
                    <br/>
                    Por favor selecciona máximo 3.
                    <br/>
                    <Container>
                        <Content>Mi empresa o startup esta buscando</Content>
                        <Boxshort><BoxText type='checkbox' />Alianzas<br/>
                        <br/>
                        <Content></Content><BoxText type='checkbox' />Alianzas corporativas<br/>
                        <br/>
                        <Content></Content><BoxText type='checkbox' />Asesoría<br/>
                        <br/>
                        <BoxText type='checkbox' />Co-fundadores<br/>
                        <br/>
                        <Content></Content><BoxText type='checkbox' />Empleados<br/>
                        <br/>
                        <Content></Content><BoxText type='checkbox' />Inversión<br/>
                        <br/>
                        <BoxText type='checkbox' />Mentores<br/>
                        <br/>
                        <Content></Content><BoxText type='checkbox' />Practicantes<br/>
                        <br/>
                        <Content></Content><BoxText type='checkbox' />Subsidios<br/>
                       </Boxshort>
                    </Container>
                    <br/>
                    <Container>
                        <Content>¿Vendes Internacional?</Content><Boxshort><BoxText type='radio' />Sí<br/>
                        <br/>
                        <Content></Content><BoxText type='radio' />No<br/>
                        <br/>
                        <Content></Content><BoxText type='radio' />Aún no<br/>
                        </Boxshort>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Países donde vende</Content>
                        <BoxText  />
                    </Container>
                    <br/>
                    Por favor selecciona máximo 2.
                    <br/>
                    <Container>
                        <Content>Habilidades a desarrollar</Content>
                        <Options>
                            <option>-Select-</option>
                            <option>Negocios</option>
                            <option>Producto</option>
                            <option>Diseño/UX/UI</option>
                            <option>Tecnología</option>
                            <option>Marketing</option>
                        </Options>
                    </Container>
                    <br/>
                    <Container>
                        <Content>¿Actualmente estás contratando?</Content><Boxshort><Content></Content><BoxText type='radio' />Sí<br/>
                        <br/>
                        <Content></Content><BoxText type='radio' />No<br/>
                        </Boxshort>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Fuentes de capital *</Content>
                        <Options required>
                            <option>-Select-</option>
                            <option>Autofondeada</option>
                            <option>Capital de los fundadores</option>
                            <option>Capital de riesgo</option>
                            <option>Competencia o subsidio</option>
                            <option>Corporativo</option>
                            <option>Crédito bancario</option>
                            <option>Crowdfunding</option>
                            <option>Familia y amigos (3Fs)</option>
                            <option>Inersión Ángel</option>
                        </Options>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Metas de los siguientes meses</Content>
                        <Paragraph cols="35" rows="5" ></Paragraph>
                    </Container>
                    <br/>
                    <Container>
                        <Content>¿Cuáles son los principales retos?</Content>
                        <Paragraph cols="35" rows="5" ></Paragraph>
                    </Container>
                    <br/>
                    <Container>
                        <Content>One pager</Content>
                        <BoxText type="file"/>
                        <Iconupload/>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Deck</Content>
                        <BoxText type="file"/>
                        <Iconupload/>
                    </Container>
                    <br/>
                    <Container>
                        <Content>Video pitch</Content>
                        <BoxText placeholder='https://' />
                    </Container>
                    <br/>
                </Startup1>
                <hr/>
                <StartupButton>
                    <Container>
                        <Content></Content>
                        <Boxshort>
                        <Send>Submit</Send>
                        <Send>Reset</Send>
                        </Boxshort>
                    </Container>
                </StartupButton>
            </Form>
        </Main>     
    );
}

export default AddStartup;  