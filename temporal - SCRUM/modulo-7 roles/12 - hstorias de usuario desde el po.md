### Historias de Usuario (User Stories)

Mientras los criterios SMART nos permiten establecer metas alcanzables, los criterios INVEST nos permiten establecer el tamaño de las US (User Stories) 

Cuando las US resultan excesivamente grandes o requieren mucho esfuerzo, para evitar esto refinamos las US con el criterio INVEST:

I: Independent:
    Cada US debe ser independiente.
    Antes de asignar una US al PB está debe tener nula 
    cantidad de impedimentos para realizarla (sean o no burocraticos), todo esto se debe gestionar antes de comenzar el Sprint para poderlo incluir en el PB - SB.
N: Negotiable:
    La US debe estar lo suficientemente clara para que el ST pueda discutir sobre ella, debe tener claro el DoR 
V: Valuable:
    La US aporta valor al Producto/Servicio que queremos lograr?
E: Estimable:
    Es lo suficientemente clara para que los Devs la puedan estimar?
S: Small:
    Es lo suficientemente pequeña para ser resuelta en la iteración (Sprint)
T: Testable:
    Tiene los Criterios de Aceptación muy claros para que el ST pueda comprobar que los estandares de calidad y resultados se están cumpliendo al finalizar la US

Si alguna US no pasa alguno de estos puntos debe ser refinada nuevamente, una vez que la US pasa los filtros del criterio INVEST debemos:
* Crear la Carta (Herramienta visual para destacar los puntos principales desde el enfoque del Usuario del Producto -dicha Carta puede estar hecha en Jira por ejemplo-)
* Refinamiento: La Carta se refinará con el ST (Podrían estar los Stakeholders), se busca entender el aporte de valor que producirá, que efectos y resultados se esperan que produzca, sacar dudas para hacerla y validar su realización.
* Confirmación: Acuerdo entre los Creadores (ST, principalmente los Devs) e Interesados (Stakeholders), puede manifestarse como CA suele usarse la regla de: DADO (Contexto), CUÁNDO (Acción), ENTONCES (Resultado)

#### Refinar US

7 Dimensiones de Slicing para refinarlas (si aún las US son muy grandes), no es una regla que pase por todas las dimensiones e incluso solo puede llegar a ser necesario una sola:

* Usuario:
    Quién interactúa con el Producto
* Interfaz:
    Qué interfaces externas puede tener?
    Se relaciona con otros dispositivos?
* Acciones:
    Qué hará el Producto
* Datos:
    ¿Qué datos puede tener/buscar/guardar?
* Control:
    ¿Qué tipo de controles de pasar?
* Ambiente:
    ¿En que contexto usará/acudirá a nuestro Producto?
* Calidad:
    ¿Qué normas de calidad deberá pasar?
    ¿Cómo se garantizará una buena UX?

#### Épicas
    
Son US grandes que no son logrables en 1 Sprint, su estimación será a alto nivel

* Deben subdividirse en otras US para poder generar valor, usando el Refinamiento como base
* PO, SM, y Devs trabajan juntos creando el Roadmap Prioritario sobre cuál Épica debe ir primero

#### User Story Mapping

Es una técnica que permite estimar y mostrar una idea a los Stakeholders como se va a ir desarrollando el Producto, de cara al ST permite mostrar cuál es la mejor forma de desarrollar determinadas Épicas y US
