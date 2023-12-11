<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Aquí podrías agregar la lógica para enviar el correo electrónico
    // Por ejemplo, usando la función mail() de PHP

    $to = "jose98_rbb@hotmail.com";
    $subject = "Nuevo mensaje de contacto de $name";
    $headers = "From: $email";

    // Asegúrate de que la información del formulario sea segura antes de enviarla
    $safeMessage = htmlspecialchars($message);

    mail($to, $subject, $safeMessage, $headers);

    // Puedes agregar una redirección o respuesta adecuada después de enviar el correo
    echo "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.";
} else {
    // Manejo de solicitudes no autorizadas
    http_response_code(403);
    echo "Acceso prohibido.";
}
?>
