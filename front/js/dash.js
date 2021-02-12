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
    window.location = "dashmenu.html";
}

function obterDatas(){
    let dataini = document.getElementById("dtinicio").value;
    let datafim = document.getElementById("dtfinal").value;

    if((dataini == "") || (datafim == "")){
        document.getElementById("msgErroData").innerHTML = "ATENÇÃO!<br>Data de início e a data final são campos obrigatórios!";
        return false;
    }
    if(dataini > datafim){
        document.getElementById("msgErroData").innerHTML = "ATENÇÃO!<br>Data de início não pode ser maior que a data final!";
        return false;
    }
    else{
        document.getElementById("msgErroData").innerHTML = "";
    }

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

    if(msg)
    {
        fetch("http://localhost:8080/evento/data", msg)
            .then(res => res.json())
            .then(res => preencheEventos(res));
    }       
}

function preencheEventos(lista) {
    //console.log(lista);
    $(document).ready(function() {
        $('#tabelaDados').DataTable( {
            data: lista,
            "columnDefs": [
                { "title": "Data", "targets": [0], "visible": true, "witdh": "10%", "name": "dataevt", orderable: true },
                { "title": "Alarme","targets": [1], "visible": true, "witdh": "40%", "name": "alarme.nome", orderable: true },
                { "title": "Equipamento","targets": [2], "visible": true, "witdh": "50%", "name": "equipamento.hostnome", orderable: true }
            ],
            columns: [
                { data: 'dataevt' },
                { data: 'alarme.nome' },
                { data: 'equipamento.hostnome' }
            ],           
            "order": [[ 1, "asc" ]],
            "pageLength": 25,
            "language": {
                "lengthMenu": "Exibir _MENU_ registros",
                "zeroRecords": "Nothing found - sorry",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "Nenhum registro encontrado",
                "infoFiltered": "(filtrado de _MAX_ total de registros)",
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último",
                }
            }

        } );
    } );
}

/*
function preencheEventos(res) {
    //console.log(res);

    let tabela = "<table class='tblrelatorio'>";
    tabela += "<tr><td colspan='3'><h6>Relatório de Eventos</h6></td><tr>";
    tabela += "<tr><th class='tblrelatorioth'>Data</th>";
    tabela += "<th class='tblrelatorioth'>Alarme</th>";
    tabela += "<th class='tblrelatorioth'>Equipamento</th></tr>"
    for (i = 0; i < res.length; i++)
    {
        tabela += `<tr><td class='tblrelatoriotd' align='center'> ${new Date(res[i].dataevt).toLocaleDateString("pt-BR", {timeZone: 'UTC'})} </td>`;
        tabela += `<td class='tblrelatoriotd'> ${res[i].alarme.nome} </td>`;
        tabela += `<td class='tblrelatoriotd'> ${res[i].equipamento.hostnome} </td></tr>`;
    }
    
    tabela += "</table>";
    document.getElementById("relatorio").innerHTML = tabela;

    // <td> ${new Date(res[i].dataevt).toLocaleDateString("pt-BR", {timeZone: 'UTC'})} </td> 

}
*/
