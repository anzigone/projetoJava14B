function autenticar(event) {
 event.preventDefault(); //interrompe o envio do formulário que é feito por padrão
    
    let usuario = document.getElementById("txtUser").value;
    let senha = document.getElementById("txtSenha").value;

    let objUsuario = {
        email: usuario,
        racf: usuario,
        senha: senha
    }

    let msg = {
        method: 'POST',
        body: JSON.stringify(objUsuario),
        headers: {
            'Content-type':'application/json'
        }
    }

    fetch("http://localhost:8080/usuario/login",msg)
        .then(res => tratarResposta(res));

}

function tratarResposta(retorno){ //fazer o tratamento de login e passagem de tela
    //console.log(retorno);
    if(retorno.status == 200){
        //document.getElementById('msgError').innerHTML = 'OK';
        retorno.json().then(dados => fazerLogin(dados));

    }else{
            document.getElementById('msgError').innerHTML = 'Usuário(a)/Senha inválido';
        }
    
}

function fazerLogin(usuario){
    //console.log(usuario);
    localStorage.setItem("userLogged", JSON.stringify(usuario));
    window.location = "dashmenu.html";
}