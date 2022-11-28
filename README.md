# Módulo 3: Ejercicio de evaluación intermedia
Trabajo realizado por la alumna María Elena Arocena López durante la evaluación intermedia del Módulo 3: React.

## Listado de Adalabers
Vamos a llevar la cuenta de las compañeras que somos en esta promo y a apuntar la especialidad de cada una. Queremos crear una aplicación para gestionar alumnas de Adalab y.. ¡¡¡lo vamos a hacer con React!!! A continuación detallamos lo que queremos hacer.

### 1º Pintar el listado de Adalabers

Para empezar el ejercicio queremos:
1. Pintar una cabecera con un título que ponga Adalabers.
2. Pintar el listado de Adalabers inicial. Para ello os facilitamos los datos en la siguiente API: https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adalabers-v1/promo-radsajsd.json

Os recomendamos que primero copiéis el contenido del API y los peguéis en un fichero json en vuestro proyecto. Más adelante os encargaréis del fetch(). De momento lo importáis en vuestro componente App y lo guardáis en el estado.

Después, generar el HTML de la página con los datos que habéis importado del json. Recordad que las etiquetas para hacer tablas en HTML son:

```bash
<table className="table">
<!-- Fila de cabecera -->
<thead><tr>
<th>Nombre</th>
<th>Tutora</th>
<th>Especialidad</th>
</tr></thead>
<!-- Fin fila de cabecera -->
<tbody>
<!-- Primera fila -->
<tr>
<td>MariCarmen</td>
<td>Yanelis</td>
<td>Python</td>
</tr>
<!-- Segunda fila -->
<tr>
<td>Amparo</td>
<td>Dayana</td>
<td>IA</td>
</tr>
<!-- Tercera fila -->
<tr>
<td>Escandia</td>
<td>Iván</td>
<td>3D graphics</td>
</tr>
</tbody>
</table>

```
Los elementos <table>, <thead> y <tbody> son fijos. La parte variable de la tabla son los <tr> que se crean por cada elemento del array de datos dentro de la etiquteta <tbody> de la tabla. Esos <tr> los debemos generar desde React.

Y cuando se vean todos los datos, nos ocuparemos del fetch para obtener los datos directamente del API y no tenerlos "grabados a fuego" en el código fuente de nuestra aplicación.

### 2º Añadir a una nueva Adalaber

A continuación, queremos añadir los datos de una compañera nueva. Para ello seguiremos los siguientes pasos:

1. Crear un formulario con los campos:
- Nombre de la compañera
- Nombre de su tutora
- Especialidad en la que destaca
- Un botón para Añadir una nueva Adalaber.
       
2. Cuando la usuaria pulse en el botón, hay que añadir la Adalaber al listado de alumnas para que ésta aparezca en la tabla.

### 3º Filtrar el listado de Adalabers (BONUS)

A continuación queremos filtrar las alumnas por nombre y por tutora. Intenta hacer uno de los dos y,
cuando lo tengas controlado, implementa el restante (no hace falta que estén los dos filtros).

Para filtrar por nombre:

1. Añade un recuadro sobre la tabla del listado de alumnas donde la usuaria pueda escribir texto.
2. Añade la funcionalidad para que, cuando la usuaria escriba en ese <input>, el listado de Adalabers se re-pinte mostrando solo las que su nombre incluya el texto que ha escrito la usuaria (aplicando también el filtrado por tutora, si ya lo tuvieras implementado).

Para filtrar por tutora:

1. Añade un <select> a la cabecera que tenga las siguientes opciones:
- Cualquiera (es la opción por defecto)
- Yanelis
- Dayana
- Iván
2. Añade la funcionalidad para que, cuando la usuaria cambie ese <select>, el listado de Adalabers se re-pinte mostrando solo las que coincidan con la opción seleccionada (aplicando también el filtrado por nombre, si procede).

### 4º Mostrar redes sociales (BONUS)

Después de pintar el listado, podemos intentar pintar una columna más en nuestra tabla con enlaces a las redes sociales que tiene cada Adalaber. Puedes guiarte con los siguientes pasos:

1. Añade una columna más en la cabecera de la tabla.
2. Añade una celda más a cada fila.
3. El contenido de la celda extra de cada fila serán los nombres de las redes sociales de cada Adalaber. Puede ser que no tenga ninguna o puede ser que tenga hasta 3.
4. Añade un enlace <a> al nombre de la red social que abra la URL (o dirección) de la misma.

### 5º Obtén los datos desde el API con un fetch (BONUS)
Implementa la funcionalidad de traer los datos desde el servidor cuando se cargue la página. Sólo debe pedir los datos al cargar/refrescar la página y no cuando creamos una nueva adalaber o cuando usamos algún filtro.

### 6º Maqueta a tu gusto (BONUS)
No te vamos a decir cómo debes poner bonita tu web porque tienes más estilo y flow que nosotras.
