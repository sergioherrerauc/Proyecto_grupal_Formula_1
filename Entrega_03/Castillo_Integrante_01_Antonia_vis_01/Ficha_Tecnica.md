# Ficha técnica de la base de datos

## 1. Características de los datos

La base de datos contiene información de 26 temporadas de Fórmula 1, comprendidas entre los años 2000 y 2025. Cada fila representa una temporada e incluye variables numéricas, categóricas y porcentuales relacionadas con la cantidad de carreras disputadas, los campeones mundiales de pilotos y constructores, y la distribución de victorias.

Para esta entrega se utilizó la misma base de datos limpia presentada en la Entrega 02, sin realizar modificaciones al archivo original. La visualización considera únicamente las temporadas 2016–2025, seleccionadas mediante Python para analizar la evolución del porcentaje de victorias de los campeones mundiales de pilotos durante la última década.

#### Fuente de los datos
La base fue construida principalmente con información oficial de Formula 1, utilizando los resultados de carreras, la clasificación final de pilotos y la clasificación final de constructores para las temporadas 2000–2025.
Como fuente complementaria se utilizó Jolpica F1, una API de datos históricos de Fórmula 1 que permite contrastar y reproducir la información.

https://www.formula1.com/en/results/2000/races

https://github.com/jolpica/jolpica-f1

## 2. Variables incorporadas

| Variable | Descripción |
|---|---|
| Temporada | Año correspondiente al campeonato de Fórmula 1. |
| Total Carreras | Cantidad total de Grandes Premios disputados durante la temporada. |
| Pilotos Ganadores Distintos | Número de pilotos diferentes que ganaron al menos una carrera. |
| Constructores Ganadores Distintos | Número de escuderías diferentes que ganaron al menos una carrera. |
| Campeon Mundial - Piloto | Nombre del piloto campeón mundial de la temporada. |
| Escuderia Piloto Campeon | Escudería con la que compitió el campeón mundial de pilotos. |
| Victorias Campeon - Piloto | Cantidad de carreras ganadas por el campeón mundial de pilotos. |
| Porcentaje Victorias Campeon - Piloto | Porcentaje de carreras ganadas por el campeón mundial respecto al total de la temporada. |
| Porcentaje Victorias Resto - Pilotos | Porcentaje de carreras ganadas por los demás pilotos durante la temporada. |
| Campeon Mundial - Constructor | Nombre de la escudería campeona mundial de constructores. |
| Victorias Campeon - Constructor | Cantidad de carreras ganadas por la escudería campeona. |
| Porcentaje Victorias Campeon - Constructor | Porcentaje de carreras ganadas por el constructor campeón respecto al total de la temporada. |
| Porcentaje Victorias Resto - Constructores | Porcentaje de carreras ganadas por las demás escuderías durante la temporada. |

## 3. Observaciones sobre la base de datos

- La base considera únicamente los resultados de los Grandes Premios, sin incluir las carreras sprint.
- El campeón mundial de pilotos no necesariamente corresponde al piloto que obtuvo más victorias durante la temporada, ya que el campeonato se define mediante la acumulación de puntos.
- Los porcentajes permiten comparar temporadas con distinta cantidad de carreras, evitando que las diferencias en la extensión del calendario afecten la comparación.
- Para construir la visualización, los porcentajes almacenados como texto fueron convertidos a valores numéricos mediante Python, sin alterar la base de datos original.
