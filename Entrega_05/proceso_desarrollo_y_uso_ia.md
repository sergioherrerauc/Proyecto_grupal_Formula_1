# Proceso, desarrollo y uso de IA

## Síntesis del proceso completo de desarrollo, desde las decisiones de investigación, datos, visualización, escritura y diseño hasta la implementación final.

### Investigación, datos y visualizaciones

El desarrollo de nuestra webstory “¿Todos pueden ganar?” comenzó con una problemática central: cuestionar si la Fórmula 1 es realmente una competencia igualitaria o si, detrás de la aparente diversidad de pilotos y escuderías, existe una concentración del éxito en determinados equipos. A partir de esto, decidimos investigar la distribución de los campeonatos, las victorias y los puntos, además de la posible relación entre los recursos económicos y el rendimiento deportivo.

Trabajamos con distintas bases de datos que abarcan el período entre 2000 y 2025, utilizando registros de campeonatos de constructores, porcentajes de carreras ganadas por los pilotos campeones y diferencias de puntos entre el primer y segundo lugar. También utilizamos antecedentes sobre presupuestos y costos por punto de las escuderías entre 2015 y 2019.

A partir de estos datos, desarrollamos visualizaciones que nos permitieran identificar patrones y respaldar nuestra hipótesis, facilitando la comprensión de la información estadística. En un principio, nuestros gráficos tendían a ser principalmente de barras, pero durante el proceso fuimos modificando algunos para incorporar una mayor variedad visual e interactividad, como fue el caso del primer gráfico, donde decidimos utilizar copas para representar los campeonatos obtenidos por cada escudería.

### Escritura, diseño e implementación

La escritura del reportaje se desarrolló de manera progresiva, comenzando con la pregunta sobre la igualdad en la Fórmula 1 y presentando distintos antecedentes y datos que nos permitieran responderla. Los textos explicativos, titulares, subtítulos y cápsulas de curiosidades acompañan las visualizaciones, entregando contexto y ayudando a interpretar los resultados. Buscamos que los gráficos y los textos se complementaran entre sí y que cada sección aportara algo nuevo a la historia.

En cuanto al diseño, optamos por una estética inspirada en la identidad visual de la Fórmula 1, utilizando principalmente negro, rojo, azul y blanco. Incorporamos fotografías, referencias a las banderas a cuadros, elementos gráficos de telemetría y otros recursos visuales asociados a las carreras. Con esto, buscamos transmitir parte de la emoción del deporte, sin perder la seriedad de nuestra investigación.

Finalmente, la webstory se implementó en HTML, CSS y JavaScript, incorporando animaciones, gráficos dinámicos, botones y elementos interactivos. Durante este proceso fuimos revisando y modificando distintos elementos para que el funcionamiento de la página fuera coherente con las decisiones narrativas y visuales que habíamos tomado anteriormente.


## Especificación breve de lo que la webstory debía comunicar y cómo debía comportarse.

### ¿Qué debía comunicar?

Nuestra webstory buscaba comunicar que la Fórmula 1, a pesar de presentarse como una competencia en la que distintos pilotos y equipos tienen la posibilidad de ganar, está marcada por importantes desigualdades deportivas, técnicas y económicas. La idea principal era mostrar que la diversidad de participantes no necesariamente significa que exista una competencia equilibrada, ya que los campeonatos y las victorias tienden a concentrarse en un grupo reducido de escuderías.

Para transmitir este mensaje, buscamos que la historia avanzara desde una pregunta inicial sobre la igualdad en la Fórmula 1 hacia la presentación de datos que permitieran comprender la concentración del éxito y sus posibles causas.

Nos interesaba que el usuario no solo recibiera información, sino que también pudiera explorar los datos, comparar distintas temporadas y descubrir por sí mismo las diferencias entre los equipos. Asimismo, buscábamos mostrar que, aunque existen patrones de dominio, también hay temporadas y resultados que escapan de estos, dando espacio a otros pilotos y escuderías.

### ¿Cómo debía comportarse?

Pensamos en una webstory de navegación vertical, en la que el usuario pudiera avanzar por las distintas secciones mediante el desplazamiento de la página. Queríamos que el recorrido tuviera momentos de lectura, exploración de datos e interacción, evitando que la experiencia se volviera monótona.

Para esto, incorporamos los siguientes elementos:

- **Gráficos interactivos:** permiten seleccionar escuderías, temporadas y métricas para explorar los datos y obtener información más específica.
- **Elementos desplegables:** permiten revelar información adicional, como los campeonatos obtenidos por cada equipo y una guía introductoria sobre la Fórmula 1.
- **Filtros de información:** permiten comparar diferentes períodos y distinguir temporadas con finales más ajustados o con mayores diferencias de puntos.
- **Animaciones y recursos visuales:** acompañan la navegación y buscan generar una experiencia dinámica, relacionada con la estética del deporte.
- **Cápsulas informativas:** incorporan datos curiosos que complementan la investigación y hacen más entretenida la lectura.
- **Trivias y juegos:** permiten que el usuario ponga a prueba sus conocimientos y participe activamente durante el recorrido de la webstory.

