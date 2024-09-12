function validar_inicio(){
   var usuario = document.getElementById("Email1").value
   var contrasena = document.getElementById("InputPassword1").value

    if(usuario === "admin" && contrasena === "0000"){
        window.location.href = "../Pages/index.html"
    }
    else{
        document.getElementById('error__p').style.display = 'block';
    }
}

function enviar(){
    var correo = document.getElementById("recuperar__correo").value
    if(correo == "correo.ejemplo@gmail.com"){
        document.getElementsByClassName("recuperar__codigo")[0].style.display = "block";
        document.getElementById("boton3").style.display = "block";
        document.getElementById('error__p').style.display = 'none';
    }
    else{
        document.getElementById('error__p').style.display = 'block';
    }
}
