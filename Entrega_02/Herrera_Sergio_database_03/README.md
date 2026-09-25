# Documentación de Datos 

## Proceso de preparación y limpieza de datos

Al principio, los datos que recopilé estaban ordenados en una tabla de Excel (súper básica) con los equipos hacia abajo y los años hacia la derecha. El problema de esto es que, al ingresarlo a un programa como Python, no lee bien estos cruces. Así que lo primero que hice fue limpiar esa base de datos obtenida en la web [EssentiallySports] y transformar esto a una lista larga, donde cada fila es solo un equipo en un año en particular. 
Además, visite y utilice como base de datos los puntos obtenidos por escuderías consultando la web oficial de la F1.  

Fuentes de los Datos en Simple:

* **Datos Financieros (2015-2019):** Estimaciones de gastos obtenidas del artículo periodístico *"What are the Budgets for F1 Teams Including Mercedes, Red Bull & Ferrari?"* publicado en la plataforma EssentiallySports. (https://www.essentiallysports.com/f1-news-what-are-the-budgets-for-f1-teams-including-mercedes-red-bull-ferrari/)
* **Datos Deportivos (Puntos FIA):** Extraídos de los registros históricos oficiales, revisando por año. (https://www.formula1.com/en/results/2026/team)

La diferencia más grande con mi entrega anterior es que la base original solo tenía la plata pura y dura. Para poder enriquecerla, usé esos datos financieros y los crucé con los **Puntos** oficiales de la FIA que hizo cada equipo en el campeonato aquellos años. Así, al tener el dinero gastado y los puntos logrados, pude crear una nueva métrica a la que llamé `Costo_Por_Punto`. Gracias a esta métrica podemos reflejar la eficiencia real de las escuderías: a veces el que más gasta no es el que mejor rinde, y con esta columna podemos ver a qué equipo le salió carísimo cada punto y quién optimizó bien este recurso. *(Nota: Las victorias y posiciones finales se trataran en otra base de datos del grupo).*

## Justificación del Marco Temporal (2015 - 2019)

Elegí enfocarme estrictamente en el periodo 2015-2019 porque me interesaba analizar empíricamente la era del "gasto libre", justo antes de que la Fórmula 1 añadiera la política del límite de presupuesto (el famoso *Cost Cap* que partió oficialmente en 2021). 

Este bloque de años nos muestra el punto más alto de gasto sin regulaciones en la historia reciente, donde la brecha entre los tres equipos grandes y el resto de la parrilla era abismal; producto de esto mismo fue que se incentivó este reglamento. 

Los presupuestos de estos años están respaldados de forma empírica. Del 2015 al 2019 están respaldados debido a la implementación de normas regulatorias sobre los gastos en estas mismcas carreras. Obtenidos de la publicación periodística *"What are the Budgets for F1 Teams Including Mercedes, Red Bull & Ferrari?"* de EssentiallySports. 

Respecto al año 2020, este quedó definitivamente fuera de la matriz debido a la anomalía histórica que representó la "pandemia". Durante esa temporada, el calendario de eventos no se realizó con normalidad y los aforos fueron cancelados. Si bien la Fórmula 1 como organización registró grandes pérdidas económicas, las estimaciones de gasto de las escuderías de ese año fueron anómalas en su ciclo de inversión y desarrollo natural en los monoplazas. Que igualmente será tratado en una base de datos futura pero con esa anotación de lo que supuso mundialmente la pandemia en estos eventos.


## Tres preguntas que se pueden responder con esta base de datos

1. ¿Cuál es la diferencia real en millones de dólares entre el gasto de un equipo "Top 3" y un equipo de la "Zona Baja" en el último lustro de gasto libre (2015-2019)?
2. Mirando la métrica de `Costo_Por_Punto`, ¿qué escudería de la Zona Media logró ser más eficiente con su presupuesto en comparación a los líderes?
3. ¿Cómo fue subiendo año a año el gasto total de la Fórmula 1 justo antes del colapso que generó la pandemia en 2020?

### Vía secundaria de investigación a futuro

A futuro, sí sería interesante estudiar esas décadas pasadas, pero no tratando de adivinar presupuestos. La propuesta sería complementar este análisis con una nueva base de datos enfocada en las estimaciones que sí se han realizado, pero insisto, no son los datos verídicos como este otro periodo el cual fue el principal motor de cambio de la F1. Queda como propuesta para un análisis puramente enfocado en fallas mecánicas o tiempos de carrera donde no dependamos de balances financieros.

Decidí no incluir los años anteriores al 2015 porque, tras investigar exhaustivamente, me di cuenta de que esos datos están incompletos, son inexistentes e inclusive están malversados en algunos casos. 
En esa época, la Fórmula 1 no tenía regulaciones de auditoría claras. Si bien algunas marcas gigantes como Ferrari salían de repente a decir cuánto gastaban, esa no era la realidad de todos. La gran mayoría de los equipos chicos y medianos se mantenían a flote con platas de tabacaleras o tratos que nunca fueron públicos. Debido a esta falta de transparencia, auditorías y datos, es imposible hacer un contraste empírico y serio de cuánto gastaba realmente toda la parrilla. Por lo mismo, evité integrarlos por la falta de veracidad.
