var getData = function(){
    var sname = document.getElementById("sname").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(sname == "") {
        document.getElementById("sname").focus();
    } else {
        if(name == "") {
            document.getElementById("name").focus();
        } else {
            if(email == "") {
                document.getElementById("email").focus();
            } else {
                if(password == "") {
                    document.getElementById("password").focus();
                } else {
                    console.log('Apellido: ' + sname + ' Nombre: ' + name + ' Email: ' + email)
                    document.getElementById("sname").value = "";
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = ""; 
                }
            }
        }
    }
}