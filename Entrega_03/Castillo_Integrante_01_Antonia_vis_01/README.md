# README Individual – Entrega 03

**Título de la visualización:** No todos los campeones arrasan.

## 1. Proceso de construcción de la visualización

Para esta entrega desarrollé una visualización interactiva utilizando Python y la librería Altair, con el objetivo de mostrar cómo ha evolucionado la concentración de victorias de los campeones mundiales de pilotos de Fórmula 1 entre 2016 y 2025.

Inicialmente consideré distintas alternativas de visualización, incluyendo gráficos de barras y gráficos de puntos. Sin embargo, finalmente opté por un **gráfico de líneas**, ya que consideré que permitía representar de manera más clara la evolución del porcentaje de victorias de los campeones a lo largo del tiempo.

También decidí utilizar porcentajes en lugar de cantidades absolutas de victorias, debido a que el número de carreras disputadas varía entre temporadas. De esta manera, puedo realizar comparaciones proporcionales sin que las diferencias en la extensión del calendario distorsionen los resultados.

Para facilitar la interpretación, incorporé una línea horizontal de referencia en el 50%, que permite identificar las temporadas en que el campeón ganó más o menos de la mitad de las carreras.

Además, añadí puntos interactivos que permiten consultar información adicional al pasar el cursor o hacer clic sobre cada temporada. Estos muestran el nombre del campeón mundial, su escudería, la cantidad de victorias obtenidas, el total de carreras disputadas y el porcentaje correspondiente.

Decidí no destacar ningún año de manera predeterminada, con el propósito de permitir una exploración libre de los datos, sin dirigir inicialmente la atención del lector hacia una temporada específica.

**Uso de inteligencia artificial:** Para la construcción del código utilicé ChatGPT como herramienta de apoyo en la programación con Python y Altair, especialmente para estructurar el script, desarrollar la interactividad y exportar la visualización. Las decisiones sobre el enfoque periodístico, la selección de los datos y el diseño del gráfico las fui tomando durante el desarrollo del trabajo.

## 2. Base de datos utilizada y procesamiento

Para realizar esta visualización utilicé el archivo CSV que elaboré para la Entrega 02 del proyecto semestral. Esta base contiene información de 26 temporadas de Fórmula 1, desde 2000 hasta 2025, y la construí a partir de resultados oficiales de Fórmula 1 y datos históricos disponibles en Jolpica F1.

**Fuentes:**

- [Resultados oficiales de Fórmula 1](https://www.formula1.com/en/results/2000/races)
- [Jolpica F1](https://github.com/jolpica/jolpica-f1)

Para esta visualización seleccioné únicamente las temporadas comprendidas entre 2016 y 2025, con el objetivo de analizar el comportamiento de los campeones durante la última década disponible en mi base, ya que se pueden apreciar cambios en el reglamento que repercutieron en los resultados..

Utilicé las siguientes variables:

- Temporada
- Campeon Mundial - Piloto
- Escuderia Piloto Campeon
- Total Carreras
- Victorias Campeon - Piloto
- Porcentaje Victorias Campeon - Piloto

Realicé el procesamiento mediante Python. Primero, cargué el archivo CSV y filtré las diez temporadas seleccionadas. Posteriormente, transformé los porcentajes almacenados como texto, eliminando el símbolo de porcentaje y convirtiéndolos a valores numéricos para poder representarlos gráficamente.

Luego, ordené los registros cronológicamente para construir la línea temporal. Finalmente, generé la visualización con Altair y la exporté en formatos HTML, para su exploración interactiva, y JPG, para su presentación estática.

No modifiqué la base original ni creé un CSV reducido. Reutilicé el mismo archivo de la Entrega 02 y realicé la selección y el procesamiento necesarios directamente en el script de Python.

## 3. Preguntas que responde la visualización

Mi visualización se relaciona principalmente con una de las preguntas de investigación que planteamos en la Entrega 02:

**¿Qué tan concentradas están las victorias entre pilotos y escuderías desde el año 2000?**

Para contribuir a responderla, decidí analizar específicamente la concentración de victorias de los campeones mundiales de pilotos durante las temporadas 2016–2025. Si bien mi gráfico no abarca todo el período de investigación ni la concentración entre escuderías, permite observar qué porcentaje de las carreras ganó cada campeón y cómo evolucionó esta proporción durante la última década.

Además, a través de mi visualización busco explorar otras preguntas específicas:

- ¿Es necesario ganar más de la mitad de las carreras para convertirse en campeón?
- ¿Cómo cambió la concentración de victorias durante los campeonatos consecutivos de Lewis Hamilton y Max Verstappen?
- ¿Qué tan excepcional fue el dominio de Max Verstappen en 2023 en comparación con las otras temporadas analizadas?

A partir de estas preguntas, busco identificar las diferencias en los niveles de dominio de los campeones mundiales y mostrar que el título puede conseguirse con porcentajes de victorias muy distintos.

Con mi visualización no pretendo medir por sí sola la competitividad general de cada campeonato, sino analizar específicamente la proporción de carreras ganadas por el piloto que obtuvo el título mundial.
