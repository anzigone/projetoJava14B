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

function voltar(){
    window.location = "dashmenu.html";
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
    //console.log(JSON.stringify(lista));
    $(document).ready(function() {
        $('#tabelaDados').DataTable( {
            data: lista,
            "columnDefs": [
                { "title": "ID", "targets": [0], "visible": true, "witdh": "10%", "name": "id_alarme", orderable: true },
                { "title": "Nome","targets": [1], "visible": true, "witdh": "40%", "name": "nome", orderable: true },
                { "title": "Descrição","targets": [2], "visible": true, "witdh": "50%", "name": "descricao", orderable: false }
            ],
            columns: [
                { data: 'id_alarme' },
                { data: 'nome' },
                { data: 'descricao' }
            ],           
            "order": [[ 1, "desc" ]],
            "pageLength": 25,
            "language": {
                "lengthMenu": "Exibir _MENU_ registros por página",
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

/*  let tabela = "<table id='tabelaDados'class='tblrelatorio'>";
    tabela += "<tr><td colspan='3'><h6>Relatório dos tipos de alertas</h6></td><tr>";
    tabela += "<tr><th class='tblrelatorioth'>ID Alarme</th>";
    tabela += "<th class='tblrelatorioth'>Nome do Alarme</th>";
    tabela += "<th class='tblrelatorioth'>Descrição do Alarme</th></tr>"
    for (i = 0; i < lista.length; i++) {
        tabela += `<tr>`;
        tabela += `<td class="tblrelatoriotd" align="center"> ${lista[i].id_alarme} </td>`;
        tabela += `<td class="tblrelatoriotd"> ${lista[i].nome} </td>`;
        tabela += `<td class="tblrelatoriotd"> ${lista[i].descricao} </td>`
        tabela += `</tr>`;
    }
    tabela += "</table>";
    document.getElementById("relatorio").innerHTML = tabela;
*/
    // <td> ${new Date(res[i].dataevt).toLocaleDateString("pt-BR", {timeZone: 'UTC'})} </td> 

}
