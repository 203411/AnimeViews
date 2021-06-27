var getData = function(){
    var name = document.getElementById("name").value;
    var apodo = document.getElementById("apodo").value;
    var email = document.getElementById("email").value;
    var motivo = document.getElementById("motivo").value;
    var mensaje = document.getElementById("comit").value;
    if(name == "") {
        document.getElementById("name").focus();
    } else {
        if(apodo == "") {
            document.getElementById("apodo").focus();
        } else {
            if(email == "") {
                document.getElementById("email").focus();
            } else {
                if(motivo == "") {
                    document.getElementById("motivo").focus();
                } else {
                    if(mensaje ==""){
                        document.getElementById("comit").focus();
                    }else{
                        console.log('Nombre: ' + name + ' Apodo: ' + apodo + ' Email: ' + email + ' Mensaje: '+mensaje);
                        document.getElementById("name").value = "";
                        document.getElementById("apodo").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("motivo").value = ""; 
                        document.getElementById("comit").value = "";
                    }
                }
            }
        }
    }
}