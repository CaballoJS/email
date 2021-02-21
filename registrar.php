<?php 

include("con_db.php");


if (isset($_POST['register'])) {
    if (strlen($_POST['email']) >= 1 && strlen($_POST['contraseña']) >= 1) {
	    $email = trim($_POST['email']);
	    $contraseña = trim($_POST['contraseña']);
	    // $fechareg = date("d/m/y");
	    $consulta = "INSERT INTO datos(email, contraseña) VALUES ('$email','$contraseña')";

	
    }   else {
	    	?> 
	    	<h3 class="bad">¡Por favor complete los campos!</h3>
           <?php
    }
}

?>