

var login = document.getElementById("login").value;
var senha = document.getElementById("senha").value;


let log = "emailteste@hotmail.com";
let sen = "senhateste123";

function verificaLogin() {
    if (log === login && sen === senha) {
        alert("Login Realizado Com sucesso!!");
    } else {
        alert("Email ou Senha incorretos");
    }
};





