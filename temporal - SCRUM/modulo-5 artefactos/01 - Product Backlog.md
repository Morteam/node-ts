## Product Backlog (o Pila de producto)

Este artefacto de Scrum, es un elemento contenedor de una lista dinámica de tareas (o PBI Product Backlog Item) que debemos hacer para alcanzar el Product Goal, es decir para concluir satisfactoriamente el Producto/Servicio final. Un correcto Product Backlog debe ser:

* D: **Detallado**:
    Debe tener un contexto claro y a muy alto nivel para informar al Scrum Team, pero tampoco debe ser un documento exhaustivo
* E: **Estimado**:
    El Scrum Team debe estimar la duración de la realización de cada tarea a muy grandes rasgos 
* E: **Emergente/Adaptable**:
    A medida que pasán las iteraciones debe tener la capacidad de adaptarse a las necesidades/feedback del Cliente/Usuarios, además de que debe generar valor al Producto
* P: **Priorizado**:
    Debe estar priorizado acorde a lo que genera más valor al Producto en la parte superior, mientras lo que genera menos valor en la parte inferior

El **Product Owner** es el responsable principal y máxima autoridad del Product Backlog, cualquier integrante del Scrum Team puede agregar tareas al Product Backlog, pero es responsabilidad del Product Owner si las incluye finalmente o no y de asignarle una prioridad según considere.

El **Product Goal** es el compromiso/meta del Producto, es el proposito final a lograr, el objetivo al cuál con cada Iteración vamos a ir aproximandonos. El Scrum Team se comprometerá a un Product Goal y no lo cambiará hasta haber conseguido/cumplido la vigente. Este Product Goal debe ser:

* S: Specific/Específico
* M: Measurable/Medible
* A: Achievable/Lograble
* R: Relevant/Relevante
* T: Time-oriented/Limitado en el tiempo


### Creando un Product Backlog

Acorde al criterio de cada proyecto, se puede crear basado en Épicas > Historias de Usuario > Tareas Técnicas o solo Historias de Usuario o solo Tareas Técnicas

* Épicas:
    Son tareas Historias de Usuario grandes que por su duración y complejidad no van a poder ser resultas en un solo Sprint (por ende se va a requerir más Sprint y esfuerzo)
* Historias de Usuario:
    Representa desde la optica del usuario final parte de una funcionalidad que es realizable en 1 Sprint, debe ser entendible para cualquier persona y debe estar descrito FUERTEMENTE orientado al Cliente
* Tareas técnicas:
    Representa el esfuerzo técnico

#### Principio de Pareto

El Principio de Pareto (20/80) indica que el 20% de algo genera el 80% de la causa, eso quiere decir que con el 20% de las Historias de Usuario deberíamos haber construido el 80% del Producto Final o haber creado el 80% del valor o utilidad del Producto Final.

La idea es estimar con puntos las  distintas Historia de Usuario acorde al Valor que darían al Producto Final y usar el Principio de Pareto para priorizar cuáles tareas deben realizarse primero de acuerdo al Valor que aportarán

### Creando Historias de Usuario

Cada PBI (Product Backlog Item) debería tener detallada la estimación en tiempo, la descripción, el orden y el valor. Las historias de Usuario son una opción a la hora de crear PBI (otras son las Épicas y las Tareas Técnicas)

Las Historias de Usuario deben brindar información sin entrar en excesivo detalle y dejando el panorama abierto para poder adaptarnos si se requiere, es decir sin ser restrictivos

Cómo (Quién) Quiero (Qué) Para (Objetivo), ej:

Cómo *estudiante del curso* quiero *aprender mucho en este curso* para *poder certificarme y tener un mejor trabajo*


### Priorizar el Product Backlog

Algunas variables a la hora de priorizar PBIs son:

* Tiempo
* Esfuerzo
* Valor Funcional
* Urgencia
* Opinión de los Stakeholders
* Opinión del equipo
* Valor del Mercado (ROI - Return Of Investment)

#### MoSCoW

Prioriza los PBIs respecto a las variables de priorización a usar y a:

Mo: Must have / Tenemos qué - Prioridad 1 Siempre se debe concluir
S: Should / Deberíamos - Prioridad 2 Debemos tratar de concluirla
Co: Could have / Podríamos - Prioridad 3 Si nos da el tiempo la concluimos
W: Won't but would have / No ahora, pero... - Prioridad 4 No es necesario concluirla, pero si hay tiempo se concluye

#### Kano

Este método es realmente útil cuando se requiera una mayor personalización del Producto/Servicio de cara a un usuario demasiado especifico, consiste en clasificar los PBIs de acuerdo a 5 carácteristicas:

* Atractiva:
    Es una carácteristica de valor agregado, es un elemento diferenciador que aporta sin embargo si esta carácteristica no existe no pasa nada, su prioridad es baja
