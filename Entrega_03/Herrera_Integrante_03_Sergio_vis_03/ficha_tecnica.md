# Ficha técnica de la base de datos

**Nombre del dataset:** `database_limpia_F1_2015_2019.csv`  
**Autor:** Sergio Herrera  
**Cobertura temporal:** 2015 - 2019 (Era de gasto libre)  

## Caracterización de los datos
Con esta base de datos busqué recopilar, depurar y cruzar información financiera estimada con registros deportivos oficiales. Mi objetivo principal fue documentar empíricamente la asimetría económica de la Fórmula 1 antes de la instauración del límite presupuestario (*Cost Cap*), permitiendo evaluar la relación directa entre el dinero invertido por cada escudería y su rendimiento real en puntos sobre la pista.

## Variables incorporadas en la visualización
- `Equipo` (Texto): Nombre oficial de la escudería en la temporada analizada. Estandaricé la nomenclatura incluyendo entre paréntesis las denominaciones históricas y los cambios de marca (ej. *Aston Martin (Force India)* o *Alpine (Lotus/Renault)*) para asegurar la trazabilidad.
- `Año` (Entero): Temporada específica de la competición dentro del marco temporal que seleccioné (2015-2019).
- `Presupuesto_Millones_USD` (Numérico decimal): Estimación del gasto anual ejecutado por cada escudería, estructurado de forma ascendente para evidenciar la carrera armamentista financiera.
- `Categoria_Equipo` (Texto): Clasificación cualitativa que creé para agrupar visualmente a las escuderías en tres bloques estratégicos: "Top 3", "Zona Media" y "Zona Baja".
- `Puntos` (Entero): Unidades oficiales que se obtuvieron en el Campeonato de Constructores de la FIA.
- `Costo_Por_Punto_Millones_USD` (Numérico decimal): Indicador de eficiencia que calculé dividiendo el presupuesto total entre los puntos logrados.

## Observaciones metodológicas sobre los datos
- Tratamiento de ausencias: Tomé la decisión de eliminar y no graficar a los equipos que no participaron en determinadas temporadas (como el caso de Haas en 2015 antes de su debut oficial). Hice esto con el fin de simplificar la visualización y evitar barras vacías o distorsiones en la lectura de la audiencia.
- Criterio de acumulación y escala: Los datos me permiten entender tanto el fenómeno macroeconómico global del lustro como el comportamiento micro de los presupuestos anuales al aplicar el filtro interactivo.

## Enlaces y referencias de fuentes
- Datos financieros: [EssentiallySports - F1 Team Budgets (2015-2019)](https://www.essentiallysports.com/f1-news-what-are-the-budgets-for-f1-teams-including-mercedes-red-bull-ferrari/)[cite: 1]
- Registros deportivos oficiales: [Formula 1 Official Results - Constructor Standings](https://www.formula1.com/en/results.html)[cite: 1]