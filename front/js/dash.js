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

function voltar(){

}

function obterDatas(){
    let dataini = document.getElementById("dtinicio").value;
    let datafim = document.getElementById("dtfinal").value;
    //alert(dataini);

    let dataMsg = {
        dt1: dataini,
        dt2: datafim
    }

    let cabecalho = {
        method: 'POST',
        body: JSON.stringify(dataMsg),
        headers: {
            'Content-type': 'application/json'
        }
    }
    
    return cabecalho;
}

function gerarRelatorioEventos() {
    
    let msg = obterDatas(); 

    fetch("http://localhost:8080/evento/data", msg)
        .then(res => res.json())
        .then(res => preencheEventos(res));
        
}

function preencheEventos(res) {
    console.log(res);
    let tabela = "<table class='tblrelatorio'>";
    tabela += "<tr class='tblreltr'><th>Data</th><th>Alarme</th><th>Equipamento</th></tr>"
    for (i = 0; i < res.length; i++)
    {
        tabela += `<tr class='tblreltr'><td class='tblreltr'> ${new Date(res[i].dataevt).toLocaleDateString("pt-BR", {timeZone: 'UTC'})} </td>`;
        tabela += `<td class='tblreltr'> ${res[i].alarme.nome} </td>`;
        tabela += `<td class='tblreltr'> ${res[i].equipamento.hostnome} </td></tr>`;
    }
    
    tabela += "</table>";
    document.getElementById("relatorio").innerHTML = tabela;

    // <td> ${new Date(res[i].dataevt).toLocaleDateString("pt-BR", {timeZone: 'UTC'})} </td> 

}
