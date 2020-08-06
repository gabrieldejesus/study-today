function start() {
    let question = document.getElementById('question').value;
    document.getElementById('pergunta').style.display = 'none';
    document.getElementById('tarefas').style.display = 'flex';
    if(question === '') {
        document.getElementById('assunto').innerHTML = `Tenha um ótimo dia 🧐`;
    } else {
        document.getElementById('assunto').innerHTML = `Você está aprendendo <span>${question}</span>`;
    }
}

function add () {
    let tarefa = document.getElementById('tarefa').value;
    let listaHtml = document.getElementById('lista').innerHTML;
    listaHtml = listaHtml + "<li>↪ "+tarefa+"</li>";
    document.getElementById('lista').innerHTML = listaHtml;
}