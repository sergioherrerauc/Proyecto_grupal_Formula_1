# Ficha técnica y diccionario de datos

## Fuente de los datos
La base fue construida principalmente con información oficial de Formula 1, utilizando los resultados de carreras, la clasificación final de pilotos y la clasificación final de constructores para las temporadas 2000–2025.
Como fuente complementaria se utilizó Jolpica F1, una API de datos históricos de Fórmula 1 que permite contrastar y reproducir la información.


https://www.formula1.com/en/results/2000/races

https://github.com/jolpica/jolpica-f1

## Metodología de construcción
Cada fila representa una temporada de Fórmula 1 entre 2000 y 2025. Para cada año se registró la cantidad de carreras, los pilotos y constructores ganadores distintos, el campeón mundial de pilotos y su escudería, y el campeón mundial de constructores.
Luego se contabilizaron las victorias obtenidas por cada campeón y se calcularon sus porcentajes respecto al total de carreras, además del porcentaje correspondiente al resto de los competidores.

## Alcance de los datos
La base considera 26 temporadas completas, desde 2000 hasta 2025. La unidad de análisis es la temporada y no se incluyen carreras sprint ni la temporada 2026, ya que todavía está en desarrollo.
Características de los datos
La base contiene variables numéricas, porcentuales, categóricas y textuales. Su estructura permite comparar temporadas con diferente cantidad de carreras y observar qué tan concentradas estuvieron las victorias en los campeones.

## Otras observaciones
El piloto campeón no necesariamente es quien ganó más carreras durante la temporada, ya que el campeonato se define mediante la acumulación de puntos. Por esta razón, la base trabaja con el campeón mundial y analiza qué proporción de las carreras consiguió ganar.

## Diccionario de datos

| Variable | Descripción | Tipo de dato | Valores posibles | Observaciones |
|---|---|---|---|---|
| Temporada | Año del campeonato. | Entero | 2000–2025 | Una fila por temporada. |
| Total Carreras | Cantidad de Grandes Premios disputados. | Entero | Número positivo | No incluye sprints. |
| Pilotos Ganadores Distintos | Cantidad de pilotos diferentes que ganaron al menos una carrera. | Entero | 1 o más | Mide diversidad de ganadores. |
| Constructores Ganadores Distintos | Cantidad de equipos diferentes que ganaron al menos una carrera. | Entero | 1 o más | Mide diversidad de escuderías ganadoras. |
| Campeón Mundial Piloto | Piloto campeón de la temporada. | Texto | Nombre del piloto | Puede no ser quien más carreras ganó. |
| Escudería Piloto Campeón | Equipo con el que compitió el campeón de pilotos. | Texto | Nombre de escudería | Puede ser distinta al campeón de constructores. |
| Victorias Campeón Piloto | Carreras ganadas por el campeón de pilotos. | Entero | 0 al total de carreras | Solo considera Grandes Premios. |
| Porcentaje Victorias Campeón Piloto | Porcentaje de carreras ganadas por el campeón. | Porcentaje | 0–100 % | Victorias del campeón dividido por el total de carreras. |
| Porcentaje Victorias Resto Pilotos | Porcentaje de carreras ganadas por los demás pilotos. | Porcentaje | 0–100 % | Complemento del porcentaje del campeón. |
| Campeón Mundial Constructor | Escudería campeona del campeonato de constructores. | Texto | Nombre de escudería | Puede ser distinta a la escudería del campeón de pilotos. |
| Victorias Campeón Constructor | Carreras ganadas por la escudería campeona. | Entero | 0 al total de carreras | Suma las victorias de sus pilotos. |
| Porcentaje Victorias Campeón Constructor | Porcentaje de carreras ganadas por el constructor campeón. | Porcentaje | 0–100 % | Victorias del constructor dividido por el total de carreras. |
| Porcentaje Victorias Resto Constructores | Porcentaje ganado por las demás escuderías. | Porcentaje | 0–100 % | Complemento del porcentaje del campeón. |
