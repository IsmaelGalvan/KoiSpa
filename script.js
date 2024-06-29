$(document).ready(function() {
        function checkWidth() {
            if ($(window).width() <= 500) {
                $('.serviciobtn').show();
            } else {
                $('.serviciobtn').hide();
            }
        }

        // Ejecuta la función cuando la página se carga
        checkWidth();

        // Vuelve a ejecutar la función cuando la ventana cambia de tamaño
        $(window).resize(function() {
            checkWidth();
        });

});

$(".servicios").click(function(){
    $("#serviciosCont").toggle();
});

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}


