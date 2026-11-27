# Proceso, desarrollo y uso de IA

## Síntesis del proceso completo de desarrollo, desde las decisiones de investigación, datos, visualización, escritura y diseño hasta la implementación final.

El desarrollo de la webstory “¿Todos pueden ganar?” comenzó con una problemática central: cuestionar si la Fórmula 1 es realmente una competencia igualitaria o por el contrario, existe una concentración del éxito en determinados equipos, detrás de la aparente diversidad de pilotos y escuderías, 
A partir de esta pregunta, se estableció una línea de investigación enfocada en analizar la distribución de los campeonatos, las victorias y los puntos obtenidos por los pilotos. También, se planteó como posible argumento, la relación entre los recursos económicos de las escuderías y su rendimiento deportivo.
En cuanto a los datos, se trabajó con distintas bases de datos que permitieron abarcar el período entre el año 2000 y 2025. Se utilizaron registros de campeonatos de constructores, porcentajes de carreras ganadas por los pilotos campeones, diferencias de puntos entre el primer y segundo lugar de cada temporada y antecedentes sobre presupuestos y costos por punto de las escuderías entre 2015 y 2019. 
Posteriormente, se seleccionaron y organizaron los datos para construir visualizaciones que permitieran identificar patrones y respaldar la hipótesis principal. Se desarrollaron gráficos interactivos que muestran la concentración de títulos en determinadas escuderías, el porcentaje de victorias de los pilotos campeones, las diferencias de puntos entre los dos primeros lugares y las diferencias económicas entre los equipos. La intención fue transformar información estadística en evidencia visual que facilitara la comprensión del problema. Además, inicialmente los gráficos tendían a ser netamente de barras, pero aquellos que consideramos necesario modificar, los entregamos de una manera más interactiva como es el caso del gráfico 1. 
En relación a la escritura, se entregó de manera progresiva, comenzando con la pregunta sobre la igualdad en la Fórmula 1. Luego, se presentaron distintos antecedentes y datos que permiten responder la interrogante. Los textos explicativos, titulares, subtítulos y cápsulas de curiosidades acompañan las visualizaciones, entregando contexto y ayudando a interpretar los resultados. 
Finalmente, en el diseño e implementación se optó por una estética inspirada en la identidad visual de la Fórmula 1, utilizando principalmente negro, rojo, azul y blanco. Se usaron fotografías, referencias a las banderas a cuadros, elementos gráficos de telemetría y recursos visuales asociados a las carreras. La webstory se implementó en HTML, CSS y JavaScript, incorporando animaciones, gráficos dinámicos, botones y elementos interactivos. 

## Especificación breve de lo que la webstory debía comunicar y cómo debía comportarse.
La webstory debía comunicar que la Fórmula 1, a pesar de presentarse como una competencia en la que distintos pilotos y equipos tienen la posibilidad de ganar, está marcada por importantes desigualdades deportivas, técnicas y económicas. La idea principal era demostrar que la diversidad de participantes no necesariamente significa que exista una competencia equilibrada, ya que los campeonatos y las victorias tienden a concentrarse en un grupo reducido de escuderías.
Para transmitir este mensaje, la historia debía avanzar desde una pregunta inicial sobre la igualdad en la Fórmula 1 hacia la presentación de evidencia estadística que permitiera comprender la concentración del éxito y sus posibles causas. Se buscaba que el usuario no solo recibiera información, sino que pudiera explorar los datos y descubrir por sí mismo las diferencias entre los equipos.
Respecto a su comportamiento, la webstory debía funcionar como una experiencia interactiva y de navegación vertical, en la que el usuario avanzara por las distintas secciones mediante el desplazamiento de la página. Para ello, se incorporaron los siguientes elementos:
Gráficos interactivos: permiten seleccionar escuderías, temporadas y métricas para explorar los datos y obtener información específica.
Elementos desplegables: permiten revelar información adicional, como los campeonatos obtenidos por cada equipo y una guía introductoria sobre la Fórmula 1.
Filtros de información: permiten comparar diferentes períodos y distinguir temporadas con finales más ajustados o con mayores diferencias de puntos.
Animaciones y recursos visuales: acompañan la navegación para generar una experiencia dinámica y mantener la atención del usuario.
Cápsulas informativas: incorporan datos curiosos que complementan la investigación y hacen más atractiva la lectura.
En términos generales, se buscaba que la página fuera intuitiva, atractiva y accesible tanto para seguidores de la Fórmula 1 como para personas que no conocen demasiado sobre este deporte. La interacción debía complementar el relato periodístico y facilitar la comprensión de los datos, sin perder de vista el objetivo principal: demostrar que no todos los equipos compiten bajo las mismas condiciones.

## Registro de los principales encargos realizados a herramientas de IA o vibecoding, si fueron utilizadas para implementar la web (CHECHO).

## Cambios realizados por el equipo sobre el código generado o sugerido (CHECHO).

## Problemas encontrados, iteraciones y soluciones aplicadas

Uno de los primeros desafíos, al menos para algunos integrantes del equipo, fue profundizar en los datos de un deporte que no conocíamos tanto y que tiene cierta complejidad. Esto dificultó en un inicio imaginar cómo sería nuestra página, qué contenido tendría y qué gráficos serían los más adecuados. Para solucionar esto, leímos bastante, vimos videos y nos fuimos adentrando cada vez más en el mundo de la Fórmula 1.