* Unidimensional:
    Carácteristicas que de estar el cliente estará contento, pero de no estar acorde a lo ofrecido el cliente estará molesto, no son carácteristicas necesarias
* Requerida:
    Carácteristica que el usuario espera que tenga el proyecto (necesario), de no estar los usuarios estarán realmente molestos, su prioridad es alta
* Indiferente:
    Carácteristicas que al cliente le dará exactamente igual si están o no, prioridad muy baja
* Inversa:
    Carácteristicas que están ligadas al usuario, a unos usuarios valorarán que estén mientras otros les desagradará que este

#### Basado en ROI (Return of investment)

Por cada PBIs el cliente le dará un valor que aportará a Producto mientras que los Developers darán un score al Esfuerzo de Creación, finalmente para saber el valor real de cada PBI se usará la formula:

ROI = Valor del cliente / Esfuerzo de creación = Valor total

Por ejemplo un PBI llamado "Crear menú de opciones por cada categoría" para el Cliente puede tener un Valor de 7 mientras que para los Developers un Esfuerzo de 2, usando la formula tenemos que el Valor Total de ese PBI es de 3.5

El PO (Product Owner) priorizará las tareas (PBIs) que cumplan los criterios necesarios y que **tengan un Valor total más alto**

#### Planificación Estratégica

Se puntuará un PBI teniendo en cuenta: el Valor de negocio y la Urgencia dada por los Developers, ambos en una escala ascendente de 1 a 5, la formula será:

PBI Valor = Valor de negocio x Urgencia de la tarea

Cuanto más alto sea el resultado de la formula, mayor prioridad tendrá el PBI


### Estimar el Product Backlog

Definiciones de estimaciones:

* Estimación Absoluta:
    Esta estimación es muy usada en las metodologías tradicionales, los tiempos los define el Cliente o el Project Manager, aquí se carece de Flexibilidad, de Feedback, de Adaptación. Estamos atados a un deadline. Aquí por ejemplo se usará el Diagrama de Gantt
* Estimación Relativa: 
    Es el tipo de estimación que usa frameworks como Scrum

#### Estimación Relativa

Es la forma recomendada para trabajar con Scrum al momento de estimar

No se estima por Horas o Días, se estima por Puntos (comparación), soló estiman quienes realmente van a desarrollar las tareas.

Si una tarea es muy grande se subdivirá

Ventajas:
* No comprometer fechas que posiblemente no podamos cumplir
* Estimaciones más precisas basadas en la forma de trabajar del Scrum Team
* Estar atentos a distintas circunstancias que nos puedan complicar al momento de hacer algo.

##### Tallas de camisetas

Consiste en asignar una Talla de Camiseta a cada PBI de acuerdo al esfuerzo requerido, tomando como referencia la tarea más sencilla a la que se le asignará XS por defecto, las demás tareas se irán estimando comparativamente con esta tarea

* XS: Una tarea simple
* S: Más compleja que una XS
* M: Más compleja que una S
* L: Más compleja que una M
* XL: Más compleja que una L

El esfuerzo de cada tarea es discutido y decidido por los Desarrolladores

##### Planning Poker

Se tiene en cuenta la serie de Fibonnacci para asignar un valor de esfuerzo a cada PBI, cuanto más grande sea el número mayor esfuerzo representa para la tarea

1 -> 2 -> 3 -> 5 -> 8 -> 13

El esfuerzo de cada tarea es discutido y decidido por los Desarrolladores, cada uno de sus integrantes le dará un valor a cada PBI, luego al tiempo todos mostrarán su estimado y a partir de eso se buscará un consenso, si no se llegara a tal los integrantes que esten en desacuerdo expondrán el motivo por el cuál puntuaron dicha Tarea con ese valor (por lo general lo general sucede con los extremos ej: si se voto 1, 3, 5, los extremos son 1 y 5), finalmente se debe volver a votar para asignar el valor que tendrá la tarea (en último caso promediar hacía arriba)

##### Canasta

Se usa también el método Fibonnacci. Cada Desarrollador tiene unas tarjetas donde están detalladas las Tareas y hay aprox 6 Canastas
con la secuencia de Fibonnacci, la idea es que cada Desarrollador ponga cada PBI (Tarea) en la canasta que según su criterio se adecua más al esfuerzo que se deberá invertir en dicha tarea

La dínamica para la negociación de cada tarea será similar a la Planning Poker

##### Votos

El funcionamiento es similar a la Estimación por Canasta, con la diferencia que en este caso las Tareas serán por ejemplo Cartulinas con la descripción de la tarea y estarán sobre una mesa, mientras que los Desarrolladores tendrán Fichas de Poker por ejemplo con valores que representar la secuencia de Fibonnacci, y deberán puntuar según su criterio el esfuerzo de cada PBI
