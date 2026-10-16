# Documentación del Proceso de Visualización Atómica - Sergio Herrera

## Explicación del proceso y decisiones tomadas

El desarrollo de esta visualización de datos no fue un proceso lineal, sino el resultado de múltiples errores y decisiones en el camino, las cuales fueron enfocadas en resolver un problema narrativo central: ¿cómo comunicar eficazmente una gran cantidad de variables complejas (escuderías, temporadas, presupuestos, puntos y eficiencia de costos) sin saturar al lector?

### 1. Descarte de alternativas gráficas y selección del formato final
En las primeras etapas de exploración, se evaluaron diversas alternativas gráficas. Se consideraron diagramas de dispersión como central idea, los cuales fueron descartados al tiempo porque la alta concentración de datos entre grandes y pequeños equipos era demasiado lo cual hacia difícl la lectura; generaban una dispersión confusa y de difícil selección. Asimismo, se analizaron gráficos circulares y barras estáticas, pero fueron inútiles para comparar de forma limpia el comportamiento individual de la mayoría de los equipos participativos por año. 

Tras evaluar estas limitaciones, se optó por un gráfico de barras horizontales ordenadas por magnitud de presupuesto, priorizando la jerarquía financiera de un solo vistazo y combinándola con las métricas clave de la investigación.

### 2. Interactividad y estructura de visualización: Global y por temporada
Para resolver la complejidad temporal (2015-2019), se implementó un menú de selección interactivo por años:
- **Vista Global Inicial:** Un recuento histórico global acumulado de los años analizados, diseñado como punto de partida para dimensionar el impacto financiero general (de la era de gasto libre).
- **Desglose Dinámico por Temporada:** Mediante el selector inferior, el usuario puede redirigirse y filtrar la información año a año (2015, 2016, 2017, 2018 y 2019), observando cómo fluctuaba la participación y el presupuesto de cada escudería en su contexto específico.

### 3. Codificación estética 
Una de las decisiones clave para guiar la lectura del público fue la asignación de colores por categorías ("Top 3", "Zona Media" y "Zona Baja"). Esto se hizo con la intención de que la audiencia pudiera seguir con la mirada la dominancia económica de los equipos punteros frente a los independientes, esto a lo largo de los años. Los colores buscan hacer alto contraste y permiten percibir de inmediato quiénes manejaban el capital y quiénes competían en bloques inferiores.

### 4. Simplificación
Para evitar un exceso de texto, opte por una interfaz más simpple. Toda la información de soporte, como los puntos exactos obtenidos en el campeonato de la FIA y la métrica derivada del costo por punto, se integró de forma interactiva, de modo que al pasar el cursor sobre cada barra se despliegue un desglose detallado, facilitando una lectura ágil.

> **Nota técnica:** Para la materialización de este desarrollo, en parte del código utilicé el apoyo de la inteligencia artificial de "Gemini", con la cual logré perfeccionar la selección por años principalmente.

## Base de Datos seleccionada y procesamiento
- **Archivo utilizado:** `database_limpia_F1_2015_2019.csv`
- **Procesamiento:** Los datos financieros obtenidos de fuentes periodísticas especializadas se cruzaron con los registros oficiales de la FIA. Se estandarizaron los nombres de las escuderías (agregando denominaciones históricas entre paréntesis ante cambios corporativos) y se eliminó la categoría "No Participó" para evitar ruido visual en las barras por años. Se estructuró en Google Colab mediante la librería Altair de Python.

## Preguntas que busca responder la visualización
1. ¿Cuál era la brecha real de inversión entre los equipos dominantes del "Top 3" frente al resto de la parrilla en el acumulado global de la era de gasto libre?
2. ¿Cómo varió el presupuesto anual de una escudería específica al cambiar de temporada en el menú interactivo?
3. ¿De qué manera la inversión desmedida contrastaba con el rendimiento real medido a través de la eficiencia del costo por punto?

## Proyección
Si bien las opciones implementadas responden, a futuro busco optimizar el diseño gráfico buscando un mayor atractivo visual. Esto incluye la incorporación de la paleta de colores oficial de las escuderías o la integración de logotipos y elementos gráficos institucionales alusivos a la Fórmula 1, enriqueciendo la experiencia estética del lector, esto  para webstory final.