En general, buscábamos que la página fuera intuitiva, atractiva y accesible tanto para los fanáticos de la Fórmula 1 como para quienes no conocen demasiado sobre este deporte. La interacción debía tener un sentido dentro de la historia, complementando el relato periodístico y facilitando la comprensión de los datos, sin perder de vista el objetivo principal de nuestra investigación: cuestionar si todos los equipos tienen realmente las mismas posibilidades de ganar.

## Registro de los principales encargos realizados a herramientas de IA o vibecoding, si fueron utilizadas para implementar la web (CHECHO).

## Cambios realizados por el equipo sobre el código generado o sugerido.

La intervención del equipo en el código producido por la IA fue constante durante todo el proceso de desarrollo.

**Depuración de datos y textos innecesarios**

Hacia la etapa final de la entrega, realizamos una limpieza del código para eliminar datos redundantes, etiquetas internas y textos de relleno que la IA agregaba por defecto y que entorpecían la lectura del reportaje.

**Incorporación de las visualizaciones previas**

El gráfico interactivo de las copas (Gráfico 1) no fue interpretado correctamente en las primeras versiones de la página. Para solucionar esto, incorporamos directamente su código HTML original, entregando instrucciones explícitas a la IA para que respetara su estructura y funcionamiento al integrarlo en la webstory.

**Herramientas temporales de revisión grupal**

Para facilitar la revisión entre los integrantes del equipo mientras realizábamos correcciones, incorporamos temporalmente dos herramientas en el pie de página: un botón de descarga directa del archivo HTML actualizado y un generador automático de archivos ZIP con todos los recursos necesarios para ejecutar la página de manera local.

## Problemas encontrados, iteraciones y soluciones aplicadas

Uno de los primeros desafíos, al menos para algunos integrantes del equipo, fue profundizar en los datos de un deporte que no conocíamos tanto y que tiene cierta complejidad. Esto dificultó en un inicio imaginar cómo sería nuestra página, qué contenido tendría y qué gráficos serían los más adecuados. Para solucionar esto, leímos bastante, vimos videos y nos fuimos adentrando cada vez más en el mundo de la Fórmula 1.

Por otro lado, uno de los mayores desafíos fue aprender a trabajar con código y comprender algunos aspectos básicos de la programación. Para esto, intentamos definir previamente cómo queríamos que se viera y funcionara cada elemento, para luego traspasar nuestras ideas a la IA y apoyarnos en ella para la implementación del código, procurando mantener nuestro propio trabajo periodístico.

Sin embargo, trabajar con IA fue más complicado de lo que imaginamos. Muchas veces ignoraba nuestras correcciones, incorporaba elementos que no habíamos solicitado o se alejaba de la idea inicial. Frente a esto, tuvimos que reiterar constantemente nuestra visión, ser más específicos con las instrucciones y pedirle que se ajustara a la información que le entregábamos.

En general, lo más complicado fue llevar a la práctica aquello que teníamos en mente. Tanto en la creación de los gráficos como en la programación final de la página, hubo mucha prueba y error, tiempos de carga y varias versiones de un mismo elemento hasta conseguir un resultado que se acercara a lo que habíamos imaginado como equipo.


## Pruebas finales de contenido, cifras, fuentes, visualizaciones, interacción, lectura en dispositivos móviles y funcionamiento del código.

### Exportación del archivo
En primer lugar, nos enfocamos en la creación y exportación del archivo HTML para poder visualizar nuestra página durante la presentación. Uno de los desafíos fue procurar que el código se trabajara en capas (HTML, CSS y JavaScript) que más adelante pudieran separarse, pero que en conjunto funcionaran correctamente.

### Navegación de prueba
Una vez que logramos descargar la primera versión de la página, comenzamos a recorrerla como si fuéramos los propios usuarios. Interactuamos con los gráficos, respondimos las preguntas de las trivias a partir de nuestros conocimientos e incluso probamos los juegos. Esto nos permitió evaluar tanto el funcionamiento de los elementos como la experiencia que queríamos generar en quienes visitaran nuestra webstory.

### Reconocimiento de errores
Durante estas primeras pruebas, nos dimos cuenta de que la IA había modificado algunos elementos que ya habíamos trabajado. Por ejemplo, nuestra primera visualización representaba los campeonatos ganados por cada escudería mediante copas, pero al integrarla en la página, esta había sido reemplazada por un gráfico de barras horizontales, perdiendo parte de la intención visual que habíamos definido anteriormente.

A partir de estas observaciones, fuimos identificando y corrigiendo distintos errores mediante un proceso de prueba y error. Cada vez que obteníamos una nueva versión de la página, volvíamos a recorrerla y a revisar los cambios, procurando que los elementos funcionaran correctamente y que se respetaran nuestras decisiones gráficas y narrativas.


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
