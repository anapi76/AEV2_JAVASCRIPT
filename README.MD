### Para el archivo index.html proporcionado desarrolla las siguientes funcionalidades en un script main.js:
a. Al cargar la página se realizará una petición HTTP a la API REST pública ‘The Rick and Morty API’:
• The Rick and Morty API

b. Con los datos de los personajes de la serie devueltos de la petición GET, implementa la lógica necesaria para mostrar por pantalla la imagen, el género, la especie, el nombre y el status de los tres primeros personajes de la serie.

c. Al realizar hover sobre cada uno de los tres personajes aparecerá un botón con la inscripción ‘Ampliar’ –Nota: el hover viene ya implementado mediante CSS, no es necesario realizarlo desde JavaScript-. Al pulsar sobre el botón de un personaje, aparecerá por pantalla una pantalla modal que permitirá visualizar la imagen del personaje, agrandada, y su nombre sobre ella.

d. Al pulsar sobre el botón ‘Mostrar más’ que aparecen debajo de los tres personajes, se ampliará el número de personajes hasta totalizar 20.

e. Debajo de la última fila de personajes aparecerá un botón con la inscripción ‘siguientes’. Si el usuario pulsa sobre este botón, se mostrará la siguiente ‘página’, cambiando en la parte superior de la misma el número correspondiente. Por ejemplo si pasamos a la página siguiente a la primera, se mostrará Página 2. En dicha página se mostrarán los tres primeros personajes de los veinte siguientes a los mostrados en la primera página y debajo de ellos el botón con la inscripción ‘Mostrar más’.

f. Si se pulsa sobre el botón mostrar más, se mostrarán los personajes hasta totalizar 20. En el caso de esta Página 2 se mostrarán los personajes del 21 al 40. Debajo de la fila con los últimos personajes de esta página, se volverá a mostrar el botón ‘siguientes’ y otro ‘anteriores’ que permitirán pasar a la página siguiente y anterior, respectivamente. Pulsando estos botones se podrá llegar a la última página.

g. Si el usuario pulsa sobre el nombre del personaje, éste se añadirá a la lista de favoritos del usuario. Esta lista estará guardada en el almacenamiento local del navegador. El usuario podrá consultarla al pulsar sobre el título de primer nivel de la página ‘Rick & Morty’. El subtítulo pasara a mostrar la inscripción ‘Página: favoritos’.

h. Sobre estos personajes favoritos se podrán realizar las mismas acciones que sobre los anteriores, esto es, se podrá visualizar una imagen modal al hacer click sobre el botón ampliar que aparecerá al hacer hover sobre la imagen de cada personaje. Además, debajo de los personajes favoritos se mostrará un botón con la inscripción ‘volver’ que permitirá volver a la primera página, con todos los personajes.

i. Al cargarse cada página y mostrarse los tres primeros personajes correspondientes a ella, los nombres de todos los personajes visibles se animarán, formándose letra a letra a partir de una tirada aleatoria que mostrará varias letras hasta conformar el nombre completo de cada personaje. Esta animación sucederá tanto al cargar la primera página como al pasar de una página a la siguiente –cuando sólo se muestren tres personajes- y, además, cuando se pulse sobre el botón “mostrar más”, aplicándose la animación únicamente a los personajes añadidos –es decir, se aplicará a todos los personajes de la página a excepción de los tres primeros, que han mostrado sus nombres previamente-. Nota: consultar video para más detalle.

j. Las imágenes de los personajes tendrán una transición de 2 segundos.

k. Para esta actividad no se permitirá la utilización del bucle for, penalizándose su uso.
