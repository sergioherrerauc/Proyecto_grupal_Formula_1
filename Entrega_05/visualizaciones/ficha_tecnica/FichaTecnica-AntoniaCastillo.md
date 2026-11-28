# Ficha técnica y diccionario de datos

## 1. Características y alcance de los datos

La base de datos contiene información de 26 temporadas de Fórmula 1, comprendidas entre los años 2000 y 2025. Cada fila representa una temporada e incluye variables numéricas, categóricas y porcentuales relacionadas con la cantidad de carreras disputadas, los campeones mundiales de pilotos y constructores, y la distribución de victorias.

Para esta entrega se utilizó la misma base de datos limpia presentada en la Entrega 02, sin realizar modificaciones al archivo original. Para la visualización se seleccionaron las temporadas 2016–2025 mediante Python, con el objetivo de analizar la evolución del porcentaje de victorias de los campeones mundiales de pilotos durante la última década.

## 2. Fuente de los datos

La base fue construida principalmente con información oficial de Formula 1, utilizando los resultados de carreras, la clasificación final de pilotos y la clasificación final de constructores para las temporadas 2000–2025. Como fuente complementaria se utilizó Jolpica F1, una API de datos históricos de Fórmula 1 que permite contrastar y reproducir la información.

- [Formula 1 – Resultados históricos](https://www.formula1.com/en/results/2000/races)
- [Jolpica F1 – API de datos históricos](https://github.com/jolpica/jolpica-f1)

## 3. Metodología de construcción

Para cada temporada se registró la cantidad total de carreras, los pilotos y constructores ganadores distintos, el campeón mundial de pilotos y su escudería, y el campeón mundial de constructores.

Luego se contabilizaron las victorias obtenidas por cada campeón y se calcularon sus porcentajes respecto al total de carreras, además del porcentaje correspondiente al resto de los competidores.

Los porcentajes permiten comparar temporadas con distinta cantidad de carreras, evitando que las diferencias en la extensión del calendario afecten la comparación. Para construir la visualización, los porcentajes almacenados como texto fueron convertidos a valores numéricos mediante Python, sin modificar la base de datos original.

## 4. Diccionario de datos

| Variable | Descripción | Tipo de dato | Valores posibles | Observaciones |
|---|---|---|---|---|
| Temporada | Año del campeonato. | Entero | 2000–2025 | Una fila por temporada. |
| Total Carreras | Cantidad de Grandes Premios disputados. | Entero | Número positivo | No incluye carreras sprint. |
| Pilotos Ganadores Distintos | Cantidad de pilotos diferentes que ganaron al menos una carrera. | Entero | 1 o más | Mide la diversidad de ganadores. |
| Constructores Ganadores Distintos | Cantidad de escuderías diferentes que ganaron al menos una carrera. | Entero | 1 o más | Mide la diversidad de equipos ganadores. |
| Campeón Mundial Piloto | Nombre del piloto campeón de la temporada. | Texto | Nombre del piloto | No necesariamente es quien más carreras ganó. |
| Escudería Piloto Campeón | Equipo con el que compitió el campeón de pilotos. | Texto | Nombre de escudería | Puede ser distinta al campeón de constructores. |
| Victorias Campeón Piloto | Cantidad de carreras ganadas por el campeón de pilotos. | Entero | 0 al total de carreras | Solo considera Grandes Premios. |
| Porcentaje Victorias Campeón Piloto | Porcentaje de carreras ganadas por el campeón de pilotos. | Porcentaje | 0–100 % | Victorias del campeón divididas por el total de carreras. |
| Porcentaje Victorias Resto Pilotos | Porcentaje de carreras ganadas por los demás pilotos. | Porcentaje | 0–100 % | Complemento del porcentaje del campeón. |
| Campeón Mundial Constructor | Nombre de la escudería campeona del campeonato de constructores. | Texto | Nombre de escudería | Puede ser distinta a la escudería del campeón de pilotos. |
| Victorias Campeón Constructor | Cantidad de carreras ganadas por la escudería campeona. | Entero | 0 al total de carreras | Suma las victorias de sus pilotos. |
| Porcentaje Victorias Campeón Constructor | Porcentaje de carreras ganadas por el constructor campeón. | Porcentaje | 0–100 % | Victorias del constructor divididas por el total de carreras. |
| Porcentaje Victorias Resto Constructores | Porcentaje de carreras ganadas por las demás escuderías. | Porcentaje | 0–100 % | Complemento del porcentaje del constructor campeón. |

## 5. Observaciones y consideraciones

- La base considera 26 temporadas completas, desde 2000 hasta 2025. No se incluye la temporada 2026, ya que todavía se encuentra en desarrollo.
- Se consideran únicamente los resultados de los Grandes Premios, sin incluir las carreras sprint.
- El campeón mundial de pilotos no necesariamente es quien obtuvo más victorias durante la temporada, ya que el campeonato se define mediante la acumulación de puntos.
- El campeón de pilotos y el campeón de constructores pueden ser diferentes, por lo que se consideran como variables independientes.
- Los porcentajes permiten comparar temporadas con distinta cantidad de carreras.
- La visualización utiliza únicamente las temporadas 2016–2025, mientras que la base de datos conserva el período completo 2000–2025.
