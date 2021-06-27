var getData = function(){
    var sname = document.getElementById("sname").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    if(sname == "") {
        document.getElementById("sname").focus();
    } else {
        if(name == "") {
            document.getElementById("name").focus();
        } else {
            if(email == "") {
                document.getElementById("email").focus();
            } else {
                if(comment == "") {
                    document.getElementById("comment").focus();
                } else {

                  
                        if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email))){
                            alert("La dirección de email es incorrecta.");
                            document.getElementById("email").focus();
                        } else {
                    console.log('Apellido: ' + sname + ' Nombre: ' + name + ' Email: ' + email)
                    document.getElementById("sname").value = "";
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("comment").value = "";
                        } 
                }
            }
        }
    }
}

