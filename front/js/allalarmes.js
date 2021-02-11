function validaLogin() {
    let userTxt = localStorage.getItem("userLogged");

    if (!userTxt) {
        window.location = "index.html";
    }
    let user = JSON.parse(userTxt);

    document.getElementById("imgUser").innerHTML = `<img src="${user.linkFoto}">`;
    document.getElementById("user").innerHTML = `${user.nome} (${user.racf})`;
    listarTodos();
}

function logout() {
    localStorage.removeItem("userLogged");
    window.location = "index.html";
}

function voltar() {

}

function listarTodos(){
    const url = "http://localhost:8080/alarme/all";

    fetch(url)
        .then(retorno => tratarRetornoTodos(retorno));
        
}

function tratarRetornoTodos(dados){
    dados.json().then(alarmes => exibirDados(alarmes));
}

function exibirDados(lista) {
    console.log(lista);
    let tabela = "<table class='tblrelatorio'>";
    tabela += "<tr class='tblreltr'><th>ID Alarme</th><th>Nome do Alarme</th><th>Descrição do Alarme</th></tr>"
    for (i = 0; i < lista.length; i++) {
        tabela += `<tr class='tblreltr'><td class='tblreltr'> ${lista[i].id_alarme} </td>`;
        tabela += `<td class='tblreltr'> ${lista[i].nome} </td>`;
        tabela += `<td class='tblreltr'> ${lista[i].descricao} </td></tr>`;
    }

    tabela += "</table>";
    document.getElementById("relatorio").innerHTML = tabela;

    // <td> ${new Date(res[i].dataevt).toLocaleDateString("pt-BR", {timeZone: 'UTC'})} </td> 

}
