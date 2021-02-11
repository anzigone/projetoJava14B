function validaLogin() {
    let userTxt = localStorage.getItem("userLogged");

    if (!userTxt) {
        window.location = "index.html";
    }

    let user = JSON.parse(userTxt);

    document.getElementById("imgUser").innerHTML = `<img src="${user.linkFoto}">`;
    document.getElementById("user").innerHTML = `${user.nome} (${user.racf})`;
}

function logout() {
    localStorage.removeItem("userLogged");
    window.location = "index.html";
}

