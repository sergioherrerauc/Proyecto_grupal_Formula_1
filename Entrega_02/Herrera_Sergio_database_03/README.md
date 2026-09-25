# Documentación de Datos - Sergio Herrera Burgos

## Proceso de preparación y limpieza de datos

Al principio, los datos que recopilé estaban ordenados en una tabla de Excel (súper básica) los equipos hacia abajo y los años hacia la derecha. El problema de esto es que, al ingresarlo a un programa como Python, no lee bien estos cruces. Así que lo primero que hice fue limpiar esa base de datos obtenida en la web www.essentiallysports.com/f1-news-what-are-the-budgets-for-f1-teams-including-mercedes-red-bull-ferrari/ y transformar esto a una lista larga, donde cada fila es solo un equipo en un año en particular. 

La diferencia más grande con mi entrega anterior es que la base original solo tenía la plata pura y dura. Para poder enriquecerla, use esos datos financieros y los crucé con los **Puntos** oficiales de la FIA que hizo cada equipo en el campeonato aquellos años. Así al tener el dinero gastado y los puntos logrados, pude crear una nueva métrica a la que llamé `Costo_Por_Punto`. Gracias a esta métrica podemos reflejar la eficiencia real por las escuderias: a veces el que más gasta no es el que mejor rinde, y con esta columna podemos ver a qué equipo le salió carísimo cada punto y quién optimizó bien este recurso. (Nota: Las victorias y posiciones finales las estamos tratando en otra base de datos del grupo).

## Justificación del Marco Temporal (2015 - 2020)

Elegí enfocarme estrictamente en el periodo 2015-2020 porque me interesaba analizar empíricamente la era del "gasto libre", justo antes de que la Fórmula 1 añadira la política del límite de presupuesto (el famoso *Cost Cap* que partió oficialmente en 2021). 

Este bloque de años nos muestra el punto más alto de gasto sin regulaciones en la historia reciente, donde la brecha entre los tres equipos grandes y el resto de la parrilla era abismal, producto de esto mismo fue que se incentivó este reglamento. 

Los presupuestos de estos años están respaldados de forma empírica. Del 2015 al 2019 los saqué de la publicación periodística *"What are the Budgets for F1 Teams Including Mercedes, Red Bull & Ferrari?"* de EssentiallySports. Y para rellenar el año 2020 (año anterior al nuevo reglamento), me apoyé en las estimaciones financieras anuales publicadas por medios especializados como *RaceFans* y la revista *Forbes* (fuentes que a futuro se pueden seguir explorando para analizar años más recientes).

### Por qué descartamos los años hacia atrás 2000-2014 (por ahora)

Decidí no incluir los años anteriores al 2015 porque, tras investigar exhaustivamente, me di cuenta de que esos datos están incompletos, inexistentes e inclusive malversados en algunos casos. 

En esa época, la Fórmula 1 no tenía regulaciones de auditoría claras. Si bien algunas marcas gigantes como Ferrari salían de repente a decir cuánto gastaban, esa no era la realidad de todos. La gran mayoría de los equipos chicos y medianos se mantenían a flote con platas de tabacaleras o tratos que nunca fueron públicos. Debido a esta falta de transparencia, auditorias, y datos, es imposible hacer un contraste empírico y serio de cuánto gastaba realmente toda la parrilla, por lo mismo evite integrarlos por la falta de veracidad y de los mismos a su vez.

## Tres preguntas que se pueden responder con esta base de datos

1. ¿Cuál es la diferencia real en millones de dólares entre el gasto de un equipo "Top 3" y un equipo de la "Zona Baja" en el periodo de gasto libre (2015-2020)?
2. Mirando la métrica de `Costo_Por_Punto`, ¿qué escudería de la Zona Media logró ser más eficiente con su presupuesto en comparación a los líderes?
3. ¿Cómo fue subiendo año a año el gasto total de la Fórmula 1 antes de que la pandemia y la FIA obligaran a regularizar la situación en 2021?

 ### Vía secundaria de investigación a futuro

A futuro, sí sería interesante estudiar esas décadas pasadas, pero no tratando de adivinar presupuestos. La propuesta sería complementar este análisis con una nueva base de datos enfocada en las estimaciones que si se han realizado, pero insisto no son los datos veridicos como este otro periodo el cual fue el principal motor de cambio de la F1.
