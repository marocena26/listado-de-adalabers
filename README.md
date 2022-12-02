# Módulo 3: Ejercicio de evaluación intermedia👩🏻‍💻 

Trabajo realizado por la alumna María Elena Arocena López durante la evaluación intermedia del Módulo 3: React.

## Listado de Adalabers📄:

En el siguiente ejercicio desarrollaremos una **aplicación web sencilla con React** con el objetivo de que nos ayude a tener un registro de las compañeras que conforman esta promo y a apuntar la especialidad de cada una de ellas.

## Pasos a seguir🎯:

### 1º Pintar el listado de Adalabers

Para empezar el ejercicio queremos:

1. Pintar una cabecera con un título que ponga Adalabers.
2. Pintar el listado de Adalabers inicial. Para ello utilizaremos la siguiente API: https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adalabers-v1/promo-radsajsd.json

### 2º Añadir a una nueva Adalaber

A continuación, queremos añadir los datos de una compañera nueva. Para ello seguiremos los siguientes pasos:

1. Crear un formulario con los campos:

- Nombre de la compañera
- Nombre de su tutora
- Especialidad en la que destaca
- Un botón para Añadir una nueva Adalaber.

2. Cuando la usuaria pulse en el botón, hay que añadir la Adalaber al listado de alumnas para que ésta aparezca en la tabla.

### 3º Filtrar el listado de Adalabers

A continuación queremos filtrar las alumnas por nombre y por tutora.

Para **filtrar por nombre**:

1. Añade un recuadro sobre la tabla del listado de alumnas donde la usuaria pueda escribir texto.
2. Añade la funcionalidad para que, cuando la usuaria escriba en ese `<input>`, el listado de Adalabers se re-pinte mostrando solo las que su nombre incluya el texto que ha escrito la usuaria.

Para **filtrar por tutora**:

1. Añade un <select> a la cabecera que tenga las siguientes opciones:

- Cualquiera (es la opción por defecto)
- Yanelis
- Dayana
- Iván

2. Añade la funcionalidad para que, cuando la usuaria cambie ese `<select>`, el listado de Adalabers se re-pinte mostrando solo las que coincidan con la opción seleccionada.

### 4º Mostrar redes sociales

Después de pintar el listado, podemos intentar pintar una columna más en nuestra tabla con enlaces a las redes sociales que tiene cada Adalaber:

1. Añade una columna más en la cabecera de la tabla.
2. Añade una celda más a cada fila.
3. El contenido de la celda extra de cada fila serán los nombres de las redes sociales de cada Adalaber. Puede ser que no tenga ninguna o puede ser que tenga hasta 3.
4. Añade un enlace `<a>` al nombre de la red social que abra la URL (o dirección) de la misma.

### 5º Obtén los datos desde el API con un fetch

Implementa la funcionalidad de traer los datos desde el servidor cuando se cargue la página. Sólo debe pedir los datos al cargar/refrescar la página y no cuando creamos una nueva adalaber o cuando usamos algún filtro.

### 6º Maquetación libre

<img width="949" alt="image" src="https://user-images.githubusercontent.com/113302094/205404169-a4030c32-ec00-499c-b903-44c10d65ca84.png">

## Pasos a seguir para utilizar este proyecto en vuestro ordenador💾:

Este proyecto se ha realizado utilizando una plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas, como es el Adalab web starter kit. Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más. Para poder trabajar con él se debe tener previamente instalado Node JS.

### Pasos a seguir cada vez que se quiere arrancar un proyecto desde cero:

- Crea tu propio repositorio.
- Descarga el Starter kit desde **[GitHub](https://github.com/Adalab/Adalab-web-starter-kit)**.
- Copia todos los ficheros en la carpeta raíz del repositorio.
- Abre una terminal e instala las dependencias locales ejecutando en la terminal de comando:

```bash
npm install
```

### Pasos para arrancar el proyecto:

**El proyecto hay que arrancarlo cada vez que nos pongamoss a programar**, para ello ejecutaremos el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
  - Convierte los ficheros SASS en CSS.
  - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya podemos empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

## Resultado final✨:

Puedes echar un vistazo a cómo quedó en Github Pages: **[Módulo 3: Ejercicio de evaluación intermedia](https://beta.adalab.es/modulo-3-evaluacion-intermedia-marocena26/)**.

Cualquier aportación será bien recibida, ¡Muchas gracias! 😉.
