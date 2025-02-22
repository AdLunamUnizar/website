---
title: Misión Artemisa
description: Sobre la misión Artemisa
date: 17/02/2025
photo: lanzamiento_artemisa.jfif
img: /images/blog/diseno_artemisa.jpg
---

# Misión Artemisa

El equipo de cohetería ALUnizar de la Universidad de Zaragoza sigue avanzando en el desafiante mundo de la cohetería amateur. Tras el aprendizaje adquirido con el cohete AUGUSTA, el equipo ha llevado a cabo el desarrollo y lanzamiento de ARTEMISA, un nuevo cohete con mejoras significativas en diseño, electrónica y recuperación. Este proyecto ha supuesto un reto tecnológico y humano que ha permitido consolidar el trabajo en equipo y el desarrollo de habilidades clave para el futuro.

## Diseño y especificaciones técnicas

ARTEMISA es un cohete de 103 cm de longitud y 5,8 cm de diámetro exterior, con un peso total de 1.483 g al momento del lanzamiento. Su diseño ha sido optimizado para alcanzar un apogeo estimado de 300 m, con una aceleración máxima de 4,85 g. 

![Diseño del cohete](/images/blog/diseno_artemisa.jpg "Diseño del cohete")

El fuselaje ha sido fabricado en cartón fenólico, mientras que la ojiva, aletas, portaelectrónica y rail-buttons han sido impresos en 3D con PLA. Este diseño modular ha permitido una mejor organización de los componentes y mayor facilidad en la integración de la electrónica y el sistema de recuperación.

## Propulsión: el corazón del ascenso

ARTEMISA ha sido impulsado por un motor sólido comercial de la marca Cesaroni Technology, modelo Cesaroni Pro38 1G-134G60-14A-RL. Este motor contaba con 68,3 g de propelente, generando un impulso total de 134 Ns, lo que llevó a ARTEMISA alcanzar el apogeo en 8,68 segundos. Una de sus particularidades ha sido la llama roja que generó durante su ascenso, característica del modelo Red Lightning. 

![Diseño del cohete en OpenRocket](/images/blog/diseno_artemisa_openrocket.jpg "Diseño en OpenRocket")

## Electrónica: recopilación de datos en tiempo real

Uno de los avances más importantes en ARTEMISA ha sido el desarrollo de su sistema electrónico, diseñado y construido íntegramente por el equipo de ALUnizar. Este subsistema tenía el objetivo de registrar datos de vuelo, como aceleración, velocidad y orientación, así como transmitir información en tiempo real a la estación terrestre. Para ello, se incorporaron los siguientes componentes:

- Arduino Nano V2 como microcontrolador principal.
- BMP280 como barómetro para estimar la altura.
- MPU6050, un acelerómetro y giroscopio de alta resolución.
- GPS NEO-6M para el rastreo de la posición del cohete.
- Módulo de comunicaciones LoRa con alcance de varios kilómetros.
- Tarjeta SD para almacenamiento de datos en tiempo real.
- Buzzer para facilitar la localización tras el aterrizaje.

<video width="320" height="240" controls>
  <source src="/videos/montaje_electronica.mp4" type="video/mp4">
  Tu navegador no soporta el elemento de vídeo.
</video>

## Sistema de recuperación: aprendizaje y mejoras

El sistema de recuperación de ARTEMISA se basó en la carga de eyección del motor, encargada de desplegar el paracaídas en el apogeo. Para optimizar este proceso, el equipo ajustó el delay del motor de 14 a 7 segundos, logrando un despliegue exitoso. Sin embargo, durante la recuperación, se produjo la rotura de la shock-cord, provocando que el módulo de propulsión cayera directamente al suelo. Afortunadamente, los daños fueron mínimos y se limitaron a la rotura de una de las aletas. 

![Equipo en la fase de preparación previa al lanzamiento](/images/blog/preparacion_artemisa_1.jpg)

![Equipo en la fase de preparación previa al lanzamiento](/images/blog/preparacion_artemisa_2.jpg)

## El día del lanzamiento

El lanzamiento de ARTEMISA tuvo lugar el 15 de febrero de 2025 en Alcolea de Cinca, Huesca, dentro del evento Inicio de Temporada de SpainRocketry. La jornada comenzó con una niebla densa y temperaturas de 7°C, que se despejaron con el paso de las horas hasta alcanzar los 17°C al momento del lanzamiento.
A las 14:05, tras meses de preparación y ajuste de los últimos detalles, ARTEMISA despegó con éxito. Aunque la electrónica no pudo registrar datos en tiempo real, la estimación del equipo sitúa el apogeo en 300 metros. 

<video width="320" height="240" controls>
  <source src="/videos/lanzamiento_artemisa.mp4" type="video/mp4">
  Tu navegador no soporta el elemento de vídeo.
</video>

## Lecciones aprendidas y futuro del proyecto

Cada lanzamiento supone un aprendizaje invaluable para el equipo, y ARTEMISA no ha sido la excepción. Entre los puntos clave destacados por el equipo tras esta experiencia, se encuentran:

- Planificación meticulosa: La cohetería exige una correcta gestión del tiempo donde es crucial establecer cronogramas realistas, tener en cuenta los plazos de fabricación, la disponibilidad de recursos y coordinar adecuadamente las tareas dentro del equipo.
- Trabajo en equipo y comunicación: El éxito de la misión depende de la colaboración y coordinación entre todos los miembros del equipo.
- Importancia de la documentación: Mantener registros detallados de cada fase del proyecto es fundamental. Desde las especificaciones del diseño hasta las decisiones de última hora, tener documentación clara ayuda a identificar fallos pasados y corregirlos en futuros lanzamientos. También es esencial para aprender de los errores y mejorar en el futuro.
- Adaptación a imprevistos: En un proyecto tan complejo como este, no todo sale según lo planeado. El equipo ha tenido que afrontar imprevistos como la falta de stock del motor o retrasos en las entregas de los componentes, fundamentalmente.
- Aprender de los errores: En la cohetería, analizar el error, entender su causa raíz y aplicar ese conocimiento para futuras misiones es esencial, ya que esos fracasos son a menudo los mejores maestros.

![Equipo en el lanzamiento de artemisa](/images/blog/equipo_lanzamiento_artemisa.jpg)

ARTEMISA ha sido un hito fundamental en el desarrollo de ALUnizar como proyecto sólido de cohetería universitaria en España. Los conocimientos adquiridos en este proyecto servirán de base para futuras misiones, con la vista puesta en mejorar la electrónica, optimizar la recuperación y alcanzar mayores altitudes en los próximos lanzamientos para llegar... ¡Ad Lunam! 🚀🌕