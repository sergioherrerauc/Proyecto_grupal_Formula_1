# Ficha Técnica y Diccionario de Datos

## De dónde sacamos los datos (Fuentes)
Esta base de datos cruza la plata gastada por las escuderías con su rendimiento real en la pista.
* **Datos Financieros (2015-2019):** Toda la información de presupuestos salió del artículo periodístico *"What are the Budgets for F1 Teams Including Mercedes, Red Bull & Ferrari?"* publicado en la plataforma EssentiallySports ([Enlace](https://www.essentiallysports.com/f1-news-what-are-the-budgets-for-f1-teams-including-mercedes-red-bull-ferrari/)).
* **Datos Deportivos (Puntos FIA):** Extraídos revisando año por año los registros históricos oficiales del Campeonato de Constructores en la web de la Fórmula 1 ([Enlace de consulta base](https://www.formula1.com/en/results/2026/team), ajustando el año en la URL según corresponda).

## Metodología
Primero, limpie la base obtenida de EssentiallySports para transformarla en una lista larga, dejando una fila única por equipo y por año. Nos quedamos estrictamente con el periodo 2015-2019 para reflejar la era de "gasto libre", descartando 2020 por la anomalía de la pandemia y 2021 en adelante por el nuevo reglamento del límite presupuestario. 

Luego, agregamos la columna de los puntos oficiales obtenidos. Con el dinero y los puntos listos, calculamos de forma automática la nueva métrica `Costo_Por_Punto` para medir la eficiencia financiera (dividiendo el presupuesto por los puntos logrados). Al equipo Haas se le asignaron valores en cero los años que aún no entraba a competir porque aún no entraban a competir en la categoría.

## Características principales
* **De dónde vienen:** Recopilación mixta (periodismo financiero + registros oficiales deportivos de la F1).
* **Cómo están guardados:** En un archivo `.csv` (texto separado por comas).
* **Qué tipo de datos son:** Números con decimales (presupuestos y costo por punto), números enteros (puntos y años) y texto (nombres y categorías).

---

# Diccionario de Datos

A continuación, el detalle de cada columna de nuestra base, explicado de forma simple:

* **`Equipo`**
  * **Qué es:** El nombre oficial de la escudería (algunos incluyen su nombre antiguo entre paréntesis).
  * **Ejemplo:** Mercedes, Aston Martin (Force India).
  * **Formato:** Texto.

* **`Año`**
  * **Qué es:** La temporada de la Fórmula 1 analizada. Abarca solo de 2015 a 2019 (nuestra era comprobable de gasto libre).
  * **Ejemplo:** 2015, 2018.
  * **Formato:** Número entero.

* **`Presupuesto_Millones_USD`**
  * **Qué es:** Toda la plata estimada que gastó el equipo en ese año en particular.
  * **Ejemplo:** 450.0, 149.8.
  * **Formato:** Número con decimales.

* **`Categoria_Equipo`**
  * **Qué es:** Una clasificación manual para separar a los equipos según la plata que manejan.
  * **Ejemplo:** Top 3, Zona Media, Zona Baja.
  * **Formato:** Texto.

* **`Puntos`**
  * **Qué es:** Los puntos oficiales ganados en el campeonato de ese año.
  * **Ejemplo:** 739, 43, 0.
  * **Formato:** Número entero.

* **`Costo_Por_Punto_Millones_USD`**
  * **Qué es:** Nuestra métrica calculada. Es el presupuesto dividido por los puntos. Muestra cuántos millones costó lograr un solo punto. Si no lograron puntos, el valor es 0.0.
  * **Ejemplo:** 0.75, 2.1.
  * **Formato:** Número con decimales.
 
# Anotaciones extras
### Vía secundaria de investigación a futuro

A futuro, sí sería interesante estudiar esas décadas pasadas, pero no tratando de adivinar presupuestos. La propuesta sería complementar este análisis con una nueva base de datos enfocada en las estimaciones que sí se han realizado, pero insisto, no son los datos verídicos como este otro periodo el cual fue el principal motor de cambio de la F1. Queda como propuesta para un análisis puramente enfocado en fallas mecánicas o tiempos de carrera donde no dependamos de balances financieros.

Decidí no incluir los años anteriores al 2015 porque, tras investigar exhaustivamente, me di cuenta de que esos datos están incompletos, son inexistentes e inclusive están malversados en algunos casos. 
En esa época, la Fórmula 1 no tenía regulaciones de auditoría claras. Si bien algunas marcas gigantes como Ferrari salían de repente a decir cuánto gastaban, esa no era la realidad de todos. La gran mayoría de los equipos chicos y medianos se mantenían a flote con platas de tabacaleras o tratos que nunca fueron públicos. Debido a esta falta de transparencia, auditorías y datos, es imposible hacer un contraste empírico y serio de cuánto gastaba realmente toda la parrilla. Por lo mismo, evité integrarlos por la falta de veracidad.
