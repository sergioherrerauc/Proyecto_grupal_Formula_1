# Documentación del proceso de limpieza de datos

El objetivo de mi base fue organizar información sobre las temporadas de Fórmula 1 entre 2000 y 2025 para analizar qué tan concentradas estuvieron las victorias entre pilotos y constructores. Elegí trabajar con la temporada como unidad de análisis, por lo que cada fila representa un campeonato completo.

## Proceso de limpieza y construcción

Primero definí el período de estudio entre 2000 y 2025. No incluí 2026 porque la temporada todavía está en desarrollo y compararla con años completos podría alterar los resultados.

La principal fuente que utilicé fue la página oficial de Fórmula 1. Para cada temporada revisé los resultados de las carreras, la clasificación final de pilotos y la clasificación final de constructores. Con esta información registré la cantidad total de carreras, los pilotos ganadores distintos, los constructores ganadores distintos, el campeón mundial de pilotos, su escudería y el campeón mundial de constructores.

En un comienzo pensé en usar al piloto con más victorias como variable principal. Sin embargo, al revisar los datos noté que el piloto que gana más carreras no siempre termina siendo campeón, ya que el campeonato depende de los puntos acumulados durante toda la temporada. Por eso decidí trabajar con el campeón mundial y contar cuántas carreras ganó.

Después calculé el porcentaje de victorias del campeón de pilotos y del constructor campeón en relación con el total de carreras. También calculé el porcentaje correspondiente al resto. Esto permite comparar temporadas con distinta cantidad de Grandes Premios.

Además, agregué una columna de control para revisar que las victorias registradas nunca superaran el número total de carreras. También revisé que no existieran temporadas repetidas, datos faltantes o errores en los cálculos.

## Herramientas utilizadas:

Trabajé principalmente con Excel para ordenar los datos, aplicar fórmulas y calcular porcentajes.

También utilicé inteligencia artificial (ChatGPT) como apoyo para ordenar información, revisar fórmulas y estructurar mejor la base. De todas formas, revisé y corroboré manualmente los datos con las fuentes originales antes de incorporarlos. También usé inteligencia artificial para ayudarme a transformar algunas tablas al formato Markdown necesario para GitHub, pero revisé el resultado final antes de subirlo.

## Fuentes 

La fuente principal fue Formula1.com, porque corresponde al sitio oficial de la competencia y contiene los resultados históricos:

https://www.formula1.com/en/results/

También utilicé Jolpica F1 como fuente complementaria, ya que organiza datos históricos de Fórmula 1 y permite acceder a ellos mediante una API:

https://github.com/jolpica/jolpica-f1

## Preguntas que puedo responder con la base

*1. ¿Una mayor cantidad de pilotos ganadores significa una temporada más competitiva?*

Puedo comparar los pilotos ganadores distintos con el porcentaje de victorias del campeón para identificar temporadas con variedad de ganadores, pero con una alta concentración del éxito.

*2. ¿Qué porcentaje de las carreras gana el constructor campeón?*

La base permite comparar cuánto del calendario fue ganado por la escudería campeona y cuánto quedó repartido entre los demás equipos.

*3. ¿Cómo ha cambiado la cantidad de ganadores desde el año 2000?*

Puedo comparar año a año la cantidad de pilotos y constructores distintos que lograron ganar carreras.

*4. ¿El campeón de pilotos siempre pertenece al constructor campeón?*

Al comparar la escudería del campeón de pilotos con el campeón de constructores puedo identificar temporadas donde ambos títulos fueron obtenidos por equipos diferentes.

Con estas variables puedo crear tablas dinámicas y visualizaciones para comparar temporadas y analizar si una mayor variedad de ganadores significa realmente una competencia más equilibrada.