Por otro lado, uno de los mayores desafíos fue aprender a trabajar con código y comprender algunos aspectos básicos de la programación. Para esto, intentamos definir previamente cómo queríamos que se viera y funcionara cada elemento, para luego traspasar nuestras ideas a la IA y apoyarnos en ella para la implementación del código, procurando mantener nuestro propio trabajo periodístico.

Sin embargo, trabajar con IA fue más complicado de lo que imaginamos. Muchas veces ignoraba nuestras correcciones, incorporaba elementos que no habíamos solicitado o se alejaba de la idea inicial. Frente a esto, tuvimos que reiterar constantemente nuestra visión, ser más específicos con las instrucciones y pedirle que se ajustara a la información que le entregábamos.

En general, lo más complicado fue llevar a la práctica aquello que teníamos en mente. Tanto en la creación de los gráficos como en la programación final de la página, hubo mucha prueba y error, tiempos de carga y varias versiones de un mismo elemento hasta conseguir un resultado que se acercara a lo que habíamos imaginado como equipo.

## Pruebas finales de contenido, cifras, fuentes, visualizaciones, interacción, lectura en dispositivos móviles y funcionamiento del código (CHECHO Y ANTO).


## Identificación de las decisiones que fueron tomadas directamente por los integrantes

### Decisiones estéticas y gráficas

Para construir la identidad visual de nuestra webstory, nos inspiramos tanto en la página oficial de la Fórmula 1 como en el deporte en sí y en el contenido que crean sus fanáticos. A partir de estas referencias, comenzamos a definir una estética que transmitiera la emoción y la intensidad de la competencia. Buscábamos que la página se sintiera épica, utilizando letras grandes, colores que  contrastan y un fondo negro que le diera un carácter más serio al reportaje.

También decidimos incorporar elementos como fotografías que parecieran pegadas con cinta adhesiva, anotaciones y pequeños datos a lo largo de la página. La idea era combinar la seriedad de una investigación periodística con una estética más dinámica, cercana a la forma en que los fanáticos viven y comparten este deporte.

### Experiencia e interacción con el usuario

Desde un principio buscamos que el usuario sintiera que estaba siendo parte de un viaje y no solamente leyendo un reportaje. Por esto, durante el desarrollo se nos fueron ocurriendo distintas dinámicas y juegos que permitieran conocer al usuario, poner a prueba sus conocimientos y mantener su interés a lo largo de la historia.

También decidimos agregar un espacio dedicado a quienes no conocen tanto de Fórmula 1, para que la falta de conocimientos previos no fuera un impedimento al momento de recorrer la página. Queríamos que tanto los fanáticos como las personas que recién se acercan a este deporte pudieran comprender y disfrutar el reportaje.

### Decisiones sobre las visualizaciones

La elección de los distintos tipos de gráficos fue una decisión del equipo. Buscamos representar los datos de la manera más clara posible, pero también tener una variedad de recursos visuales para que el recorrido no se volviera repetitivo. Si bien parte de su implementación mediante código se trabajó con IA, la intención de cada visualización y su interactividad se fueron conversando y modificando constantemente.

**Visualización 00:** inicialmente queríamos que los nombres de los equipos aparecieran en letras grandes y que, por sí solos, comunicaran el reducido número de escuderías que han conseguido ganar un campeonato. Luego decidimos incorporar las copas al seleccionar cada equipo, agregando una representación gráfica que permitiera comparar la cantidad de títulos y los años en que fueron obtenidos.

**Visualización 01:** elegimos un gráfico de líneas porque nos permitía observar cómo ha variado la concentración de victorias a lo largo del tiempo. Nos interesaba especialmente destacar los puntos en los que esta concentración aumenta considerablemente, como aquella temporada en que el campeón llegó a ganar casi todas las carreras.

**Visualización 02:** mediante un gráfico de barras, buscamos representar qué tan cerca o lejos están los pilotos de alcanzar la cima, incluso cuando consiguen el segundo lugar. Nos interesaba mostrar que estar entre los mejores no necesariamente significa estar cerca de ganar el campeonato.

**Visualización 03:** quisimos contrastar la inversión económica con los resultados deportivos de las escuderías, observando cuándo una mayor inversión se veía reflejada en un mejor rendimiento y cuándo no. La comparación entre equipos grandes y pequeños nos permitía mostrar que el dinero es un factor relevante, pero que no siempre se traduce en éxito deportivo.

*Aclaración: nuestro primer gráfico se llama "visualización 00" porque la hicimso después de nuestros tres gráficos, pero era más introductoria, entonces mantuvimos los otros nombres y colocamos ese por el orden.*

### Revisión y modificación de las propuestas de IA

Durante el desarrollo de la página, revisamos constantemente las propuestas entregadas por la IA. En varias ocasiones, esta incorporaba textos, elementos gráficos o secciones que no respondían necesariamente a lo que queríamos comunicar. Por esto, fuimos solicitando modificaciones y eliminando aquellos elementos que no aportaban a nuestra historia.

Buscamos darle mayor protagonismo a nuestras propias crónicas, datos, visualizaciones e ideas trabajadas en las entregas anteriores, en lugar de utilizar directamente el contenido que la IA incorporaba al generar la página.

De esta manera, el desarrollo de la webstory fue un proceso de prueba y modificación constante, en el que utilizamos la IA como apoyo para implementar nuestras ideas y volverlas código (que  era lo más complicado), manteniendo como equipo las decisiones narrativas, gráficas y periodísticas del reportaje.
