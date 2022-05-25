function login(){
    var msg = "";
    var user = document.querySelector("#user").value;
    var pass = document.querySelector("#pass").value;

    if (user == ""){
        alert("Debe ingresar su Nombre de Usuario!");
        return false;
    }
    else if (user.indexOf("@") == -1){
        alert('Debe ingresar al menos un "@" en su Usuario');
        return false;
    } else{
        msg = "Usuario ingresado correctamente! <br>";
    }

    if (pass == ""){
        alert("Debe ingresar su Contrase\u00F1a!");
        return false;
    } else{
        msg += "Contrase\u00F1a ingresada correctamente!";
    }
    if (msg != ""){
        var html = "<strong>"+ msg +"</strong>";
        document.querySelector(".form-login").innerHTML = html;
        //$(".form-login").html(html);
        setTimeout ("redireccionar()", 4000);
        return true;
    }
}

function redireccionar(){
    window.location="index.html";
}