// Lista de URLs de imágenes de fondo
const backgrounds = [
  'https://images.pexels.com/photos/5875642/pexels-photo-5875642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Imagen 1
  'https://images.pexels.com/photos/19253501/pexels-photo-19253501/free-photo-of-madera-vintage-colegio-escuela.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Imagen 2
  'https://images.pexels.com/photos/7234410/pexels-photo-7234410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Imagen 3
];

// Función para cambiar el fondo
function changeBackground() {
  // Seleccionar una imagen aleatoria
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const randomBackground = backgrounds[randomIndex];

  // Cambiar el fondo del body
  document.body.style.backgroundImage = `url(${randomBackground})`;
}

// Cambiar el fondo cada 5 segundos (5000 milisegundos)
setInterval(changeBackground, 5000);

// Llamar a la función inmediatamente para establecer el fondo al cargar la página
changeBackground();


