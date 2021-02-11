function validaLogin() {
    let userTxt = localStorage.getItem("userLogged");

    if (!userTxt) {
        window.location = "index.html";
    }

}

function logout() {

}

function voltar(){

}

function obterDatas(){
    let dataini = document.getElementById("dtinicio").value;
    let datafim = document.getElementById("dtfinal").value;

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

    // <td> ${new Date(res[i].dataevt).toLocaleDateString("pt-BR", {timeZone: 'UTC'})} </td> 

}
