// Establece la fecha objetivo para el countdown
const countdownDate = new Date("July 01, 2024 12:00:00").getTime();

// Actualiza el contador cada segundo
const countdownFunction = setInterval(function() {
    // Obtiene la fecha y hora actual
    const now = new Date().getTime();

    // Calcula la diferencia entre la fecha objetivo y la fecha actual
    const distance = countdownDate - now;

    // Calcula los días, horas, minutos y segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra los resultados en los elementos correspondientes
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Función para manejar las animaciones de desplazamiento
document.addEventListener('scroll', function() {
    const spanFirst = document.querySelector('.main-section h1 span');
    const scrollPosition = window.scrollY;

    // Define breakpoints for animations
    const fadeStart = 100; // Start fading out the span
    const fadeEnd = 300; // Finish fading out the span

    // Fade away span
    if (scrollPosition >= fadeStart && scrollPosition <= fadeEnd) {
        spanFirst.style.opacity = 1 - ((scrollPosition - fadeStart) / (fadeEnd - fadeStart));
    } else if (scrollPosition > fadeEnd) {
        spanFirst.style.opacity = 0;
    } else {
        spanFirst.style.opacity = 1;
    }
});

// Función para manejar la visibilidad de las secciones
document.addEventListener('DOMContentLoaded', () => {
    const linkInicio = document.getElementById('link-inicio');
    const linkInformacion = document.getElementById('link-informacion');
    const linkContacto = document.getElementById('link-contacto'); // Agrega el botón de contacto
    const mainSection = document.getElementById('main-section');
    const informacionSection = document.getElementById('informacion');
    const contactoSection = document.getElementById('contacto'); // Agrega la sección de contacto
    const buttons = document.getElementById('buttons');
    const header = document.querySelector('.header');

    linkInicio.addEventListener('click', (e) => {
        e.preventDefault();
        mainSection.style.display = 'block';
        informacionSection.style.display = 'none';
        contactoSection.style.display = 'none'; // Asegura que la sección de contacto también se oculte
        buttons.style.display = 'flex';
        header.style.display = 'block';
    });

    linkInformacion.addEventListener('click', (e) => {
        e.preventDefault();
        mainSection.style.display = 'none';
        informacionSection.style.display = 'block';
        contactoSection.style.display = 'none'; // Asegura que la sección de contacto también se oculte
        buttons.style.display = 'none';
        header.style.display = 'none';
    });

    // Evento de clic para el botón de contacto
    linkContacto.addEventListener('click', (e) => {
        e.preventDefault();
        mainSection.style.display = 'none';
        informacionSection.style.display = 'none';
        header.style.display = 'none';
        buttons.style.display = 'none';
        contactoSection.style.display = 'block'; // Corrige aquí para mostrar la sección de contacto
    });
});
